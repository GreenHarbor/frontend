import React, { useState } from 'react';
import { Pressable, View, Image } from 'react-native';
import Category from './Category';
import Filter from '../../assets/filter.png';

const FoodType = () => {
  const [selected, setSelected] = useState('Normal');
  return (
    <View className="flex flex-row items-center justify-center w-full mt-8">
      <Pressable
        className="mr-4"
        onPress={() => {
          console.log('hi');
        }}
      >
        <Image source={Filter} alt="filter icon" />
      </Pressable>
      <Category name="Organic" selected={selected} update={setSelected} />
      <Category name="Vegan" selected={selected} update={setSelected} />
      <Category name="Normal" selected={selected} update={setSelected} />
    </View>
  );
};

export default FoodType;
