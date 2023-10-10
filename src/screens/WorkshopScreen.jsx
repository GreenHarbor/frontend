import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import Header from '../shared/Header';
import Title from '../shared/Title';
import plus from '../../assets/plus.png';

const data = [
  {
    name: 'Terrarium',
    location: '81 Victoria St, Singapore 188065',
    date: 'Sep 10th, 2023',
    time: '10:00 pm',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTZlk_CTDVlbpmWc4oVHDsal2QrLGyGJs-Pw&usqp=CAU',
  },
  {
    name: 'Terrarium',
    location: '81 Victoria St, Singapore 188065',
    date: 'Sep 10th, 2023',
    time: '10:00 pm',
    image:
      'https://d18sx48tl6nre5.cloudfront.net/webp_xl_324ab60cfb233b2a84df29da545b8067.webp',
  },
  {
    name: 'Terrarium',
    location: '81 Victoria St, Singapore 188065',
    date: 'Sep 10th, 2023',
    time: '10:00 pm',
    image:
      'https://d18sx48tl6nre5.cloudfront.net/webp_xl_324ab60cfb233b2a84df29da545b8067.webp',
  },
];

const WorkshopScreen = () => {
  const [current, setCurrent] = useState(0);

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
        <View className="w-full h-[70%] flex flex-row mt-4 items-center">
          <Image
            source={{ uri: data[current % 3].image }}
            alt="workshop"
            className="w-64 h-[100%] rounded-xl z-20"
          />
          <Image
            source={{ uri: data[(current + 1) % 3].image }}
            alt="workshop"
            className="w-64 h-[80%] rounded-xl z-10 absolute right-[125px] opacity-50"
          />
          <Image
            source={{ uri: data[(current + 2) % 3].image }}
            alt="workshop"
            className="w-64 h-[60%] rounded-xl z-10 absolute right-[100px] opacity-30"
          />
        </View>
        <View className="w-full flex flex-row items-center justify-end mt-4">
          <Image source={plus} alt="plus" />
          <Text className="mr-8 ml-2 ">Create Event</Text>
        </View>
      </View>
    </View>
  );
};

export default WorkshopScreen;
