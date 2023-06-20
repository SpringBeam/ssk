module.exports = function(api) {
  api.cache(true);

  const presets = ['babel-preset-expo'];
  const plugins = [];

  // Add the following lines to include the alias configuration for react-native-web-lottie
  plugins.push([
    'module-resolver',
    {
      alias: {
        'lottie-react-native': 'react-native-web-lottie',
      },
    },
  ]);

  return {
    presets,
    plugins,
  };
};