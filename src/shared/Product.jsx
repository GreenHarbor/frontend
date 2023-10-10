import React from 'react';
import Location from '../../assets/location.png';
import { Image, Text, View } from 'react-native';
import Buttons from './Buttons';

const Product = ({ data }) => {
  const handlePress = () => {
    console.log('pressed');
  };

  return (
    <View className="flex flex-col items-center justify-center w-5/12 border border-solid border-[#E6E6E6] rounded-xl p-4 ml-4">
      <Image source={{ uri: data.image }} className="w-32 h-32" />
      <Text>{data.name}</Text>
      <View className="flex flex-row">
        <Image source={Location} alt="location" />
        <Text>{data.location}</Text>
      </View>
      <Buttons title="Chat" onPress={handlePress} />
    </View>
  );
};

export default Product;
