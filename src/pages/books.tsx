/* eslint-disable @typescript-eslint/naming-convention */
import { User } from '@phosphor-icons/react';
import { pick } from 'contentlayer/client';
import Link from 'next/link';
import React from 'react';

import booksData from '@/data/books-with-isbn.json';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

import PageHeader from '../components/shared/PageHeader';

type IBook = (typeof booksData)[0];

const BookItem = ({ book }: { book: IBook }) => {
  const { title, author_name, book_large_image_url, link = '#' } = book;
  return (
    <div className="flex flex-col items-center justify-start space-y-3 py-6 ">
      <div
        className="h-[300px] w-[200px] rounded-lg bg-cover bg-center bg-no-repeat drop-shadow-lg "
        style={{
          backgroundImage: `url(${book_large_image_url})`,
        }}
      />

      <Link className="plain" href={link} target="_blank">
        <h3 className="m-2 text-center text-lg font-normal dark:text-white">
          {title}
        </h3>
      </Link>

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
        <PageHeader
          title="Books that I read"
          emoji="📖"
          description="Mystery, Thriller, Fiction, Non-Fiction, Self-Help, and more."
        />

        <div className="mt-3 grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookItem key={book.title} book={book} />
          ))}
        </div>
      </div>
    </Main>
  );
}

export const getStaticProps = async () => {
  const cleanedBookdata = booksData.map((b) =>
    pick(b, ['title', 'author_name', 'book_large_image_url', 'link'])
  );

  return {
    props: {
      books: cleanedBookdata,
    },
  };
};
