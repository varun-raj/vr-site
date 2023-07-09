/* eslint-disable no-underscore-dangle */
// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'string', list: true },
    description: { type: 'string', required: true },
    cover: { type: 'string', required: true },
  },
  computedFields: {
    readingTime: {
      type: 'json',
      resolve: (doc) => readingTime(doc.body.raw),
    },
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
  },
}));

export default makeSource({
  contentDirPath: 'src/data/posts',
  documentTypes: [Post],
});
