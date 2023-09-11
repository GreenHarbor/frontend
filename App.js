import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded, fontError] = useFonts({
    'Orkney-Bold': require('./assets/fonts/orkney-bold.otf'),
    'Orkney-Light': require('./assets/fonts/orkney-light.otf'),
    'Orkney-Medium': require('./assets/fonts/orkney-medium.otf'),
    'Orkney-Regular': require('./assets/fonts/orkney-regular.otf'),
    'Perpetua-Bold': require('./assets/fonts/perpetua-bold.ttf'),
    'Perpetua-Regular': require('./assets/fonts/perpetua-regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{ fontFamily: 'Orkney-Bold' }}>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
