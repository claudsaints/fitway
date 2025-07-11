module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': './src',
            '@components': './src/components',
            '@screens': './src/screens',
            '@utils': './src/utils',
            '@assets': './src/assets',
            '@hooks': './src/hooks',
            '@services': './src/services',
            '@styles': './src/styles'
          },
        },
      ],
    ],
  };
};