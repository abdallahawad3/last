/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://last-sepia-eight.vercel.app',
  generateRobotsTxt: true,
  outDir: './public',
  host: undefined, // ⛔️ prevents adding the Host line
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://last-sepia-eight.vercel.app/sitemap.xml',
  },
};
