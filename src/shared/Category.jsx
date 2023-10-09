import React from 'react';
import { Pressable, Text } from 'react-native';

const Category = ({ name, selected, update }) => {
  return (
    <Pressable
      className={
        (selected === name ? 'bg-primary-color' : 'bg-[#EFEFEF]') +
        ' w-16 h-16 rounded-xl items-center justify-center m-4'
      }
      onPress={() => update(name)}
    >
      <Text className={selected === name ? 'text-white' : 'text-[#ACC2BF]'}>
        {name}
      </Text>
    </Pressable>
  );
};

export default Category;
