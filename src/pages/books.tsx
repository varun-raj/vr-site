import Image from 'next/image';
import React from 'react';

import books from '@/data/books.json';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

type IBook = (typeof books)[0];

const BookItem = ({ book }: { book: IBook }) => {
  return (
    <div className="flex flex-col items-center justify-start space-y-3 rounded bg-gray-100 py-6 shadow-sm ring-1 ring-gray-200 backdrop-blur dark:bg-zinc-800 dark:ring-white/10">
      <Image
        src={book.book_large_image_url}
        width={300}
        height={300}
        alt={book.title}
        className="max-h-[300px] max-w-[200px] rounded-r-xl shadow-md"
      />
      <h3 className="m-2 text-sm">{book.title}</h3>
      <span className="inline-flex items-center rounded-full bg-gray-200 px-2 text-xxs font-medium text-gray-800 dark:bg-zinc-700 dark:text-gray-400 dark:ring-white/10">
        {book.author_name}
      </span>
    </div>
  );
};

export default function BooksPage() {
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
        <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-gray-200">
          <span role="img" aria-label="Hi">
            📖
          </span>{' '}
          Books that I read
        </h1>
        <h2 className="text-xl">
          Mystery, Thriller, Fiction, Non-Fiction, Self-Help, and more.
        </h2>

        <div className="mt-3 grid grid-cols-2 gap-2 lg:gap-4">
          {books.map((book) => (
            <BookItem key={book.title} book={book} />
          ))}
        </div>
      </div>
    </Main>
  );
}
