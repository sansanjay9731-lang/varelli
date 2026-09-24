/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.varelli.co.in' }],
        destination: 'https://varelli.co.in/:path*',
        permanent: true,
      },
      // Locality doorway consolidation to city pillar pages
      {
        source: '/home-automation/:city((?:bangalore|mumbai|delhi-ncr|hyderabad|chennai))/:locality+',
        destination: '/home-automation/:city',
        permanent: true,
      },
      {
        source: '/home-theatre/:city((?:bangalore|mumbai|delhi-ncr|hyderabad|chennai))/:locality+',
        destination: '/home-theatre/:city',
        permanent: true,
      },
      {
        source: '/private-cinema/:city((?:bangalore|mumbai|delhi-ncr|hyderabad|chennai))/:locality+',
        destination: '/private-cinema/:city',
        permanent: true,
      },
      {
        source: '/fresh-air-ventilation/:city((?:bangalore|mumbai|delhi-ncr))/:locality+',
        destination: '/fresh-air-ventilation/:city',
        permanent: true,
      },
      {
        source: '/central-vacuum/:city((?:bangalore|mumbai|delhi-ncr))/:locality+',
        destination: '/central-vacuum/:city',
        permanent: true,
      },
      {
        source: '/home-security/bangalore/:locality*',
        destination: '/home-security',
        permanent: true,
      },
      {
        source: '/home-security/mumbai/:locality*',
        destination: '/home-security',
        permanent: true,
      },
      {
        source: '/smart-home-:locality*-bangalore',
        destination: '/home-automation/bangalore',
        permanent: true,
      },
      {
        source: '/home-theatre-company-:locality*-bangalore',
        destination: '/home-theatre/bangalore',
        permanent: true,
      },
      {
        source: '/home-automation-companies-bangalore',
        destination: '/home-automation/bangalore',
        permanent: true,
      },
      {
        source: '/home-theatre-companies-bangalore',
        destination: '/home-theatre/bangalore',
        permanent: true,
      },
      {
        source: '/private-cinema-companies-bangalore',
        destination: '/private-cinema/bangalore',
        permanent: true,
      },
      // Cost guide redirects
      {
        source: '/journal/home-automation-cost-bangalore-2026',
        destination: '/journal/home-automation-cost-bangalore',
        permanent: true,
      },
      {
        source: '/journal/home-theatre-cost-bangalore-2026',
        destination: '/journal/home-theatre-cost-bangalore',
        permanent: true,
      },
      {
        source: '/journal/private-cinema-cost-bangalore-2026',
        destination: '/journal/private-cinema-cost-bangalore',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/journal',
        permanent: true,
      },
      {
        source: '/blog/:path*',
        destination: '/journal/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
