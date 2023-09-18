import React, { useEffect, useRef, useState } from 'react';
import { Animated, Text, View } from 'react-native';

const Categories = () => {
  const [position, setPosition] = useState({ x: 0, y: 89 });
  const [nearby, setNearby] = useState({ x: 0, y: 0 });
  const [news, setNews] = useState({ x: 0, y: 0 });
  const [urgent, setUrgent] = useState({ x: 0, y: 0 });
  const [verified, setVerified] = useState({ x: 0, y: 0 });
  const [total, setTotal] = useState({ x: 0, y: 0 });

  const translatePos = (index) => {
    let space = (total.y - (nearby.y + news.y + urgent.y + verified.y)) / 5;
    switch (index) {
      case 0:
        setPosition({ x: -10, y: space + nearby.y / 2 });
        break;
      case 1:
        setPosition({ x: -10, y: 2 * space + nearby.y + news.y / 2 });
        break;
      case 2:
        setPosition({
          x: -10,
          y: 3 * space + nearby.y + news.y + urgent.y / 2,
        });
        break;
      case 3:
        setPosition({
          x: -10,
          y: 4 * space + nearby.y + news.y + urgent.y + verified.y / 2,
        });
        break;
      default:
        break;
    }
  };

  const dot = useRef(new Animated.Value(89)).current;
  useEffect(() => {
    let pos = position.y;
    Animated.timing(dot, {
      toValue: pos,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [position]);

  return (
    <View
      className="w-[20%] h-full items-center justify-evenly flex flex-col"
      onLayout={(event) => {
        event.target.measure((x, y, width, height, pageX, pageY) => {
          setTotal({ x: x + pageX, y: height });
        });
      }}
    >
      <Text
        className="-rotate-90 text-primary-color font-['Orkney'] "
        onLayout={(event) => {
          event.target.measure((x, y, width, height, pageX, pageY) => {
            setNearby({ x: x + pageX, y: height });
          });
        }}
        onPress={() => translatePos(0)}
      >
        Nearby
      </Text>
      <Text
        className="-rotate-90 text-primary-color font-['Orkney']"
        onPress={() => translatePos(1)}
        onLayout={(event) => {
          event.target.measure((x, y, width, height, pageX, pageY) => {
            setNews({ x: x + pageX, y: height });
          });
        }}
      >
        New
      </Text>
      <Text
        className="-rotate-90 text-primary-color font-['Orkney']"
        onLayout={(event) => {
          event.target.measure((x, y, width, height, pageX, pageY) => {
            setUrgent({ x: x + pageX, y: height });
          });
        }}
        onPress={() => translatePos(2)}
      >
        Urgent
      </Text>
      <Text
        className="-rotate-90 text-primary-color font-['Orkney']"
        onLayout={(event) => {
          event.target.measure((x, y, width, height, pageX, pageY) => {
            setVerified({ x: x + pageX, y: height });
          });
        }}
        onPress={() => translatePos(3)}
      >
        Verified
      </Text>
      <Animated.View
        className={`bg-tertiary-color absolute rounded-full w-1 h-1 top-0 right-0 transition ease-in-out duration-300`}
        style={{ transform: [{ translateY: dot }, { translateX: -10 }] }}
      ></Animated.View>
    </View>
  );
};

export default Categories;
