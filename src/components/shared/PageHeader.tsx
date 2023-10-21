import React from 'react';

interface IPropTypes {
  emoji?: string;
  title: string;
  description?: string;
}
export default function PageHeader({ emoji, title, description }: IPropTypes) {
  return (
    <div className="text-center">
      <h1 className="mb-2 text-5xl font-bold text-gray-900 dark:text-gray-200">
        {emoji && (
          <span role="img" aria-label="Hi">
            {emoji}
          </span>
        )}{' '}
        {title}
      </h1>
      {description && <h2 className="text-xl font-normal">{description}</h2>}
    </div>
  );
}
