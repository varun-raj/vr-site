import clsx from 'clsx';
import React from 'react';

interface Props {
  title: string;
  level: number;
  className?: string;
}
export default function Title({ title, level = 1, className }: Props) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={clsx(
        'mb-2  font-bold text-gray-900 dark:text-gray-200',
        className
      )}
    >
      {title}
    </Tag>
  );
}
