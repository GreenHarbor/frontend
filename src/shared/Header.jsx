import React from 'react';
import { Image, Pressable, View } from 'react-native';
import Menu from '../../assets/menu.png';
import Search from '../../assets/search.png';

const Header = ({ isSearch, searchFn }) => {
  return (
    <View className="w-screen h-4">
      <View className="ml-auto flex flex-row items-center mt-2">
        {isSearch && (
          <Pressable onPress={searchFn} className="ml-auto mr-4">
            <Image source={Search} alt="search icon" />
          </Pressable>
        )}
        <Pressable
          className="ml-auto mr-4"
          onPress={() => {
            console.log('hi');
          }}
        >
          <Image source={Menu} alt="menu icon" />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
