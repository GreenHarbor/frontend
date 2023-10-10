import React, { useState } from 'react';
import { Image, TextInput, View } from 'react-native';
import Filter from '../../assets/filter.png';

const SearchBar = () => {
  const [input, setInput] = useState('');
  return (
    <View className="w-full h-12 flex flex-row items-center mt-4">
      <TextInput
        onChangeText={setInput}
        keyboardType="default"
        value={input}
        placeholder="Find your ingredient"
        className="px-4 bg-white w-9/12 font-['Orkney'] border border-solid border-[#E6E6E6] rounded-lg py-4"
      />
      <View className="w-12 h-12 border border-solid border-[#E6E6E6] flex items-center justify-center rounded-lg ml-4">
        <Image source={Filter} alt="filter" className="w-6 h-6" />
      </View>
    </View>
  );
};

export default SearchBar;
