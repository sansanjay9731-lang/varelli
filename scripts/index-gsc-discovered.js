const fs = require('fs');
const crypto = require('crypto');
const https = require('https');

const credsPath = '/Users/apple/.gemini/antigravity/scratch/varelli/varelli-service-account.json';
const creds = JSON.parse(fs.readFileSync(credsPath, 'utf8'));

const urls = [
  "https://varelli.co.in/central-vacuum/bangalore",
  "https://varelli.co.in/fresh-air-ventilation/bangalore",
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
  "https://varelli.co.in/journal/central-vacuum-bangalore",
  "https://varelli.co.in/journal/dali-2-lighting-bangalore",
  "https://varelli.co.in/journal/fresh-air-ventilation-bangalore",
  "https://varelli.co.in/journal/home-automation-cost-bangalore-2026",
  "https://varelli.co.in/journal/home-automation-showroom-bangalore",
  "https://varelli.co.in/journal/home-networking-bangalore",
  "https://varelli.co.in/journal/home-security-system-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-bangalore",
  "https://varelli.co.in/journal/home-theatre-cost-bangalore-2026",
  "https://varelli.co.in/journal/motorized-curtain-blinds-bangalore",
  "https://varelli.co.in/journal/private-cinema-bangalore-2026",
  "https://varelli.co.in/journal/private-cinema-cost-bangalore-2026",
  "https://varelli.co.in/private-cinema/bangalore",
  "https://varelli.co.in/brands",
  "https://varelli.co.in/brands/anthem",
  "https://varelli.co.in/brands/barco",
  "https://varelli.co.in/brands/basalte",
  "https://varelli.co.in/brands/crestron",
  "https://varelli.co.in/brands/doorbird",
  "https://varelli.co.in/brands/drainvac",
  "https://varelli.co.in/brands/ekinex",
  "https://varelli.co.in/brands/gira",
  "https://varelli.co.in/brands/hik-vision",
  "https://varelli.co.in/brands/jbl-synthesis",
  "https://varelli.co.in/brands/jung",
  "https://varelli.co.in/brands/kef",
  "https://varelli.co.in/brands/lutron",
  "https://varelli.co.in/brands/marantz",
  "https://varelli.co.in/brands/meridian",
  "https://varelli.co.in/brands/sonance",
  "https://varelli.co.in/brands/sonus-faber",
  "https://varelli.co.in/brands/stealth-acoustics",
  "https://varelli.co.in/brands/ubiquiti-unifi",
  "https://varelli.co.in/brands/zehnder",
  "https://varelli.co.in/journal/best-home-theatre-brands-india",
  "https://varelli.co.in/journal/4k-projector-vs-oled-tv-home-cinema",
  "https://varelli.co.in/journal/4k-vs-8k-home-cinema-india",
  "https://varelli.co.in/journal/access-control-india-guide",
  "https://varelli.co.in/journal/alexa-google-knx-integration-india",
  "https://varelli.co.in/journal/anthem-vs-marantz-india",
  "https://varelli.co.in/journal/barco-projector-india-price",
  "https://varelli.co.in/journal/barco-vs-sony-projector-india",
  "https://varelli.co.in/journal/basalte-keypad-india-guide",
  "https://varelli.co.in/journal/basalte-vs-ekinex-india",
  "https://varelli.co.in/journal/best-home-automation-company-hyderabad",
  "https://varelli.co.in/journal/best-home-automation-company-india",
  "https://varelli.co.in/journal/best-home-automation-company-mumbai",
  "https://varelli.co.in/journal/central-vacuum-cost-india-2026",
  "https://varelli.co.in/journal/central-vacuum-vs-dyson-india",
  "https://varelli.co.in/journal/cinema-acoustic-treatment-india",
  "https://varelli.co.in/journal/crestron-vs-savant-india",
  "https://varelli.co.in/journal/dali-2-lighting-cost-india-2026",
  "https://varelli.co.in/journal/dolby-atmos-speaker-placement-guide",
  "https://varelli.co.in/journal/dolby-atmos-speakers-india",
  "https://varelli.co.in/journal/dolby-atmos-vs-dts-x-india",
  "https://varelli.co.in/journal/erv-vs-hrv-vs-air-purifier-india",
  "https://varelli.co.in/journal/ev-charging-smart-home-india",
  "https://varelli.co.in/journal/fresh-air-ventilation-cost-india-2026",
  "https://varelli.co.in/journal/fresh-air-ventilation-mumbai",
  "https://varelli.co.in/journal/home-automation-apartment-india",
  "https://varelli.co.in/journal/home-automation-chennai",
  "https://varelli.co.in/journal/home-automation-cost-delhi-2026",
  "https://varelli.co.in/journal/home-automation-cost-india-2025",
  "https://varelli.co.in/journal/home-automation-cost-mumbai-2026",
  "https://varelli.co.in/journal/home-automation-delhi-ncr",
  "https://varelli.co.in/journal/home-automation-for-architects-india",
  "https://varelli.co.in/journal/home-automation-for-builder-floor-delhi",
  "https://varelli.co.in/journal/home-automation-for-farmhouse-india",
  "https://varelli.co.in/journal/home-automation-for-new-construction-vs-retrofit-india",
  "https://varelli.co.in/journal/home-automation-for-vacation-home-india",
  "https://varelli.co.in/journal/home-automation-hyderabad",
  "https://varelli.co.in/journal/home-automation-investment-roi-india",
  "https://varelli.co.in/journal/home-automation-maintenance-india",
  "https://varelli.co.in/journal/home-automation-pune",
  "https://varelli.co.in/journal/home-automation-questions-to-ask-integrator",
  "https://varelli.co.in/journal/home-automation-timeline-india",
  "https://varelli.co.in/journal/home-cinema-room-dimensions-guide",
  "https://varelli.co.in/journal/home-networking-cost-india-2026",
  "https://varelli.co.in/journal/home-security-cameras-india-guide",
  "https://varelli.co.in/journal/home-theatre-vs-private-cinema-india",
  "https://varelli.co.in/journal/how-does-central-vacuum-work",
  "https://varelli.co.in/journal/how-to-design-private-cinema-india",
  "https://varelli.co.in/journal/in-wall-vs-freestanding-speakers-india",
  "https://varelli.co.in/journal/invisible-speakers-guide",
  "https://varelli.co.in/journal/kef-speakers-india-price",
  "https://varelli.co.in/journal/kef-vs-jbl-synthesis-india",
  "https://varelli.co.in/journal/knx-home-automation-india",
  "https://varelli.co.in/journal/knx-installation-cost-india-2026",
  "https://varelli.co.in/journal/knx-vs-control4",
  "https://varelli.co.in/journal/knx-vs-control4-india",
  "https://varelli.co.in/journal/knx-vs-crestron-india",
  "https://varelli.co.in/journal/knx-vs-home-assistant-india",
  "https://varelli.co.in/journal/knx-vs-lutron-india",
  "https://varelli.co.in/journal/lutron-vs-dali-2-india",
  "https://varelli.co.in/journal/luxury-home-automation-mumbai",
  "https://varelli.co.in/journal/luxury-lighting-design-india",
  "https://varelli.co.in/journal/luxury-smart-home-india-2026",
  "https://varelli.co.in/journal/motorized-blinds-curtains-india",
  "https://varelli.co.in/journal/multiroom-audio-india",
  "https://varelli.co.in/journal/private-cinema-cost-india-2026",
  "https://varelli.co.in/journal/private-cinema-delhi-ncr-2026",
  "https://varelli.co.in/journal/private-cinema-mumbai-2026",
  "https://varelli.co.in/journal/private-cinema-vs-home-theatre-india",
  "https://varelli.co.in/journal/smart-home-builder-india",
  "https://varelli.co.in/journal/smart-home-energy-saving-india",
  "https://varelli.co.in/journal/smart-home-for-elderly-india",
  "https://varelli.co.in/journal/smart-home-for-interior-designers-india",
  "https://varelli.co.in/journal/smart-home-for-penthouse-india",
  "https://varelli.co.in/journal/smart-home-nri-india",
  "https://varelli.co.in/journal/smart-home-project-phases-india",
  "https://varelli.co.in/journal/smart-home-protocols-comparison-2026",
  "https://varelli.co.in/journal/smart-home-villa-india-guide",
  "https://varelli.co.in/journal/smart-home-warranty-india",
  "https://varelli.co.in/journal/smart-security-cost-india-2026",
  "https://varelli.co.in/journal/sonus-faber-speakers-india-price",
  "https://varelli.co.in/journal/sonus-faber-vs-kef-india",
  "https://varelli.co.in/journal/video-doorbell-india-guide",
  "https://varelli.co.in/journal/what-is-knx-home-automation",
  "https://varelli.co.in/journal/whole-home-audio-video-india",
  "https://varelli.co.in/journal/wired-vs-wireless-smart-home-india",
  "https://varelli.co.in/journal/zehnder-erv-india-guide",
  "https://varelli.co.in/journal/zehnder-vs-panasonic-erv-india",
  "https://varelli.co.in/home-automation/delhi-ncr",
  "https://varelli.co.in/home-automation/delhi-ncr/chattarpur",
  "https://varelli.co.in/home-automation/delhi-ncr/defence-colony",
  "https://varelli.co.in/home-automation/delhi-ncr/dlf-phase-5",
  "https://varelli.co.in/home-automation/delhi-ncr/golf-course-road",
  "https://varelli.co.in/home-automation/delhi-ncr/greater-kailash",
  "https://varelli.co.in/home-automation/delhi-ncr/jor-bagh",
  "https://varelli.co.in/home-automation/delhi-ncr/lutyens-delhi",
  "https://varelli.co.in/home-automation/delhi-ncr/new-friends-colony",
  "https://varelli.co.in/home-automation/delhi-ncr/noida-sector-44",
  "https://varelli.co.in/home-automation/delhi-ncr/panchsheel-park",
  "https://varelli.co.in/home-automation/delhi-ncr/shanti-niketan",
  "https://varelli.co.in/home-automation/delhi-ncr/sohna-road",
  "https://varelli.co.in/home-automation/delhi-ncr/sundar-nagar",
  "https://varelli.co.in/home-automation/delhi-ncr/sushant-lok",
  "https://varelli.co.in/home-automation/delhi-ncr/vasant-vihar",
  "https://varelli.co.in/home-automation/hyderabad",
  "https://varelli.co.in/home-automation/hyderabad/banjara-hills",
  "https://varelli.co.in/home-automation/hyderabad/gachibowli",
  "https://varelli.co.in/home-automation/hyderabad/hitec-city",
  "https://varelli.co.in/home-automation/hyderabad/jubilee-hills",
  "https://varelli.co.in/home-automation/hyderabad/kokapet",
  "https://varelli.co.in/home-automation/mumbai",
  "https://varelli.co.in/home-automation/mumbai/alibaug",
  "https://varelli.co.in/home-automation/mumbai/andheri-west",
  "https://varelli.co.in/home-automation/mumbai/bandra-west",
  "https://varelli.co.in/home-automation/mumbai/chembur",
  "https://varelli.co.in/home-automation/mumbai/cuffe-parade",
  "https://varelli.co.in/home-automation/mumbai/dadar",
  "https://varelli.co.in/home-automation/mumbai/goregaon-west",
  "https://varelli.co.in/home-automation/mumbai/juhu",
  "https://varelli.co.in/home-automation/mumbai/khar-west",
  "https://varelli.co.in/home-automation/mumbai/lower-parel",
  "https://varelli.co.in/home-automation/mumbai/malabar-hill",
  "https://varelli.co.in/home-automation/mumbai/mulund",
  "https://varelli.co.in/home-automation/mumbai/navi-mumbai",
  "https://varelli.co.in/home-automation/mumbai/parel",
  "https://varelli.co.in/home-automation/mumbai/powai",
  "https://varelli.co.in/home-automation/mumbai/santacruz-west",
  "https://varelli.co.in/home-automation/mumbai/thane",
  "https://varelli.co.in/home-automation/mumbai/versova",
  "https://varelli.co.in/home-automation/mumbai/wadala",
  "https://varelli.co.in/home-automation/mumbai/worli",
  "https://varelli.co.in/private-cinema/delhi-ncr",
  "https://varelli.co.in/private-cinema/hyderabad"
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
