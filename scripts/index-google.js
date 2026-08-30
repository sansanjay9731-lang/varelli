const fs = require('fs');
const crypto = require('crypto');
const https = require('https');

const credsPath = '/Users/apple/.gemini/antigravity/scratch/varelli/varelli-service-account.json';
const creds = JSON.parse(fs.readFileSync(credsPath, 'utf8'));

const urls = [
  "https://varelli.co.in/",
  "https://varelli.co.in/home-automation",
  "https://varelli.co.in/home-automation/bangalore",
  "https://varelli.co.in/private-cinema",
  "https://varelli.co.in/private-cinema/bangalore",
  "https://varelli.co.in/home-theatre",
  "https://varelli.co.in/home-theatre/bangalore",
  "https://varelli.co.in/fresh-air-ventilation",
  "https://varelli.co.in/fresh-air-ventilation/bangalore",
  "https://varelli.co.in/central-vacuum",
  "https://varelli.co.in/central-vacuum/bangalore",
  "https://varelli.co.in/home-security",
  "https://varelli.co.in/home-networking",
  "https://varelli.co.in/brands",
  "https://varelli.co.in/architects",
  "https://varelli.co.in/residences",
  "https://varelli.co.in/products",
  "https://varelli.co.in/studio",
  "https://varelli.co.in/contact",
  "https://varelli.co.in/journal",
  "https://varelli.co.in/journal/best-home-automation-company-bangalore",
  "https://varelli.co.in/journal/smart-home-automation-mumbai",
  "https://varelli.co.in/journal/knx-home-automation-india",
  "https://varelli.co.in/journal/home-theatre-cost-india",
  "https://varelli.co.in/journal/dolby-atmos-speakers-india",
  "https://varelli.co.in/journal/luxury-smart-home-bangalore",
  "https://varelli.co.in/journal/basalte-keypad-india",
  "https://varelli.co.in/journal/zehnder-fresh-air-system-india",
  "https://varelli.co.in/journal/central-vacuum-system-india",
  "https://varelli.co.in/journal/knx-vs-crestron-vs-control4",
  "https://varelli.co.in/journal/home-automation-cost-india-2026",
  "https://varelli.co.in/journal/home-automation-cost-india-2025",
  "https://varelli.co.in/journal/dolby-atmos-room-design-guide",
  "https://varelli.co.in/journal/private-cinema-vs-home-theatre",
  "https://varelli.co.in/journal/fresh-air-ventilation-vs-air-purifier",
  "https://varelli.co.in/journal/home-automation-cost-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-bangalore",
  "https://varelli.co.in/journal/knx-vs-control4",
  "https://varelli.co.in/journal/private-cinema-design-guide",
  "https://varelli.co.in/journal/what-is-home-automation",
  "https://varelli.co.in/journal/dolby-atmos-home-theatre"
];

function base64url(str) {
  return Buffer.from(str)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function getAccessToken() {
  return new Promise((resolve, reject) => {
    const now = Math.floor(Date.now() / 1000);
    const header = { alg: 'RS256', typ: 'JWT' };
    const claimSet = {
      iss: creds.client_email,
      scope: 'https://www.googleapis.com/auth/indexing',
      aud: creds.token_uri,
      exp: now + 3600,
      iat: now,
    };

    const unsignedToken = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(claimSet))}`;
    const signer = crypto.createSign('RSA-SHA256');
    signer.update(unsignedToken);
    const signature = base64url(signer.sign(creds.private_key));
    const jwt = `${unsignedToken}.${signature}`;

    const postData = new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }).toString();

    const req = https.request(
      creds.token_uri,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(postData),
        },
      },
      (res) => {
        let body = '';
        res.on('data', (d) => (body += d));
        res.on('end', () => {
          const parsed = JSON.parse(body);
          if (parsed.access_token) resolve(parsed.access_token);
          else reject(new Error('OAuth failed: ' + body));
        });
      }
    );

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

function submitUrl(token, url) {
  return new Promise((resolve) => {
    const data = JSON.stringify({ url, type: 'URL_UPDATED' });
    const req = https.request(
      'https://indexing.googleapis.com/v3/urlNotifications:publish',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(data),
          Authorization: `Bearer ${token}`,
        },
      },
      (res) => {
        let body = '';
        res.on('data', (d) => (body += d));
        res.on('end', () => {
          resolve({ status: res.statusCode, body });
        });
      }
    );
    req.on('error', (err) => resolve({ status: 500, body: err.message }));
    req.write(data);
    req.end();
  });
}

async function main() {
  console.log(`Starting Google Indexing API submission for ${urls.length} URLs...`);
  const token = await getAccessToken();
  console.log('✓ Google Authentication Succeeded\n');

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const res = await submitUrl(token, url);
    if (res.status === 200) {
      console.log(`[${i + 1}/${urls.length}] ✓ 200 OK: ${url}`);
      successCount++;
    } else {
      console.log(`[${i + 1}/${urls.length}] ✗ ${res.status}: ${url}`);
      console.log(`    Error details: ${res.body}`);
      failCount++;
    }
    await new Promise((r) => setTimeout(r, 200));
  }

  console.log(`\n========================================`);
  console.log(`Google Indexing API Complete!`);
  console.log(`Success: ${successCount} | Failed: ${failCount}`);
  console.log(`========================================`);
}

main().catch(console.error);
