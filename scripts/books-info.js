// eslint-disable-next-line import/no-extraneous-dependencies
const { default: axios } = require('axios');
const { writeFileSync } = require('fs');
const booksData = require('../src/data/books.json');

const booksWithoutKey = booksData
  .filter((book) => !book.key)
  .filter((book, i) => i < 20);

const SEARCH_URL = 'https://openlibrary.org/search.json';

const booksClone = [...booksData];
const promises = booksWithoutKey.map((book) => {
  return axios
    .get(SEARCH_URL, {
      params: {
        title: book.title,
        author: book.author_name,
      },
    })
    .then((response) => response.data)

    .then((data) => {
      const firstResult = data?.docs?.[0] || {};
      return {
        ...firstResult,
        guid: book.guid,
      };
    })
    .catch((error) => {
      console.log(error);
    });
});

Promise.all(promises).then((responses) => {
  const booksWithMoreInfo = [...booksClone];
  responses.map((bookAdditionalInfo) => {
    const index = booksWithMoreInfo.findIndex(
      (book) => book.guid === bookAdditionalInfo.guid
    );
    booksWithMoreInfo[index] = {
      ...booksWithMoreInfo[index],
      ...bookAdditionalInfo,
    };
    console.log('Processed Book', booksWithMoreInfo[index].title);
    return bookAdditionalInfo;
  });
  writeFileSync(
    './src/data/books-with-isbn.json',
    JSON.stringify(booksWithMoreInfo, null, 2)
  );
  console.log('Processed All Books');
});
