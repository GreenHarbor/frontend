import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import Header from '../shared/Header';
import Title from '../shared/Title';

const data = [
  {
    name: 'Terrarium',
    location: '81 Victoria St, Singapore 188065',
    date: 'Sep 10th, 2023',
    time: '10:00 pm',
    image: 'https://i.imgur.com/7zK4FgX.png',
  },
  {
    name: 'Terrarium',
    location: '81 Victoria St, Singapore 188065',
    date: 'Sep 10th, 2023',
    time: '10:00 pm',
    image: 'https://i.imgur.com/7zK4FgX.png',
  },
  {
    name: 'Terrarium',
    location: '81 Victoria St, Singapore 188065',
    date: 'Sep 10th, 2023',
    time: '10:00 pm',
    image: 'https://i.imgur.com/7zK4FgX.png',
  },
];

const WorkshopScreen = () => {
  const [current, setCurrent] = useState(0);

  const renderWorkshops = () => {
    return (
      <View className="w-full h-full">
        <Image source={data[current % 3].image} />
        <Image source={data[(current + 1) % 3].image} />
        <Image source={data[(current + 2) % 3].image} />
      </View>
    );
  };

  return (
    <View className="w-screen h-screen bg-white">
      <Header />
      <View className="w-screen ml-4">
        <Title title="Workshop" />
        <View className="w-full flex flex-row mt-4">
          <View>
            <Text className="text-3xl font-[Orkney]">{data[current].name}</Text>
            <Text className="font-[Orkney]">{data[current].location}</Text>
          </View>
          <View className="ml-auto mr-8 items-end">
            <Text className="font-[Orkney]">{data[current].date}</Text>
            <Text className="font-[Orkney]">{data[current].time}</Text>
          </View>
        </View>
        {renderWorkshops()}
      </View>
    </View>
  );
};

export default WorkshopScreen;
