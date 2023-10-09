import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Logo from '../../assets/logo-white.png';
import Logout from '../../assets/logout.png';
import Close from '../../assets/close.png';
import { useNavigation, StackActions } from '@react-navigation/native';

const NavigationDrawer = () => {
  const navigation = useNavigation();
  const popAction = StackActions.pop(1);
  return (
    <View className="w-full h-full bg-white flex flex-row">
      <View className="w-[20%] m-4">
        <Image source={Logo} alt="logo" />
      </View>
      <View className="w-[70%] flex flex-col items-end mt-4">
        <Pressable onPress={() => navigation.dispatch(popAction)}>
          <Image source={Close} alt="close icon" />
        </Pressable>
        <Text className="text-2xl mt-4 font-['Orkney']">
          Hello,{' '}
          <Text className="text-primary-color font-['Orkney']">John</Text>
        </Text>
        <View className="flex flex-col mt-32 items-end">
          <Pressable onPress={() => navigation.navigate('FoodRescue')}>
            <Text className="text-lg font-['Orkney'] mb-4">Food Rescue</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Workshop')}>
            <Text className="text-lg font-['Orkney'] mb-4">Workshop</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('ProductExchange')}>
            <Text className="text-lg font-['Orkney'] mb-4">
              Product Exchange
            </Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Chat')}>
            <Text className="text-lg font-['Orkney'] mb-4">Chat</Text>
          </Pressable>
        </View>
        <Pressable
          onPress={() => navigation.navigate('Login')}
          className="mt-auto mb-16"
        >
          <View className="flex flex-row">
            <Text className="text-lg font-['Orkney'] mr-2">Logout</Text>
            <Image source={Logout} alt="logout" />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default NavigationDrawer;
