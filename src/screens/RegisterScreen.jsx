import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import logo from '../../assets/logo.png';

const RegisterScreen = () => {
  useEffect(() => {
    console.log('RegisterScreen');
  }, []);
  return (
    <View className="bg-black w-screen h-screen">
      <Text className="text-center">Details Screen2</Text>
    </View>
  );
};

export default RegisterScreen;
