import 'dotenv/config';

// app.config.js
export default {
  expo: {
    name: 'GreenHarbor-frontend',
    slug: 'GreenHarbor-frontend',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/Splashscreen.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      ACCESS_KEY: process.env.ACCESS_KEY,
      SECRET_KEY: process.env.SECRET_KEY,
    },

    // Here you can add additional configuration settings that you can't in app.json,
    // like environment variables or any other custom settings.
  },
};
