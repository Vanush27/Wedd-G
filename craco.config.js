const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@modules': path.resolve(__dirname, './src/modules'),
      '@assets/*': path.resolve(__dirname, './src/assets/*'),
      '@components/*': path.resolve(__dirname, './src/components/*'),
      '@components': path.resolve(__dirname, './src/components'),

      '@ui-kit': path.resolve(__dirname, './src/ui-kit'),
      '@ui-kit/*': path.resolve(__dirname, './src/ui-kit/*'),

      '@constants': path.resolve(__dirname, './src/constants'),
      '@utils': path.resolve(__dirname, './src/utils'),

    },
  },
};