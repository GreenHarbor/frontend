import React from 'react';
import { Image, Pressable, View } from 'react-native';
import Menu from '../../assets/menu.png';
import Search from '../../assets/search.png';
import { useNavigation } from '@react-navigation/native';

const Header = ({ isSearch, searchFn }) => {
  const navigation = useNavigation();

  return (
    <View className="w-screen h-8">
      <View className="ml-auto flex flex-row items-center mt-2">
        {isSearch && (
          <Pressable onPress={searchFn} className="ml-auto mr-4">
            <Image source={Search} alt="search icon" />
          </Pressable>
        )}
        <Pressable
          className="ml-auto mr-4"
          onPress={() => {
            navigation.navigate('NavigationDrawer');
          }}
        >
          <Image source={Menu} alt="menu icon" />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
