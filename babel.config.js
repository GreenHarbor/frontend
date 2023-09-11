module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@ant-design/react-native',
      [('import', { libraryName: 'nativewind/babel' })],
    ],
  };
};
