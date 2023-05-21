/* eslint-disable @typescript-eslint/naming-convention */
import { User } from '@phosphor-icons/react';
import Image from 'next/image';
import React from 'react';

import booksData from '@/data/books-with-isbn.json';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

type IBook = (typeof booksData)[0];

const BookItem = ({ book }: { book: IBook }) => {
  const { title, author_name, book_large_image_url } = book;
  return (
    <div className="flex flex-col items-center justify-start space-y-3 rounded bg-gray-100 py-6 shadow-sm ring-1 ring-gray-200 backdrop-blur dark:bg-zinc-800 dark:ring-white/10">
      <Image
        src={book_large_image_url}
        width={300}
        height={300}
        alt={title}
        className="max-h-[300px] max-w-[200px] rounded-r-xl shadow-md"
      />
      <h3 className="m-2 text-sm text-white">{book.title}</h3>

      <div className="flex items-center rounded-full bg-gray-200 px-2 text-xxs text-gray-800 dark:bg-zinc-700 dark:text-gray-400 dark:ring-white/10">
        <User className="mr-1" />
        <span font-medium inline-flex>
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
        <h2 className="text-xl">
          Mystery, Thriller, Fiction, Non-Fiction, Self-Help, and more.
        </h2>

        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2  sm:gap-4 lg:grid-cols-3">
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
