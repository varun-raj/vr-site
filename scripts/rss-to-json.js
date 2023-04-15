/* eslint-disable import/no-extraneous-dependencies */
const Parser = require('rss-parser');
const fs = require('fs');

const parser = new Parser({
  customFields: {
    item: [
      'isbn',
      'author_name',
      'book_description',
      'book_large_image_url',
      'book:num_pages',
      'book_published',
      'average_rating',
    ],
  },
});

(async () => {
  const feed = await parser.parseURL(
    'https://www.goodreads.com/review/list_rss/46704971?key=lqg2L2wV_rAFoQ8xFM5muLyWDK8RSys4OlJj2QIInr4zmFAK&shelf=read'
  );

  fs.writeFileSync(
    './src/data/books.json',
    JSON.stringify(feed.items, null, 2)
  );
})();
