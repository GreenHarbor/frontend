import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import Header from '../shared/Header';
import Title from '../shared/Title';
import SearchBar from '../shared/SearchBar';
import Product from '../shared/Product';

const Products = [
  {
    name: 'Broccoli',
    location: '81 Victoria St',
    image:
      'https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg',
  },
  {
    name: 'Broccoli',
    location: '81 Victoria St',
    image:
      'https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg',
  },
  {
    name: 'Broccoli',
    location: '81 Victoria St',
    image:
      'https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg',
  },
  {
    name: 'Broccoli',
    location: '81 Victoria St',
    image:
      'https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg',
  },
  {
    name: 'Broccoli',
    location: '81 Victoria St',
    image:
      'https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg',
  },
];

const SeparatorComponent = () => {
  return <View style={{ height: 10 }} />; // 10 pixels of vertical space
};

const ProductExchangeScreen = () => {
  const renderItem = ({ item }) => <Product data={item} />;
  return (
    <View className="w-screen h-screen bg-white">
      <Header />
      <View className="w-screen ml-4">
        <Title title="Product Exchange" />
        <Text className="font-['Orkney'] text-lg">Exchange your item.</Text>
        <SearchBar />
        <View className="w-full flex mt-4">
          <FlatList
            data={Products}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            horizontal={false}
            ItemSeparatorComponent={SeparatorComponent}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductExchangeScreen;
