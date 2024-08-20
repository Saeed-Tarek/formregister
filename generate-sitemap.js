const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { Readable } = require('stream');

const links = [
  { url: '/?page=home', changefreq: 'daily', priority: 1.0 },
  { url: '/?page=about-us', changefreq: 'weekly', priority: 0.8 },
  { url: '/?page=money-transfer', changefreq: 'weekly', priority: 0.8 },
  { url: '/?page=customs-clearance', changefreq: 'weekly', priority: 0.8 },
  { url: '/?page=air-transport', changefreq: 'weekly', priority: 0.8 },
  { url: '/?page=maritime-transport', changefreq: 'weekly', priority: 0.8 },
  { url: '/?page=railway-transport', changefreq: 'weekly', priority: 0.8 },
  { url: '/?page=contact', changefreq: 'monthly', priority: 0.5 },
  { url: '/?page=services', changefreq: 'weekly', priority: 0.8 },
  { url: '/?page=calculate', changefreq: 'weekly', priority: 0.8 },
  { url: '/?page=road-transport', changefreq: 'weekly', priority: 0.8 },
  { url: '/?page=manufacturer-verification', changefreq: 'weekly', priority: 0.8 },
];

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: 'https://www.k-002.ru' });

  const writeStream = createWriteStream('./public/sitemap.xml');

  streamToPromise(Readable.from(links).pipe(stream)).then(() =>
    console.log('Sitemap created successfully.')
  );

  stream.pipe(writeStream);
}

generateSitemap();
