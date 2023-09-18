import React from 'react';
import { Pressable, Text } from 'react-native';

const Buttons = ({ title, onPress }) => {
  return (
    <>
      <Pressable
        onPress={onPress}
        className="mt-3 w-10/12 h-12 items-center justify-center rounded-full bg-primary-color"
      >
        <Text className="text-white font-['Orkney']">{title}</Text>
      </Pressable>
    </>
  );
};

export default Buttons;
