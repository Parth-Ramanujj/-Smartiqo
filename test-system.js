const fs = require('fs');
const path = require('path');

const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8'));
const PORT = config.defaultPort || 8080;
const BASE_URL = `http://localhost:${PORT}`;

const stats = { passed: 0, failed: 0 };
let sessionCookie = '';

async function runTest(name, testFn) {
  try {
    await testFn();
    console.log(`[PASS] ${name}`);
    stats.passed++;
  } catch (err) {
    console.error(`[FAIL] ${name}`);
    console.error(`       -> ${err.message}`);
    stats.failed++;
  }
}

async function startTests() {
  console.log(`Starting automated tests against ${BASE_URL}...\n`);

  // 1. Server starts successfully & static files
  await runTest('Serve index.html', async () => {
    const res = await fetch(`${BASE_URL}/`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    if (!text.includes('<html')) throw new Error('Response is not HTML');
  });

  await runTest('Serve SPA fallback for unknown route', async () => {
    const res = await fetch(`${BASE_URL}/some-unknown-route`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    if (!text.includes('<html')) throw new Error('Did not return SPA fallback HTML');
  });

  // 2. Authentication Flow
  await runTest('Auth: Precheck invalid credentials', async () => {
    const res = await fetch(`${BASE_URL}/api/auth/precheck`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'fake@example.com', password: 'wrong' })
    });
    const data = await res.json();
    if (data.code !== 'INVALID') throw new Error(`Expected INVALID, got ${data.code}`);
  });

  await runTest('Auth: Login successfully', async () => {
    const res = await fetch(`${BASE_URL}/api/auth/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'info@smartiqo.com', password: 'Smartiqo@7772' })
    });
    
    const setCookies = res.headers.getSetCookie();
    if (!setCookies || setCookies.length === 0) throw new Error('No Set-Cookie header received');
    
    sessionCookie = setCookies.map(c => c.split(';')[0]).join('; ');
    
    const data = await res.json();
    if (!data.ok) throw new Error('Login response not ok');
  });

  // 3. API Endpoints returning expected data
  await runTest('API: Access protected /api/auth/session route', async () => {
    const res = await fetch(`${BASE_URL}/api/auth/session`, {
      headers: { 'Cookie': sessionCookie }
    });
    const data = await res.json();
    if (!data.user || !data.user.email) throw new Error('Protected session data invalid');
  });
  
  await runTest('API: Fetch orders (shared API logic)', async () => {
    const res = await fetch(`${BASE_URL}/api/admin/orders`, {
      headers: { 'Cookie': sessionCookie }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (!Array.isArray(data.orders)) throw new Error('Expected orders array');
  });

  // 4. Cart / Form error handling
  await runTest('API: Error handling on malformed JSON body', async () => {
    const res = await fetch(`${BASE_URL}/api/admin/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Cookie': sessionCookie },
      body: '{ bad_json '
    });
    // Express JSON parser catches this and returns 400 or 500
    if (res.status !== 400 && res.status !== 500) throw new Error(`Expected error status, got ${res.status}`);
  });

  // 5. Auth Logout
  await runTest('Auth: Logout successfully', async () => {
    const res = await fetch(`${BASE_URL}/api/auth/signout`, {
      method: 'POST',
      headers: { 'Cookie': sessionCookie, 'Content-Type': 'application/json' }
    });
    const setCookie = res.headers.get('set-cookie');
    if (!setCookie || !setCookie.includes('Max-Age=0')) throw new Error('Cookies were not cleared');
  });

  console.log('\n--- Test Report ---');
  console.log(`Passed: ${stats.passed}`);
  console.log(`Failed: ${stats.failed}`);
  
  if (stats.failed > 0) {
    process.exit(1);
  } else {
    console.log('All tests passed successfully! ✅');
    process.exit(0);
  }
}

startTests();
