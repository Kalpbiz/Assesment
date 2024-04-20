// Import necessary libraries
const cheerio = require('cheerio');

function extractFirstLink(html) {
  const $ = cheerio.load(html);
  const firstLink = $('#mw-content-text p a')
    .filter((index, element) => $(element).attr('href').startsWith('/wiki/') && !$(element).attr('href').includes(':'))
    .first()
    .attr('href');
  return `https://en.wikipedia.org${firstLink}`;
}

function isPhilosophyPage(url) {
      // Check if the URL ends with '/wiki/Philosophy'
  return url === 'https://en.wikipedia.org/wiki/Philosophy';
}

module.exports = { extractFirstLink, isPhilosophyPage };
