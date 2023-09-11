import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RegisterScreen from './src/screens/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

  const Stack = createNativeStackNavigator();

  return (
    <View onLayout={onLayoutRootView} className="w-screen h-screen">
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Register">
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
