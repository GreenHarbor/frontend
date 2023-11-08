import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Header from '../shared/Header';
import Title from '../shared/Title';
import plus from '../../assets/plus.png';
import Swiper from 'react-native-deck-swiper';
import { useNavigation } from '@react-navigation/native';
import { getWorkshops } from '../utils/apis/workshop';
import Constants from 'expo-constants';
import axios from 'axios';
import { register, withdraw } from '../utils/apis/registration';
import Buttons from '../shared/Buttons';

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
  const navigation = useNavigation();
  const { ACCESS_KEY, SECRET_KEY } = Constants.expoConfig.extra;

  const [data, setData] = useState([
    { Title: 'Loading...', Location: '', Start_Timestamp: new Date() },
  ]);
  const [enhancedData, setEnhancedData] = useState({
    Title: 'Loading...',
    Location: '',
    Start_Timestamp: new Date(),
    Image: 'https://source.unsplash.com/random',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getWorkshops();
        setData(res.data);
      } catch (e) {
        console.log('error', e);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // A function to asynchronously fetch images and enhance the data
    const enhanceDataWithImages = async () => {
      if (data.length === 0) return [];
      const promises = data.map(async (item) => {
        let cloned = { ...item };
        cloned.image = 'https://source.unsplash.com/random';
        try {
          let response = await axios.get(
            `https://api.unsplash.com/search/photos`,
            {
              params: {
                query: cloned.Title || 'pizza', // replace with the name of the food
                client_id: ACCESS_KEY,
              },
            }
          );
          cloned.image = response.data.results[0].urls.regular;
        } catch (error) {
          console.log('Error fetching image:', error);
          // Handle the error, possibly by setting a default image
          cloned.image = 'https://source.unsplash.com/random';
        }
        return cloned;
      });

      const results = await Promise.all(promises);
      setEnhancedData(results);
    };

    enhanceDataWithImages();
  }, [data]);

  function getOrdinalSuffix(date) {
    if (date > 3 && date < 21) return 'th';
    switch (date % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

  function formatDateString(date2) {
    if (typeof date2 !== 'string') return ''; // Changed from checking undefined to not a string
    const correctIsoString = date2.slice(0, 10) + 'T' + date2.slice(11);

    let date3 = new Date(correctIsoString);
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const day = date3.getDate();
    const monthIndex = date3.getMonth();
    const year = date3.getFullYear();

    return `${monthNames[monthIndex]} ${day}${getOrdinalSuffix(day)}, ${year}`;
  }

  function formatTimeString(date2) {
    if (typeof date2 !== 'string') return ''; // Changed from checking undefined to not a string
    const correctIsoString = date2.slice(0, 10) + 'T' + date2.slice(11);

    let date3 = new Date(correctIsoString);
    let hours = date3.getHours();
    const minutes = date3.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${minutesStr} ${ampm}`;
  }

  const joinEvent = async () => {
    const details = {
      user_id: 'test_user',
      creator_id: 'jieent',
      creation_timestamp: '2023-11-07-17:40:48.025',
      start_timestamp: '2024-02-10-15:00:00.000',
      title: 'test_workshop',
    };
    try {
      console.log(details);
      const res = await register(details);
      console.log(res);
      if (res.status === 200) {
        alert('Successfully registered for event');
        console.log('success');
      }
    } catch (e) {
      console.log(e);
      alert('You are already registered for this event');
    }
  };

  const withdrawEvent = async () => {
    const details = {
      user_id: 'test_user',
      creator_id: 'jieent',
      creation_timestamp: '2023-11-07-17:40:48.025',
      title: 'test_workshop',
    };
    try {
      console.log(details);
      const res = await withdraw(details);
      console.log(res);
      if (res.status === 200) {
        alert('Successfully withdrawn from event');
      }
    } catch (e) {
      console.log(e);
      alert('You are not registered for this event');
    }
  };

  return (
    <View className="w-screen h-screen bg-white">
      <Header />
      <View className="w-screen ml-4">
        <Title title="Workshop" />
        <View className="w-full flex flex-row mt-4">
          <View>
            <Text className="text-3xl font-[Orkney]">
              {data[current].Title}
            </Text>
            <Text className="font-[Orkney]">{data[current].Location}</Text>
          </View>
          <View className="ml-auto mr-8 items-end">
            <Text className="font-[Orkney]">
              {formatDateString(data[current].Start_Timestamp)}
            </Text>
            <Text className="font-[Orkney]">
              {formatTimeString(data[current].Start_Timestamp)}
            </Text>
          </View>
        </View>
        <View className="w-full h-[70%] flex flex-row mt-4 items-center">
          <Swiper
            cards={enhancedData}
            renderCard={(workshop, index) => {
              if (!workshop) return;
              return (
                <Image
                  key={Math.random() * 10 + workshop.Title}
                  source={{ uri: workshop.image }}
                  alt="workshop"
                  className="w-64 h-[60%] rounded-xl z-20"
                />
              );
            }}
            onSwiped={(cardIndex) => {
              setCurrent(cardIndex);
            }}
            onSwipedAll={() => {
              console.log('onSwipedAll');
            }}
            cardIndex={0}
            stackSize={3}
            backgroundColor={'transparent'}
            infinite={true}
            verticalSwipe={false}
            showSecondCard={true}
          ></Swiper>
          <View className="absolute right-0">
            <Buttons title="Join Event" onPress={joinEvent} />
            <Buttons title="Withdraw from Event" onPress={withdrawEvent} />
          </View>
        </View>
        <View className="w-full flex flex-row items-center justify-end mt-4">
          <Image source={plus} alt="plus" />
          <Pressable onPress={() => navigation.navigate('AddEvent')}>
            <Text className="mr-8 ml-2 ">Create Event</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default WorkshopScreen;
