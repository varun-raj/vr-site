/* eslint-disable @typescript-eslint/naming-convention */
import { User } from '@phosphor-icons/react';
import React from 'react';

import booksData from '@/data/books-with-isbn.json';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

type IBook = (typeof booksData)[0];

const BookItem = ({ book }: { book: IBook }) => {
  const { title, author_name, book_large_image_url } = book;
  return (
    <div className="flex flex-col items-center justify-start space-y-3 py-6 ">
      <div
        className="h-[300px] w-[200px] rounded-lg bg-cover bg-center bg-no-repeat drop-shadow-lg "
        style={{
          backgroundImage: `url(${book_large_image_url})`,
        }}
      />

      <h3 className="m-2 font-serif text-lg font-normal dark:text-white">
        {title}
      </h3>

      <div className="flex items-center rounded-full bg-gray-200 px-2 text-xxs text-gray-800 dark:bg-zinc-700 dark:text-gray-400 dark:ring-white/10">
        <User className="mr-1" />
        <span className="inline-flex truncate font-normal">
          {Array.isArray(author_name) ? author_name.join(', ') : author_name}
        </span>
      </div>
    </div>
  );
};

interface IBooksPageProps {
  books: IBook[];
}

export default function BooksPage({ books }: IBooksPageProps) {
  return (
    <Main
      meta={
        <Meta
          title={`Books | ${AppConfig.title}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="pb-8 pt-16">
        <h1 className="mb-2 text-5xl font-bold text-gray-900 dark:text-gray-200">
          <span role="img" aria-label="Hi">
            📖
          </span>{' '}
          Books that I read
        </h1>
        <h2 className="text-xl  font-normal">
          Mystery, Thriller, Fiction, Non-Fiction, Self-Help, and more.
        </h2>

        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {books.map((book) => (
            <BookItem key={book.title} book={book} />
          ))}
        </div>
      </div>
    </Main>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      books: booksData,
    },
  };
};
