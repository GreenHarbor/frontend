import React from 'react';
import { Image, Pressable, View } from 'react-native';
import Header from '../shared/Header';
import Title from '../shared/Title';
import Categories from '../shared/Categories';
import Foods from '../shared/Foods';
import FoodType from '../shared/FoodType';
import Icon from 'react-native-vector-icons/Fontisto';
import Ribbon from '../../assets/ribbon.png';
import { useNavigation } from '@react-navigation/native';

const FoodRescueScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="w-screen h-screen bg-white flex items-center">
      <Header />
      <View className="ml-[10%] w-full h-full flex mt-4">
        <Title title="Food Rescue" />
        <View className="w-full h-[55%] flex flex-row mt-8">
          <Categories />
          <Foods />
        </View>
        <View className="w-screen h-[10%] flex flex-row mt-4">
          <FoodType />
        </View>
        <View className="w-screen h-[10%] mt-4 flex flex-row items-center">
          <Pressable
            className="bg-secondary-color w-12 h-12 rounded-full flex items-center justify-center"
            onPress={() => {
              navigation.navigate('AddFood');
            }}
          >
            <View className="bg-primary-color w-10 h-10 rounded-full flex items-center justify-center">
              <Icon name="plus-a" size={18} color="#fff" />
            </View>
          </Pressable>
          <View className="flex items-center justify-center mt-12 ml-4">
            <Image source={Ribbon} alt="ribbon" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodRescueScreen;
