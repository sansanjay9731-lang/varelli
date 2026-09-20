const fs = require('fs');
const crypto = require('crypto');
const https = require('https');

const credsPath = '/Users/apple/.gemini/antigravity/scratch/varelli/varelli-service-account.json';
const creds = JSON.parse(fs.readFileSync(credsPath, 'utf8'));

const urls = [
  "https://varelli.co.in/home-automation-companies-bangalore",
  "https://varelli.co.in/home-theatre-companies-bangalore",
  "https://varelli.co.in/home-theatre-company-banashankari-bangalore",
  "https://varelli.co.in/home-theatre-company-bannerghatta-road-bangalore",
  "https://varelli.co.in/home-theatre-company-basavangudi-bangalore",
  "https://varelli.co.in/home-theatre-company-bellandur-bangalore",
  "https://varelli.co.in/home-theatre-company-btm-layout-bangalore",
  "https://varelli.co.in/home-theatre-company-cunningham-road-bangalore",
  "https://varelli.co.in/home-theatre-company-devanahalli-bangalore",
  "https://varelli.co.in/home-theatre-company-electronic-city-bangalore",
  "https://varelli.co.in/home-theatre-company-frazer-town-bangalore",
  "https://varelli.co.in/home-theatre-company-hebbal-bangalore",
  "https://varelli.co.in/home-theatre-company-hsr-layout-bangalore",
  "https://varelli.co.in/home-theatre-company-indiranagar-bangalore",
  "https://varelli.co.in/home-theatre-company-jayanagar-bangalore",
  "https://varelli.co.in/home-theatre-company-jp-nagar-bangalore",
  "https://varelli.co.in/home-theatre-company-koramangala-bangalore",
  "https://varelli.co.in/home-theatre-company-kr-puram-bangalore",
  "https://varelli.co.in/home-theatre-company-lavelle-road-bangalore",
  "https://varelli.co.in/home-theatre-company-malleshwaram-bangalore",
  "https://varelli.co.in/home-theatre-company-marathahalli-bangalore",
  "https://varelli.co.in/home-theatre-company-rajajinagar-bangalore",
  "https://varelli.co.in/home-theatre-company-richmond-town-bangalore",
  "https://varelli.co.in/home-theatre-company-sadashivanagar-bangalore",
  "https://varelli.co.in/home-theatre-company-ulsoor-bangalore",
  "https://varelli.co.in/home-theatre-company-whitefield-bangalore",
  "https://varelli.co.in/home-theatre-company-yelahanka-bangalore",
  "https://varelli.co.in/journal/best-home-automation-companies-bangalore-2026",
  "https://varelli.co.in/journal/best-home-theatre-companies-bangalore",
  "https://varelli.co.in/journal/home-theatre-companies-bangalore-comparison",
  "https://varelli.co.in/journal/how-to-choose-home-theatre-company-bangalore",
  "https://varelli.co.in/journal/luxury-smart-home-bangalore",
  "https://varelli.co.in/journal/smart-home-bangalore-checklist",
  "https://varelli.co.in/journal/smart-home-companies-bangalore-2026",
  "https://varelli.co.in/private-cinema-companies-bangalore",
  "https://varelli.co.in/smart-home-banashankari-bangalore",
  "https://varelli.co.in/smart-home-bannerghatta-road-bangalore",
  "https://varelli.co.in/smart-home-basavangudi-bangalore",
  "https://varelli.co.in/smart-home-bellandur-bangalore",
  "https://varelli.co.in/smart-home-btm-layout-bangalore",
  "https://varelli.co.in/smart-home-companies-bangalore",
  "https://varelli.co.in/smart-home-cunningham-road-bangalore",
  "https://varelli.co.in/smart-home-devanahalli-bangalore",
  "https://varelli.co.in/smart-home-electronic-city-bangalore",
  "https://varelli.co.in/smart-home-frazer-town-bangalore",
  "https://varelli.co.in/smart-home-hebbal-bangalore",
  "https://varelli.co.in/smart-home-hsr-layout-bangalore",
  "https://varelli.co.in/smart-home-indiranagar-bangalore",
  "https://varelli.co.in/smart-home-jayanagar-bangalore",
  "https://varelli.co.in/smart-home-jp-nagar-bangalore",
  "https://varelli.co.in/smart-home-koramangala-bangalore",
  "https://varelli.co.in/smart-home-kr-puram-bangalore",
  "https://varelli.co.in/smart-home-lavelle-road-bangalore",
  "https://varelli.co.in/smart-home-malleshwaram-bangalore",
  "https://varelli.co.in/smart-home-marathahalli-bangalore",
  "https://varelli.co.in/smart-home-rajajinagar-bangalore",
  "https://varelli.co.in/smart-home-richmond-town-bangalore",
  "https://varelli.co.in/smart-home-sadashivanagar-bangalore",
  "https://varelli.co.in/smart-home-ulsoor-bangalore",
  "https://varelli.co.in/smart-home-whitefield-bangalore",
  "https://varelli.co.in/smart-home-yelahanka-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-banashankari-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-bangalore-2026",
  "https://varelli.co.in/journal/home-automation-cost-bannerghatta-road-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-basavangudi-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-bellandur-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-btm-layout-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-cunningham-road-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-devanahalli-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-electronic-city-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-frazer-town-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-hebbal-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-hsr-layout-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-indiranagar-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-jayanagar-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-jp-nagar-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-koramangala-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-kr-puram-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-lavelle-road-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-malleshwaram-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-marathahalli-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-rajajinagar-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-richmond-town-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-sadashivanagar-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-ulsoor-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-whitefield-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-yelahanka-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-banashankari-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-bangalore-2026",
  "https://varelli.co.in/journal/home-theatre-cost-bannerghatta-road-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-basavangudi-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-bellandur-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-btm-layout-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-cunningham-road-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-devanahalli-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-electronic-city-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-frazer-town-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-hebbal-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-hsr-layout-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-indiranagar-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-jayanagar-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-jp-nagar-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-koramangala-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-kr-puram-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-lavelle-road-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-malleshwaram-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-marathahalli-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-rajajinagar-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-richmond-town-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-sadashivanagar-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-ulsoor-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-whitefield-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-yelahanka-bangalore",
  "https://varelli.co.in/journal/home-theatre-installation-bangalore-cost",
  "https://varelli.co.in/journal/knx-home-automation-bangalore-cost-2026",
  "https://varelli.co.in/journal/private-cinema-cost-bangalore-2026",
  "https://varelli.co.in/journal/private-cinema-room-bangalore-cost",
  "https://varelli.co.in/home-automation/bangalore",
  "https://varelli.co.in/home-automation/bangalore/banashankari",
  "https://varelli.co.in/home-automation/bangalore/bannerghatta-road",
  "https://varelli.co.in/home-automation/bangalore/basavangudi",
  "https://varelli.co.in/home-automation/bangalore/bellandur",
  "https://varelli.co.in/home-automation/bangalore/btm-layout",
  "https://varelli.co.in/home-automation/bangalore/cunningham-road",
  "https://varelli.co.in/home-automation/bangalore/devanahalli",
  "https://varelli.co.in/home-automation/bangalore/electronic-city",
  "https://varelli.co.in/home-automation/bangalore/frazer-town",
  "https://varelli.co.in/home-automation/bangalore/hebbal",
  "https://varelli.co.in/home-automation/bangalore/hebbal-kempapura",
  "https://varelli.co.in/home-automation/bangalore/hsr-layout",
  "https://varelli.co.in/home-automation/bangalore/indiranagar",
  "https://varelli.co.in/home-automation/bangalore/jayanagar",
  "https://varelli.co.in/home-automation/bangalore/jp-nagar",
  "https://varelli.co.in/home-automation/bangalore/kalyan-nagar",
  "https://varelli.co.in/home-automation/bangalore/koramangala",
  "https://varelli.co.in/home-automation/bangalore/kr-puram",
  "https://varelli.co.in/home-automation/bangalore/lavelle-road",
  "https://varelli.co.in/home-automation/bangalore/malleshwaram",
  "https://varelli.co.in/home-automation/bangalore/marathahalli",
  "https://varelli.co.in/home-automation/bangalore/rajajinagar",
  "https://varelli.co.in/home-automation/bangalore/richmond-town",
  "https://varelli.co.in/home-automation/bangalore/rr-nagar",
  "https://varelli.co.in/home-automation/bangalore/sadashivanagar",
  "https://varelli.co.in/home-automation/bangalore/sarjapur",
  "https://varelli.co.in/home-automation/bangalore/ulsoor",
  "https://varelli.co.in/home-automation/bangalore/vijayanagar",
  "https://varelli.co.in/home-automation/bangalore/whitefield",
  "https://varelli.co.in/home-automation/bangalore/yelahanka",
  "https://varelli.co.in/home-theatre/bangalore",
  "https://varelli.co.in/home-theatre/bangalore/banashankari",
  "https://varelli.co.in/home-theatre/bangalore/bannerghatta-road",
  "https://varelli.co.in/home-theatre/bangalore/basavangudi",
  "https://varelli.co.in/home-theatre/bangalore/bellandur",
  "https://varelli.co.in/home-theatre/bangalore/btm-layout",
  "https://varelli.co.in/home-theatre/bangalore/cunningham-road",
  "https://varelli.co.in/home-theatre/bangalore/devanahalli",
  "https://varelli.co.in/home-theatre/bangalore/electronic-city",
  "https://varelli.co.in/home-theatre/bangalore/frazer-town",
  "https://varelli.co.in/home-theatre/bangalore/hebbal",
  "https://varelli.co.in/home-theatre/bangalore/hebbal-kempapura",
  "https://varelli.co.in/home-theatre/bangalore/hsr-layout",
  "https://varelli.co.in/home-theatre/bangalore/indiranagar",
  "https://varelli.co.in/home-theatre/bangalore/jayanagar",
  "https://varelli.co.in/home-theatre/bangalore/jp-nagar",
  "https://varelli.co.in/home-theatre/bangalore/kalyan-nagar",
  "https://varelli.co.in/home-theatre/bangalore/koramangala",
  "https://varelli.co.in/home-theatre/bangalore/kr-puram",
  "https://varelli.co.in/home-theatre/bangalore/lavelle-road",
  "https://varelli.co.in/home-theatre/bangalore/malleshwaram",
  "https://varelli.co.in/home-theatre/bangalore/marathahalli",
  "https://varelli.co.in/home-theatre/bangalore/rajajinagar",
  "https://varelli.co.in/home-theatre/bangalore/richmond-town",
  "https://varelli.co.in/home-theatre/bangalore/rr-nagar",
  "https://varelli.co.in/home-theatre/bangalore/sadashivanagar",
  "https://varelli.co.in/home-theatre/bangalore/sarjapur",
  "https://varelli.co.in/home-theatre/bangalore/ulsoor",
  "https://varelli.co.in/home-theatre/bangalore/vijayanagar",
  "https://varelli.co.in/home-theatre/bangalore/whitefield",
  "https://varelli.co.in/home-theatre/bangalore/yelahanka",
  "https://varelli.co.in/private-cinema/bangalore",
  "https://varelli.co.in/private-cinema/bangalore/banashankari",
  "https://varelli.co.in/private-cinema/bangalore/bannerghatta-road",
  "https://varelli.co.in/private-cinema/bangalore/basavangudi",
  "https://varelli.co.in/private-cinema/bangalore/bellandur",
  "https://varelli.co.in/private-cinema/bangalore/btm-layout",
  "https://varelli.co.in/private-cinema/bangalore/cunningham-road",
  "https://varelli.co.in/private-cinema/bangalore/devanahalli",
  "https://varelli.co.in/private-cinema/bangalore/electronic-city",
  "https://varelli.co.in/private-cinema/bangalore/frazer-town",
  "https://varelli.co.in/private-cinema/bangalore/hebbal",
  "https://varelli.co.in/private-cinema/bangalore/hebbal-kempapura",
  "https://varelli.co.in/private-cinema/bangalore/hsr-layout",
  "https://varelli.co.in/private-cinema/bangalore/indiranagar",
  "https://varelli.co.in/private-cinema/bangalore/jayanagar",
  "https://varelli.co.in/private-cinema/bangalore/jp-nagar",
  "https://varelli.co.in/private-cinema/bangalore/kalyan-nagar",
  "https://varelli.co.in/private-cinema/bangalore/koramangala",
  "https://varelli.co.in/private-cinema/bangalore/kr-puram"
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
    await new Promise((r) => setTimeout(r, 150));
  }

  console.log(`\n========================================`);
  console.log(`Google Indexing API Complete!`);
  console.log(`Success: ${successCount} | Failed: ${failCount}`);
  console.log(`========================================`);
}

main().catch(console.error);
