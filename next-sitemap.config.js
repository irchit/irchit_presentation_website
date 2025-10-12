/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.irchit.cv', // your live domain
  generateRobotsTxt: true, // creates robots.txt automatically
  sitemapSize: 7000, // optional (split large sitemaps)
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404'], // optional
  alternateRefs: [
    {
      href: 'https://www.irchit.cv/?lang=ro',
      hreflang: 'ro',
    },
    {
      href: 'https://www.irchit.cv/?lang=de',
      hreflang: 'de',
    },
    {
      href: 'https://www.irchit.cv/',
      hreflang: 'en',
    },
  ],
};
