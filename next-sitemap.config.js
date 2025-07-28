/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://last-sepia-eight.vercel.app',
  generateRobotsTxt: true,
  outDir: './public',
  transform: async (config, path) => {
    // Only transform the sitemap entries, not the robots.txt
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  robotsTxtOptions: {
    // Custom text for robots.txt - completely replaces the default
    additionalSitemaps: [
      'https://last-sepia-eight.vercel.app/sitemap.xml',
    ],
    transformRobotsTxt: async (robotsTxt) => {
      return `# *
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://last-sepia-eight.vercel.app/sitemap.xml
`
    },
  }, headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  }

};