import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, Button } from 'react-native';
import Title from './Title';
import Clock from '../../assets/clock.png';
import Map from '../../assets/location.png';
import Swiper from 'react-native-deck-swiper';
import Constants from 'expo-constants';
import axios from 'axios';

// const data = [
//   {
//     name: 'Chicken Satay',
//     description:
//       'Skewered, grilled chicken marinated in aromatic spices, served with peanut sauce, a flavorful appetizer or main dish',
//     image:
//       'https://carlsbadcravings.com/wp-content/uploads/2019/04/Chicken-Satay-8.jpg',
//     timePosted: '30 mins ago',
//     location: '80 Stamford Rd, Singapore 178902',
//   },
//   {
//     name: 'Grilled Chicken',
//     description:
//       'Skewered, grilled chicken marinated in aromatic spices, served with peanut sauce, a flavorful appetizer or main dish',
//     image:
//       'https://fitfoodiefinds.com/wp-content/uploads/2021/05/chicken-marinade-7-sq.jpg',
//     timePosted: '30 mins ago',
//     location: '80 Stamford Rd, Singapore 178902',
//   },
//   {
//     name: 'Salad',
//     description:
//       'Skewered, grilled chicken marinated in aromatic spices, served with peanut sauce, a flavorful appetizer or main dish',
//     image:
//       'https://www.eatingwell.com/thmb/rmLlvSjdnJCCy_7iqqj3x7XS72c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chopped-power-salad-with-chicken-0ad93f1931524a679c0f8854d74e6e57.jpg',
//     timePosted: '30 mins ago',
//     location: '80 Stamford Rd, Singapore 178902',
//   },
//   {
//     name: 'Pizza',
//     description:
//       'Skewered, grilled chicken marinated in aromatic spices, served with peanut sauce, a flavorful appetizer or main dish',
//     image:
//       'https://tastesbetterfromscratch.com/wp-content/uploads/2023/06/Pepperoni-Pizza-1.jpg',
//     timePosted: '30 mins ago',
//     location: '80 Stamford Rd, Singapore 178902',
//   },
// ];

const Foods = ({ data }) => {
  const { ACCESS_KEY, SECRET_KEY } = Constants.expoConfig.extra;

  function timeAgo(date) {
    const now = new Date();
    const date2 = new Date(date);
    const secondsPast = (now.getTime() - date2.getTime()) / 1000;

    if (secondsPast < 60) {
      return parseInt(secondsPast) + ' seconds ago';
    } else if (secondsPast < 3600) {
      return parseInt(secondsPast / 60) + ' mins ago';
    } else if (secondsPast < 7200) {
      return '1 hour ago';
    } else if (secondsPast < 86400) {
      return parseInt(secondsPast / 3600) + ' hours ago';
    } else if (secondsPast < 172800) {
      // 48 hours
      return '1 day ago';
    } else if (secondsPast < 2592000) {
      // 30 days
      return parseInt(secondsPast / 86400) + ' days ago';
    } else if (secondsPast < 5184000) {
      // 60 days
      return '1 month ago';
    } else if (secondsPast < 31536000) {
      // 365 days
      return parseInt(secondsPast / 2592000) + ' months ago';
    } else if (secondsPast < 63072000) {
      // 730 days
      return '1 year ago';
    } else {
      return parseInt(secondsPast / 31536000) + ' years ago';
    }
  }

  const [enhancedData, setEnhancedData] = useState([]);

  useEffect(() => {
    // A function to asynchronously fetch images and enhance the data
    const enhanceDataWithImages = async () => {
      if (data.length === 0) return [];
      const promises = data.map(async (item) => {
        let cloned = { ...item };
        if (!cloned.hasOwnProperty('title')) cloned.title = 'Food';
        if (!cloned.hasOwnProperty('description'))
          cloned.description = 'Description';
        if (!cloned.hasOwnProperty('dateposted'))
          cloned.dateposted = new Date();
        cloned.image = 'https://source.unsplash.com/random';
        try {
          let response = await axios.get(
            `https://api.unsplash.com/search/photos`,
            {
              params: {
                query: cloned.title || 'pizza', // replace with the name of the food
                client_id: ACCESS_KEY,
              },
            }
          );
          cloned.image = response.data.results[0].urls.regular;
        } catch (error) {
          console.error('Error fetching image:', error);
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

  return (
    <View className="w-[80%] h-full mb-auto">
      <Swiper
        cards={enhancedData}
        renderCard={(food, index) => {
          if (!food) return null;
          return (
            <View
              key={index}
              className="w-[60%] bg-secondary-color rounded-xl ml-12 h-[60%] pb-4"
            >
              <Image
                source={{ uri: 'https://source.unsplash.com/random' }}
                alt="food"
                className="w-32 h-32 rounded-full absolute -top-8 -left-8 "
              />
              <View className="w-[80%] mt-28 mx-auto flex flex-col justify-evenly h-[70%]">
                <Title title={food.title} size="small" />
                <Text className="text-black text-sm font-['Orkney'] mt-4">
                  {food.description}
                </Text>
                <View className="flex flex-col mt-auto mb-4 w-[80%]">
                  <View className="flex flex-row items-center gap-4 mt-auto">
                    <Image source={Clock} alt="clock" />
                    <Text className="text-black text-xs font-['Orkney']">
                      {timeAgo(food.dateposted)}
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
        }}
        onSwiped={(cardIndex) => {
          console.log(cardIndex);
        }}
        onSwipedAll={() => {
          console.log('onSwipedAll');
        }}
        cardIndex={0}
        stackSize={2}
        backgroundColor={'transparent'}
        infinite={true}
        verticalSwipe={false}
        showSecondCard={true}
      ></Swiper>
    </View>
  );
};

export default Foods;
