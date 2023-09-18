import { SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RegisterScreen from './src/screens/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useFonts from './src/utils/hooks/useFonts';
import LoginScreen from './src/screens/LoginScreen';
import FoodRescueScreen from './src/screens/FoodRescueScreen';
import WorkshopScreen from './src/screens/WorkshopScreen';
import ProductExchangeScreen from './src/screens/ProductExchangeScreen';

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await useFonts();
    setFontsLoaded(true);
  };

  useEffect(() => {
    const hideSplashScreen = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };
    hideSplashScreen();
  }, [fontsLoaded]);

  const Stack = createNativeStackNavigator();

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <>
      {fontsLoaded && (
        <SafeAreaView className="w-screen h-screen">
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Login"
              screenOptions={{
                headerShown: false,
                presentation: 'transparentModal',
                animation: 'none',
              }}
            >
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="FoodRescue" component={FoodRescueScreen} />
              <Stack.Screen name="Workshop" component={WorkshopScreen} />
              <Stack.Screen
                name="ProductExchange"
                component={ProductExchangeScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      )}
    </>
  );
}
