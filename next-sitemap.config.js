/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://last-sepia-eight.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
