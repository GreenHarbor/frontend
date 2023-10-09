import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import Title from './Title';
import Clock from '../../assets/clock.png';
import Map from '../../assets/location.png';

const data = [
  {
    name: 'Chicken Satay',
    description:
      'Skewered, grilled chicken marinated in aromatic spices, served with peanut sauce, a flavorful appetizer or main dish',
    image:
      'https://carlsbadcravings.com/wp-content/uploads/2019/04/Chicken-Satay-8.jpg',
    timePosted: '30 mins ago',
    location: '80 Stamford Rd, Singapore 178902',
  },
  {
    name: 'Chicken Satay',
    description:
      'Skewered, grilled chicken marinated in aromatic spices, served with peanut sauce, a flavorful appetizer or main dish',
    image:
      'https://carlsbadcravings.com/wp-content/uploads/2019/04/Chicken-Satay-8.jpg',
    timePosted: '30 mins ago',
    location: '80 Stamford Rd, Singapore 178902',
  },
  {
    name: 'Chicken Satay',
    description:
      'Skewered, grilled chicken marinated in aromatic spices, served with peanut sauce, a flavorful appetizer or main dish',
    image:
      'https://carlsbadcravings.com/wp-content/uploads/2019/04/Chicken-Satay-8.jpg',
    timePosted: '30 mins ago',
    location: '80 Stamford Rd, Singapore 178902',
  },
  {
    name: 'Chicken Satay',
    description:
      'Skewered, grilled chicken marinated in aromatic spices, served with peanut sauce, a flavorful appetizer or main dish',
    image:
      'https://carlsbadcravings.com/wp-content/uploads/2019/04/Chicken-Satay-8.jpg',
    timePosted: '30 mins ago',
    location: '80 Stamford Rd, Singapore 178902',
  },
];

const Foods = () => {
  return (
    <View className="w-[80%] h-full flex flex-row">
      {data.map((food, index) => {
        return (
          <View
            key={index}
            className="w-[60%] h-full bg-secondary-color rounded-xl ml-12"
          >
            <Image
              source={{ uri: food.image }}
              alt="food"
              className="w-32 h-32 rounded-full absolute -top-8 -left-8 "
            />
            <View className="w-[80%] mt-28 mx-auto flex flex-col justify-evenly h-[70%]">
              <Title title={food.name} size="small" />
              <Text className="text-black text-sm font-['Orkney'] mt-4">
                {food.description}
              </Text>
              <View className="flex flex-col mt-auto mb-4 w-[80%]">
                <View className="flex flex-row items-center gap-4 mt-auto">
                  <Image source={Clock} alt="clock" />
                  <Text className="text-black text-xs font-['Orkney']">
                    {food.timePosted}
                  </Text>
                </View>
                <View className="flex flex-row items-center gap-4">
                  <Image source={Map} alt="map" />
                  <Text className="text-black text-xs font-['Orkney']">
                    {food.location}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Foods;
