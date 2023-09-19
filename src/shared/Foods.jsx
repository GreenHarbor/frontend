import React from 'react';
import { Text, View, ScrollView } from 'react-native';

const data = [
  {
    name: 'Chicken Satay',
    description:
      'Skewered, grilled chicken marinated in aromatic spices, served with peanut sauce, a flavorful appetizer or main dish',
    image: 'https://www.themealdb.com/images/media/meals/1529446352.jpg',
    timePosted: '30 mins ago',
    location: '80 Stamford Rd, Singapore 178902',
  },
  {
    name: 'Chicken Satay',
    description:
      'Skewered, grilled chicken marinated in aromatic spices, served with peanut sauce, a flavorful appetizer or main dish',
    image: 'https://www.themealdb.com/images/media/meals/1529446352.jpg',
    timePosted: '30 mins ago',
    location: '80 Stamford Rd, Singapore 178902',
  },
  {
    name: 'Chicken Satay',
    description:
      'Skewered, grilled chicken marinated in aromatic spices, served with peanut sauce, a flavorful appetizer or main dish',
    image: 'https://www.themealdb.com/images/media/meals/1529446352.jpg',
    timePosted: '30 mins ago',
    location: '80 Stamford Rd, Singapore 178902',
  },
  {
    name: 'Chicken Satay',
    description:
      'Skewered, grilled chicken marinated in aromatic spices, served with peanut sauce, a flavorful appetizer or main dish',
    image: 'https://www.themealdb.com/images/media/meals/1529446352.jpg',
    timePosted: '30 mins ago',
    location: '80 Stamford Rd, Singapore 178902',
  },
];

const Foods = () => {
  return (
    <View className="w-[80%] h-full">
      <ScrollView horizontal={true}>
        <View className="flex flex-row gap-4">
          {data.map((food) => {
            return (
              <View>
                <Text>{food.name}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View className="w-[60%] h-[90%] mt-auto bg-secondary-color rounded-xl"></View>
    </View>
  );
};

export default Foods;
