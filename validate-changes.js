const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DIR = __dirname;
const RECENT_MINUTES = 5;

console.log("=== Change Validation Workflow ===");
console.log(`Checking for changes in the last ${RECENT_MINUTES} minutes...`);

const filesToWatch = ['serve.js', 'api/shared-api.js', 'api/fallback.js', 'config.json', 'users.json'];
const modifiedFiles = [];
const syntaxErrors = [];

const now = new Date();

filesToWatch.forEach(file => {
  const filePath = path.join(DIR, file);
  if (fs.existsSync(filePath)) {
    const stat = fs.statSync(filePath);
    const mtime = new Date(stat.mtime);
    const diffMins = (now - mtime) / (1000 * 60);
    
    if (diffMins <= RECENT_MINUTES) {
      modifiedFiles.push({ file, time: mtime.toISOString() });
    }
    
    // Check syntax if it's a JS file
    if (file.endsWith('.js')) {
      try {
        execSync(`node -c "${filePath}"`, { stdio: 'ignore' });
      } catch (err) {
        syntaxErrors.push(file);
      }
    }
  }
});

console.log("\n--- Validation Report ---");
console.log(`Files modified recently: ${modifiedFiles.length}`);
modifiedFiles.forEach(m => console.log(` - ${m.file} (at ${m.time})`));

console.log(`\nSyntax Check Errors: ${syntaxErrors.length}`);
if (syntaxErrors.length > 0) {
  syntaxErrors.forEach(s => console.log(` - ERROR in ${s}`));
} else {
  console.log(" All checked JS files have valid syntax.");
}

console.log("\nServer Restart Verification:");
const logFile = path.join(DIR, 'logs', 'cart-sync.log');
// Just checking if log exists, actual restart requires querying the server or checking process uptimes.
console.log(" For full verification, ensure 'npm run dev' is running and observing nodemon output.");

async function checkEndpoints() {
  console.log("\nEndpoint Verification:");
  try {
    const config = JSON.parse(fs.readFileSync(path.join(DIR, 'config.json'), 'utf8'));
    const port = config.defaultPort || 8080;
    const res = await fetch(`http://localhost:${port}/api/auth/precheck`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'test' })
    });
    if (res.ok) {
      console.log(" ✅ API Server is responding correctly.");
    } else {
      console.log(` ❌ API Server responded with status: ${res.status}`);
    }
  } catch (err) {
    console.log(" ❌ Could not reach API server. Ensure it is running.");
  }
}

checkEndpoints();
