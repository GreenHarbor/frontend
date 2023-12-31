import React, { useEffect, useRef, useState } from 'react';
import { Animated, Text, View } from 'react-native';

const Categories = ({ update }) => {
  const [position, setPosition] = useState({ x: 0, y: 89 });
  const [nearby, setNearby] = useState({ x: 0, y: 0 });
  const [news, setNews] = useState({ x: 0, y: 0 });
  const [urgent, setUrgent] = useState({ x: 0, y: 0 });
  const [verified, setVerified] = useState({ x: 0, y: 0 });
  const [total, setTotal] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(0);

  const translatePos = (index) => {
    setActive(index);
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
        style={active !== 0 ? { color: '#92BDB7' } : {}}
        onPress={() => {
          translatePos(0);
          update('nearby');
        }}
      >
        Nearby
      </Text>
      <Text
        className="-rotate-90 text-primary-color font-['Orkney']"
        onPress={() => {
          translatePos(1);
          update('new');
        }}
        style={active !== 1 ? { color: '#92BDB7' } : {}}
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
        style={active !== 2 ? { color: '#92BDB7' } : {}}
        onLayout={(event) => {
          event.target.measure((x, y, width, height, pageX, pageY) => {
            setUrgent({ x: x + pageX, y: height });
          });
        }}
        onPress={() => {
          translatePos(2);
          update('urgent');
        }}
      >
        Urgent
      </Text>
      <Text
        className="-rotate-90 text-primary-color font-['Orkney']"
        style={active !== 3 ? { color: '#92BDB7' } : {}}
        onLayout={(event) => {
          event.target.measure((x, y, width, height, pageX, pageY) => {
            setVerified({ x: x + pageX, y: height });
          });
        }}
        onPress={() => {
          translatePos(3);
          update('verified');
        }}
      >
        Verified
      </Text>
      <Animated.View
        className={`bg-tertiary-color absolute rounded-full w-1 h-1 top-0 right-0 transition ease-in-out duration-300`}
        style={{ transform: [{ translateY: dot }, { translateX: -20 }] }}
      ></Animated.View>
    </View>
  );
};

export default Categories;
