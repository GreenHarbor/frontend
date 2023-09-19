import React from 'react';
import { Image, Text, View } from 'react-native';
import Header from '../shared/Header';
import Title from '../shared/Title';
import Categories from '../shared/Categories';
import Foods from '../shared/Foods';
import FoodType from '../shared/FoodType';

const FoodRescueScreen = () => {
  return (
    <View className="w-screen h-screen bg-white flex items-center">
      <Header />
      <View className="ml-[10%] w-full h-full flex">
        <Title title="Food Rescue" />
        <View className="w-full h-[70%] flex flex-row">
          <Categories />
          <Foods />
        </View>
        <View className="w-screen h-[40%] flex flex-row">
          <Image />
          <FoodType />
        </View>
        <View className="w-screen h-[40%]">
          <Image />
        </View>
      </View>
    </View>
  );
};

export default FoodRescueScreen;
