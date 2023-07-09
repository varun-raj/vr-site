/* eslint-disable import/no-extraneous-dependencies */
const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: false,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
});
