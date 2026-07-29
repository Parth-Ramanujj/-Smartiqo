
import handler from './api/fallback.js';
const req = { url: '/api/admin/users', method: 'GET', headers: { host: 'localhost' } };
const res = {
  setHeader: () => {},
  status: function(code) { console.log('STATUS:', code); return this; },
  json: function(obj) { console.log('JSON:', obj); return this; },
  send: function(data) { console.log('SEND:', data.substring(0, 50)); return this; },
  end: function() { console.log('END'); }
};
handler(req, res);

