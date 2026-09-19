import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Complete Architecture Directory & Sitemap | VARELLI",
  description: "Comprehensive index of all 254+ VARELLI luxury smart home automation, private cinema, brand profiles, and architectural engineering resources across India.",
  path: "/site-directory",
});

const corePages = [
  {
    "name": "Home",
    "href": "/"
  },
  {
    "name": "Architects",
    "href": "/architects"
  },
  {
    "name": "Brands",
    "href": "/brands"
  },
  {
    "name": "Central Vacuum",
    "href": "/central-vacuum"
  },
  {
    "name": "Contact",
    "href": "/contact"
  },
  {
    "name": "Fresh Air Ventilation",
    "href": "/fresh-air-ventilation"
  },
  {
    "name": "Home Automation",
    "href": "/home-automation"
  },
  {
    "name": "Home Networking",
    "href": "/home-networking"
  },
  {
    "name": "Home Security",
    "href": "/home-security"
  },
  {
    "name": "Home Theatre",
    "href": "/home-theatre"
  },
  {
    "name": "Journal",
    "href": "/journal"
  },
  {
    "name": "Private Cinema",
    "href": "/private-cinema"
  },
  {
    "name": "Products",
    "href": "/products"
  },
  {
    "name": "Residences",
    "href": "/residences"
  },
  {
    "name": "Site Directory",
    "href": "/site-directory"
  },
  {
    "name": "Studio",
    "href": "/studio"
  }
];
const cityPages = [
  {
    "name": "Central Vacuum \u00b7 Bangalore",
    "href": "/central-vacuum/bangalore"
  },
  {
    "name": "Fresh Air Ventilation \u00b7 Bangalore",
    "href": "/fresh-air-ventilation/bangalore"
  },
  {
    "name": "Home Automation \u00b7 Ahmedabad",
    "href": "/home-automation/ahmedabad"
  },
  {
    "name": "Home Automation \u00b7 Bangalore",
    "href": "/home-automation/bangalore"
  },
  {
    "name": "Home Automation \u00b7 Chandigarh",
    "href": "/home-automation/chandigarh"
  },
  {
    "name": "Home Automation \u00b7 Chennai",
    "href": "/home-automation/chennai"
  },
  {
    "name": "Home Automation \u00b7 Delhi Ncr",
    "href": "/home-automation/delhi-ncr"
  },
  {
    "name": "Home Automation \u00b7 Hyderabad",
    "href": "/home-automation/hyderabad"
  },
  {
    "name": "Home Automation \u00b7 Jaipur",
    "href": "/home-automation/jaipur"
  },
  {
    "name": "Home Automation \u00b7 Kochi",
    "href": "/home-automation/kochi"
  },
  {
    "name": "Home Automation \u00b7 Kolkata",
    "href": "/home-automation/kolkata"
  },
  {
    "name": "Home Automation \u00b7 Mumbai",
    "href": "/home-automation/mumbai"
  },
  {
    "name": "Home Automation \u00b7 Pune",
    "href": "/home-automation/pune"
  },
  {
    "name": "Home Theatre \u00b7 Bangalore",
    "href": "/home-theatre/bangalore"
  },
  {
    "name": "Private Cinema \u00b7 Bangalore",
    "href": "/private-cinema/bangalore"
  },
  {
    "name": "Private Cinema \u00b7 Chennai",
    "href": "/private-cinema/chennai"
  },
  {
    "name": "Private Cinema \u00b7 Delhi Ncr",
    "href": "/private-cinema/delhi-ncr"
  },
  {
    "name": "Private Cinema \u00b7 Hyderabad",
    "href": "/private-cinema/hyderabad"
  },
  {
    "name": "Private Cinema \u00b7 Mumbai",
    "href": "/private-cinema/mumbai"
  },
  {
    "name": "Private Cinema \u00b7 Pune",
    "href": "/private-cinema/pune"
  }
];
const blrLocPages = [
  {
    "name": "Banashankari, Bangalore",
    "href": "/home-automation/bangalore/banashankari"
  },
  {
    "name": "Bannerghatta Road, Bangalore",
    "href": "/home-automation/bangalore/bannerghatta-road"
  },
  {
    "name": "Basavangudi, Bangalore",
    "href": "/home-automation/bangalore/basavangudi"
  },
  {
    "name": "Bellandur, Bangalore",
    "href": "/home-automation/bangalore/bellandur"
  },
  {
    "name": "Btm Layout, Bangalore",
    "href": "/home-automation/bangalore/btm-layout"
  },
  {
    "name": "Cunningham Road, Bangalore",
    "href": "/home-automation/bangalore/cunningham-road"
  },
  {
    "name": "Devanahalli, Bangalore",
    "href": "/home-automation/bangalore/devanahalli"
  },
  {
    "name": "Electronic City, Bangalore",
    "href": "/home-automation/bangalore/electronic-city"
  },
  {
    "name": "Frazer Town, Bangalore",
    "href": "/home-automation/bangalore/frazer-town"
  },
  {
    "name": "Hebbal, Bangalore",
    "href": "/home-automation/bangalore/hebbal"
  },
  {
    "name": "Hebbal Kempapura, Bangalore",
    "href": "/home-automation/bangalore/hebbal-kempapura"
  },
  {
    "name": "Hsr Layout, Bangalore",
    "href": "/home-automation/bangalore/hsr-layout"
  },
  {
    "name": "Indiranagar, Bangalore",
    "href": "/home-automation/bangalore/indiranagar"
  },
  {
    "name": "Jayanagar, Bangalore",
    "href": "/home-automation/bangalore/jayanagar"
  },
  {
    "name": "Jp Nagar, Bangalore",
    "href": "/home-automation/bangalore/jp-nagar"
  },
  {
    "name": "Kalyan Nagar, Bangalore",
    "href": "/home-automation/bangalore/kalyan-nagar"
  },
  {
    "name": "Koramangala, Bangalore",
    "href": "/home-automation/bangalore/koramangala"
  },
  {
    "name": "Kr Puram, Bangalore",
    "href": "/home-automation/bangalore/kr-puram"
  },
  {
    "name": "Lavelle Road, Bangalore",
    "href": "/home-automation/bangalore/lavelle-road"
  },
  {
    "name": "Malleshwaram, Bangalore",
    "href": "/home-automation/bangalore/malleshwaram"
  },
  {
    "name": "Marathahalli, Bangalore",
    "href": "/home-automation/bangalore/marathahalli"
  },
  {
    "name": "Rajajinagar, Bangalore",
    "href": "/home-automation/bangalore/rajajinagar"
  },
  {
    "name": "Richmond Town, Bangalore",
    "href": "/home-automation/bangalore/richmond-town"
  },
  {
    "name": "Rr Nagar, Bangalore",
    "href": "/home-automation/bangalore/rr-nagar"
  },
  {
    "name": "Sadashivanagar, Bangalore",
    "href": "/home-automation/bangalore/sadashivanagar"
  },
  {
    "name": "Sarjapur, Bangalore",
    "href": "/home-automation/bangalore/sarjapur"
  },
  {
    "name": "Ulsoor, Bangalore",
    "href": "/home-automation/bangalore/ulsoor"
  },
  {
    "name": "Vijayanagar, Bangalore",
    "href": "/home-automation/bangalore/vijayanagar"
  },
  {
    "name": "Whitefield, Bangalore",
    "href": "/home-automation/bangalore/whitefield"
  },
  {
    "name": "Yelahanka, Bangalore",
    "href": "/home-automation/bangalore/yelahanka"
  }
];
const bomLocPages = [
  {
    "name": "Alibaug, Mumbai",
    "href": "/home-automation/mumbai/alibaug"
  },
  {
    "name": "Andheri West, Mumbai",
    "href": "/home-automation/mumbai/andheri-west"
  },
  {
    "name": "Bandra West, Mumbai",
    "href": "/home-automation/mumbai/bandra-west"
  },
  {
    "name": "Chembur, Mumbai",
    "href": "/home-automation/mumbai/chembur"
  },
  {
    "name": "Cuffe Parade, Mumbai",
    "href": "/home-automation/mumbai/cuffe-parade"
  },
  {
    "name": "Dadar, Mumbai",
    "href": "/home-automation/mumbai/dadar"
  },
  {
    "name": "Goregaon West, Mumbai",
    "href": "/home-automation/mumbai/goregaon-west"
  },
  {
    "name": "Juhu, Mumbai",
    "href": "/home-automation/mumbai/juhu"
  },
  {
    "name": "Khar West, Mumbai",
    "href": "/home-automation/mumbai/khar-west"
  },
  {
    "name": "Lower Parel, Mumbai",
    "href": "/home-automation/mumbai/lower-parel"
  },
  {
    "name": "Malabar Hill, Mumbai",
    "href": "/home-automation/mumbai/malabar-hill"
  },
  {
    "name": "Mulund, Mumbai",
    "href": "/home-automation/mumbai/mulund"
  },
  {
    "name": "Navi Mumbai, Mumbai",
    "href": "/home-automation/mumbai/navi-mumbai"
  },
  {
    "name": "Parel, Mumbai",
    "href": "/home-automation/mumbai/parel"
  },
  {
    "name": "Powai, Mumbai",
    "href": "/home-automation/mumbai/powai"
  },
  {
    "name": "Santacruz West, Mumbai",
    "href": "/home-automation/mumbai/santacruz-west"
  },
  {
    "name": "Thane, Mumbai",
    "href": "/home-automation/mumbai/thane"
  },
  {
    "name": "Versova, Mumbai",
    "href": "/home-automation/mumbai/versova"
  },
  {
    "name": "Wadala, Mumbai",
    "href": "/home-automation/mumbai/wadala"
  },
  {
    "name": "Worli, Mumbai",
    "href": "/home-automation/mumbai/worli"
  }
];
const delLocPages = [
  {
    "name": "Chattarpur, Delhi NCR",
    "href": "/home-automation/delhi-ncr/chattarpur"
  },
  {
    "name": "Defence Colony, Delhi NCR",
    "href": "/home-automation/delhi-ncr/defence-colony"
  },
  {
    "name": "Dlf Phase 5, Delhi NCR",
    "href": "/home-automation/delhi-ncr/dlf-phase-5"
  },
  {
    "name": "Golf Course Road, Delhi NCR",
    "href": "/home-automation/delhi-ncr/golf-course-road"
  },
  {
    "name": "Greater Kailash, Delhi NCR",
    "href": "/home-automation/delhi-ncr/greater-kailash"
  },
  {
    "name": "Jor Bagh, Delhi NCR",
    "href": "/home-automation/delhi-ncr/jor-bagh"
  },
  {
    "name": "Lutyens Delhi, Delhi NCR",
    "href": "/home-automation/delhi-ncr/lutyens-delhi"
  },
  {
    "name": "New Friends Colony, Delhi NCR",
    "href": "/home-automation/delhi-ncr/new-friends-colony"
  },
  {
    "name": "Noida Sector 44, Delhi NCR",
    "href": "/home-automation/delhi-ncr/noida-sector-44"
  },
  {
    "name": "Panchsheel Park, Delhi NCR",
    "href": "/home-automation/delhi-ncr/panchsheel-park"
  },
  {
    "name": "Shanti Niketan, Delhi NCR",
    "href": "/home-automation/delhi-ncr/shanti-niketan"
  },
  {
    "name": "Sohna Road, Delhi NCR",
    "href": "/home-automation/delhi-ncr/sohna-road"
  },
  {
    "name": "Sundar Nagar, Delhi NCR",
    "href": "/home-automation/delhi-ncr/sundar-nagar"
  },
  {
    "name": "Sushant Lok, Delhi NCR",
    "href": "/home-automation/delhi-ncr/sushant-lok"
  },
  {
    "name": "Vasant Vihar, Delhi NCR",
    "href": "/home-automation/delhi-ncr/vasant-vihar"
  }
];
const otherLocPages = [
  {
    "name": "Adyar, Chennai",
    "href": "/home-automation/chennai/adyar"
  },
  {
    "name": "Boat Club Road, Chennai",
    "href": "/home-automation/chennai/boat-club-road"
  },
  {
    "name": "Ecr, Chennai",
    "href": "/home-automation/chennai/ecr"
  },
  {
    "name": "Nungambakkam, Chennai",
    "href": "/home-automation/chennai/nungambakkam"
  },
  {
    "name": "Poes Garden, Chennai",
    "href": "/home-automation/chennai/poes-garden"
  },
  {
    "name": "Banjara Hills, Hyderabad",
    "href": "/home-automation/hyderabad/banjara-hills"
  },
  {
    "name": "Gachibowli, Hyderabad",
    "href": "/home-automation/hyderabad/gachibowli"
  },
  {
    "name": "Hitec City, Hyderabad",
    "href": "/home-automation/hyderabad/hitec-city"
  },
  {
    "name": "Jubilee Hills, Hyderabad",
    "href": "/home-automation/hyderabad/jubilee-hills"
  },
  {
    "name": "Kokapet, Hyderabad",
    "href": "/home-automation/hyderabad/kokapet"
  },
  {
    "name": "Aundh, Pune",
    "href": "/home-automation/pune/aundh"
  },
  {
    "name": "Baner, Pune",
    "href": "/home-automation/pune/baner"
  },
  {
    "name": "Kalyani Nagar, Pune",
    "href": "/home-automation/pune/kalyani-nagar"
  },
  {
    "name": "Koregaon Park, Pune",
    "href": "/home-automation/pune/koregaon-park"
  },
  {
    "name": "Wakad, Pune",
    "href": "/home-automation/pune/wakad"
  }
];
const brandPages = [
  {
    "name": "Anthem",
    "href": "/brands/anthem"
  },
  {
    "name": "Barco",
    "href": "/brands/barco"
  },
  {
    "name": "Basalte",
    "href": "/brands/basalte"
  },
  {
    "name": "Crestron",
    "href": "/brands/crestron"
  },
  {
    "name": "Doorbird",
    "href": "/brands/doorbird"
  },
  {
    "name": "Drainvac",
    "href": "/brands/drainvac"
  },
  {
    "name": "Ekinex",
    "href": "/brands/ekinex"
  },
  {
    "name": "Gira",
    "href": "/brands/gira"
  },
  {
    "name": "Hik Vision",
    "href": "/brands/hik-vision"
  },
  {
    "name": "Jbl Synthesis",
    "href": "/brands/jbl-synthesis"
  },
  {
    "name": "Jung",
    "href": "/brands/jung"
  },
  {
    "name": "Kef",
    "href": "/brands/kef"
  },
  {
    "name": "Lutron",
    "href": "/brands/lutron"
  },
  {
    "name": "Marantz",
    "href": "/brands/marantz"
  },
  {
    "name": "Meridian",
    "href": "/brands/meridian"
  },
  {
    "name": "Sonance",
    "href": "/brands/sonance"
  },
  {
    "name": "Sonus Faber",
    "href": "/brands/sonus-faber"
  },
  {
    "name": "Stealth Acoustics",
    "href": "/brands/stealth-acoustics"
  },
  {
    "name": "Ubiquiti Unifi",
    "href": "/brands/ubiquiti-unifi"
  },
  {
    "name": "Zehnder",
    "href": "/brands/zehnder"
  }
];
const journalPages = [
  {
    "name": "4K Projector Vs Oled Tv Home Cinema",
    "href": "/journal/4k-projector-vs-oled-tv-home-cinema"
  },
  {
    "name": "4K Vs 8K Home Cinema India",
    "href": "/journal/4k-vs-8k-home-cinema-india"
  },
  {
    "name": "Access Control India Guide",
    "href": "/journal/access-control-india-guide"
  },
  {
    "name": "Alexa Google Knx Integration India",
    "href": "/journal/alexa-google-knx-integration-india"
  },
  {
    "name": "Anthem Vs Marantz India",
    "href": "/journal/anthem-vs-marantz-india"
  },
  {
    "name": "Barco Projector India Price",
    "href": "/journal/barco-projector-india-price"
  },
  {
    "name": "Barco Vs Sony Projector India",
    "href": "/journal/barco-vs-sony-projector-india"
  },
  {
    "name": "Basalte Keypad India",
    "href": "/journal/basalte-keypad-india"
  },
  {
    "name": "Basalte Keypad India Guide",
    "href": "/journal/basalte-keypad-india-guide"
  },
  {
    "name": "Basalte Vs Ekinex India",
    "href": "/journal/basalte-vs-ekinex-india"
  },
  {
    "name": "Best Home Automation Company Bangalore",
    "href": "/journal/best-home-automation-company-bangalore"
  },
  {
    "name": "Best Home Automation Company Hyderabad",
    "href": "/journal/best-home-automation-company-hyderabad"
  },
  {
    "name": "Best Home Automation Company India",
    "href": "/journal/best-home-automation-company-india"
  },
  {
    "name": "Best Home Automation Company Mumbai",
    "href": "/journal/best-home-automation-company-mumbai"
  },
  {
    "name": "Best Home Theatre Brands India",
    "href": "/journal/best-home-theatre-brands-india"
  },
  {
    "name": "Central Vacuum Bangalore",
    "href": "/journal/central-vacuum-bangalore"
  },
  {
    "name": "Central Vacuum Cost India 2026",
    "href": "/journal/central-vacuum-cost-india-2026"
  },
  {
    "name": "Central Vacuum System India",
    "href": "/journal/central-vacuum-system-india"
  },
  {
    "name": "Central Vacuum Vs Dyson India",
    "href": "/journal/central-vacuum-vs-dyson-india"
  },
  {
    "name": "Cinema Acoustic Treatment India",
    "href": "/journal/cinema-acoustic-treatment-india"
  },
  {
    "name": "Crestron Vs Savant India",
    "href": "/journal/crestron-vs-savant-india"
  },
  {
    "name": "Dali 2 Lighting Bangalore",
    "href": "/journal/dali-2-lighting-bangalore"
  },
  {
    "name": "Dali 2 Lighting Cost India 2026",
    "href": "/journal/dali-2-lighting-cost-india-2026"
  },
  {
    "name": "Dolby Atmos Home Theatre",
    "href": "/journal/dolby-atmos-home-theatre"
  },
  {
    "name": "Dolby Atmos Room Design Guide",
    "href": "/journal/dolby-atmos-room-design-guide"
  },
  {
    "name": "Dolby Atmos Speaker Placement Guide",
    "href": "/journal/dolby-atmos-speaker-placement-guide"
  },
  {
    "name": "Dolby Atmos Speakers India",
    "href": "/journal/dolby-atmos-speakers-india"
  },
  {
    "name": "Dolby Atmos Vs Dts X India",
    "href": "/journal/dolby-atmos-vs-dts-x-india"
  },
  {
    "name": "Erv Vs Hrv Vs Air Purifier India",
    "href": "/journal/erv-vs-hrv-vs-air-purifier-india"
  },
  {
    "name": "Ev Charging Smart Home India",
    "href": "/journal/ev-charging-smart-home-india"
  },
  {
    "name": "Fresh Air Ventilation Bangalore",
    "href": "/journal/fresh-air-ventilation-bangalore"
  },
  {
    "name": "Fresh Air Ventilation Cost India 2026",
    "href": "/journal/fresh-air-ventilation-cost-india-2026"
  },
  {
    "name": "Fresh Air Ventilation Mumbai",
    "href": "/journal/fresh-air-ventilation-mumbai"
  },
  {
    "name": "Fresh Air Ventilation Vs Air Purifier",
    "href": "/journal/fresh-air-ventilation-vs-air-purifier"
  },
  {
    "name": "Home Automation Apartment India",
    "href": "/journal/home-automation-apartment-india"
  },
  {
    "name": "Home Automation Chennai",
    "href": "/journal/home-automation-chennai"
  },
  {
    "name": "Home Automation Cost Bangalore",
    "href": "/journal/home-automation-cost-bangalore"
  },
  {
    "name": "Home Automation Cost Bangalore 2026",
    "href": "/journal/home-automation-cost-bangalore-2026"
  },
  {
    "name": "Home Automation Cost Delhi 2026",
    "href": "/journal/home-automation-cost-delhi-2026"
  },
  {
    "name": "Home Automation Cost India 2025",
    "href": "/journal/home-automation-cost-india-2025"
  },
  {
    "name": "Home Automation Cost India 2026",
    "href": "/journal/home-automation-cost-india-2026"
  },
  {
    "name": "Home Automation Cost Mumbai 2026",
    "href": "/journal/home-automation-cost-mumbai-2026"
  },
  {
    "name": "Home Automation Delhi Ncr",
    "href": "/journal/home-automation-delhi-ncr"
  },
  {
    "name": "Home Automation For Architects India",
    "href": "/journal/home-automation-for-architects-india"
  },
  {
    "name": "Home Automation For Builder Floor Delhi",
    "href": "/journal/home-automation-for-builder-floor-delhi"
  },
  {
    "name": "Home Automation For Farmhouse India",
    "href": "/journal/home-automation-for-farmhouse-india"
  },
  {
    "name": "Home Automation For New Construction Vs Retrofit India",
    "href": "/journal/home-automation-for-new-construction-vs-retrofit-india"
  },
  {
    "name": "Home Automation For Vacation Home India",
    "href": "/journal/home-automation-for-vacation-home-india"
  },
  {
    "name": "Home Automation Hyderabad",
    "href": "/journal/home-automation-hyderabad"
  },
  {
    "name": "Home Automation Investment Roi India",
    "href": "/journal/home-automation-investment-roi-india"
  },
  {
    "name": "Home Automation Maintenance India",
    "href": "/journal/home-automation-maintenance-india"
  },
  {
    "name": "Home Automation Pune",
    "href": "/journal/home-automation-pune"
  },
  {
    "name": "Home Automation Questions To Ask Integrator",
    "href": "/journal/home-automation-questions-to-ask-integrator"
  },
  {
    "name": "Home Automation Showroom Bangalore",
    "href": "/journal/home-automation-showroom-bangalore"
  },
  {
    "name": "Home Automation Timeline India",
    "href": "/journal/home-automation-timeline-india"
  },
  {
    "name": "Home Cinema Room Dimensions Guide",
    "href": "/journal/home-cinema-room-dimensions-guide"
  },
  {
    "name": "Home Networking Bangalore",
    "href": "/journal/home-networking-bangalore"
  },
  {
    "name": "Home Networking Cost India 2026",
    "href": "/journal/home-networking-cost-india-2026"
  },
  {
    "name": "Home Security Cameras India Guide",
    "href": "/journal/home-security-cameras-india-guide"
  },
  {
    "name": "Home Security System Bangalore",
    "href": "/journal/home-security-system-bangalore"
  },
  {
    "name": "Home Theatre Cost Bangalore",
    "href": "/journal/home-theatre-cost-bangalore"
  },
  {
    "name": "Home Theatre Cost Bangalore 2026",
    "href": "/journal/home-theatre-cost-bangalore-2026"
  },
  {
    "name": "Home Theatre Cost India",
    "href": "/journal/home-theatre-cost-india"
  },
  {
    "name": "Home Theatre Vs Private Cinema India",
    "href": "/journal/home-theatre-vs-private-cinema-india"
  },
  {
    "name": "How Does Central Vacuum Work",
    "href": "/journal/how-does-central-vacuum-work"
  },
  {
    "name": "How To Design Private Cinema India",
    "href": "/journal/how-to-design-private-cinema-india"
  },
  {
    "name": "In Wall Vs Freestanding Speakers India",
    "href": "/journal/in-wall-vs-freestanding-speakers-india"
  },
  {
    "name": "Invisible Speakers Guide",
    "href": "/journal/invisible-speakers-guide"
  },
  {
    "name": "Kef Speakers India Price",
    "href": "/journal/kef-speakers-india-price"
  },
  {
    "name": "Kef Vs Jbl Synthesis India",
    "href": "/journal/kef-vs-jbl-synthesis-india"
  },
  {
    "name": "Knx Home Automation India",
    "href": "/journal/knx-home-automation-india"
  },
  {
    "name": "Knx Installation Cost India 2026",
    "href": "/journal/knx-installation-cost-india-2026"
  },
  {
    "name": "Knx Vs Control4",
    "href": "/journal/knx-vs-control4"
  },
  {
    "name": "Knx Vs Control4 India",
    "href": "/journal/knx-vs-control4-india"
  },
  {
    "name": "Knx Vs Crestron India",
    "href": "/journal/knx-vs-crestron-india"
  },
  {
    "name": "Knx Vs Crestron Vs Control4",
    "href": "/journal/knx-vs-crestron-vs-control4"
  },
  {
    "name": "Knx Vs Home Assistant India",
    "href": "/journal/knx-vs-home-assistant-india"
  },
  {
    "name": "Knx Vs Lutron India",
    "href": "/journal/knx-vs-lutron-india"
  },
  {
    "name": "Lutron Vs Dali 2 India",
    "href": "/journal/lutron-vs-dali-2-india"
  },
  {
    "name": "Luxury Home Automation Mumbai",
    "href": "/journal/luxury-home-automation-mumbai"
  },
  {
    "name": "Luxury Lighting Design India",
    "href": "/journal/luxury-lighting-design-india"
  },
  {
    "name": "Luxury Smart Home Bangalore",
    "href": "/journal/luxury-smart-home-bangalore"
  },
  {
    "name": "Luxury Smart Home India 2026",
    "href": "/journal/luxury-smart-home-india-2026"
  },
  {
    "name": "Motorized Blinds Curtains India",
    "href": "/journal/motorized-blinds-curtains-india"
  },
  {
    "name": "Motorized Curtain Blinds Bangalore",
    "href": "/journal/motorized-curtain-blinds-bangalore"
  },
  {
    "name": "Multiroom Audio India",
    "href": "/journal/multiroom-audio-india"
  },
  {
    "name": "Private Cinema Bangalore 2026",
    "href": "/journal/private-cinema-bangalore-2026"
  },
  {
    "name": "Private Cinema Cost Bangalore 2026",
    "href": "/journal/private-cinema-cost-bangalore-2026"
  },
  {
    "name": "Private Cinema Cost India 2026",
    "href": "/journal/private-cinema-cost-india-2026"
  },
  {
    "name": "Private Cinema Delhi Ncr 2026",
    "href": "/journal/private-cinema-delhi-ncr-2026"
  },
  {
    "name": "Private Cinema Design Guide",
    "href": "/journal/private-cinema-design-guide"
  },
  {
    "name": "Private Cinema Mumbai 2026",
    "href": "/journal/private-cinema-mumbai-2026"
  },
  {
    "name": "Private Cinema Vs Home Theatre",
    "href": "/journal/private-cinema-vs-home-theatre"
  },
  {
    "name": "Private Cinema Vs Home Theatre India",
    "href": "/journal/private-cinema-vs-home-theatre-india"
  },
  {
    "name": "Smart Home Automation Mumbai",
    "href": "/journal/smart-home-automation-mumbai"
  },
  {
    "name": "Smart Home Builder India",
    "href": "/journal/smart-home-builder-india"
  },
  {
    "name": "Smart Home Energy Saving India",
    "href": "/journal/smart-home-energy-saving-india"
  },
  {
    "name": "Smart Home For Elderly India",
    "href": "/journal/smart-home-for-elderly-india"
  },
  {
    "name": "Smart Home For Interior Designers India",
    "href": "/journal/smart-home-for-interior-designers-india"
  },
  {
    "name": "Smart Home For Penthouse India",
    "href": "/journal/smart-home-for-penthouse-india"
  },
  {
    "name": "Smart Home Nri India",
    "href": "/journal/smart-home-nri-india"
  },
  {
    "name": "Smart Home Project Phases India",
    "href": "/journal/smart-home-project-phases-india"
  },
  {
    "name": "Smart Home Protocols Comparison 2026",
    "href": "/journal/smart-home-protocols-comparison-2026"
  },
  {
    "name": "Smart Home Protocols Guide",
    "href": "/journal/smart-home-protocols-guide"
  },
  {
    "name": "Smart Home Villa India Guide",
    "href": "/journal/smart-home-villa-india-guide"
  },
  {
    "name": "Smart Home Warranty India",
    "href": "/journal/smart-home-warranty-india"
  },
  {
    "name": "Smart Security Cost India 2026",
    "href": "/journal/smart-security-cost-india-2026"
  },
  {
    "name": "Sonus Faber Speakers India Price",
    "href": "/journal/sonus-faber-speakers-india-price"
  },
  {
    "name": "Sonus Faber Vs Kef India",
    "href": "/journal/sonus-faber-vs-kef-india"
  },
  {
    "name": "Video Doorbell India Guide",
    "href": "/journal/video-doorbell-india-guide"
  },
  {
    "name": "What Is Dali 2 Lighting",
    "href": "/journal/what-is-dali-2-lighting"
  },
  {
    "name": "What Is Home Automation",
    "href": "/journal/what-is-home-automation"
  },
  {
    "name": "What Is Knx Home Automation",
    "href": "/journal/what-is-knx-home-automation"
  },
  {
    "name": "Whole Home Audio Video India",
    "href": "/journal/whole-home-audio-video-india"
  },
  {
    "name": "Wired Vs Wireless Smart Home India",
    "href": "/journal/wired-vs-wireless-smart-home-india"
  },
  {
    "name": "Zehnder Erv India Guide",
    "href": "/journal/zehnder-erv-india-guide"
  },
  {
    "name": "Zehnder Fresh Air System India",
    "href": "/journal/zehnder-fresh-air-system-india"
  },
  {
    "name": "Zehnder Vs Panasonic Erv India",
    "href": "/journal/zehnder-vs-panasonic-erv-india"
  }
];

export default function SiteDirectoryPage() {
  return (
    <>
      <section className="relative bg-[var(--surface-1)] border-b border-[var(--border)]">
        <div className="relative container-varelli pt-40 pb-16">
          <Breadcrumb
            items={[
              { name: "Home", href: "/" },
              { name: "Site Directory", href: "/site-directory" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="badge-mono block mb-5">Architectural Navigation · 254 Core Resources</span>
            <h1 className="font-display text-[clamp(2.4rem,5vw,4.2rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] mb-5">
              Site Directory &amp; Technical Index
            </h1>
            <p className="font-editorial text-xl text-[var(--text-secondary)] leading-relaxed italic mb-4">
              Every service, prime residential neighbourhood, brand profile, and technical engineering publication across the VARELLI ecosystem in India.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-varelli space-y-16">

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
              <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">Core Ecosystem &amp; Portals</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {corePages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] text-sm text-[var(--text-secondary)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
              <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">Metro Hubs &amp; Regional Services</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {cityPages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] text-sm text-[var(--text-secondary)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
              <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">Bangalore Neighbourhoods (30 Localities)</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {blrLocPages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] text-sm text-[var(--text-secondary)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
              <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">Mumbai Prime Enclaves (20 Localities)</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {bomLocPages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] text-sm text-[var(--text-secondary)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
              <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">Delhi NCR Luxury Corridors (15 Localities)</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {delLocPages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] text-sm text-[var(--text-secondary)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
              <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">Hyderabad, Chennai &amp; Pune Enclaves</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {otherLocPages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] text-sm text-[var(--text-secondary)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
              <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">European Brand Ecosystem (20 Profiles)</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {brandPages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] text-sm text-[var(--text-secondary)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
              <h2 className="font-display text-2xl font-bold text-[var(--text-primary)]">Journal, Pricing Guides &amp; Whitepapers (118 Guides)</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {journalPages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] text-sm text-[var(--text-secondary)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors leading-snug"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
