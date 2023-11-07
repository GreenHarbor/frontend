import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Input from '../shared/Input';
import Buttons from '../shared/Buttons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

const sample = {
  name: 'Terrarium',
  location: '81 Victoria St, Singapore 188065',
  date: 'Sep 10th, 2023',
  time: '10:00 pm',
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTZlk_CTDVlbpmWc4oVHDsal2QrLGyGJs-Pw&usqp=CAU',
};

const AddEventScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
    showTimepicker();
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || date;
    setShowTimePicker(Platform.OS === 'ios');
    setDate(currentTime);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
    setShowTimePicker(false);
  };

  const showTimepicker = () => {
    setShowTimePicker(true);
    setShowDatePicker(false);
  };

  const submit = () => {
    navigation.navigate('Workshop');
  };

  return (
    <View className="w-screen h-screen bg-white flex flex-col">
      <View className="w-full h-full mt-4">
        <Text className="ml-8 mb-0">Name</Text>
        <Input
          type="default"
          placeholder="Name"
          val={name}
          setInput={setName}
        />
        <Text className="ml-8 mb-0 mt-4">Location</Text>
        <Input
          type="default"
          placeholder="Location"
          val={location}
          setInput={setLocation}
        />
        <Text className="ml-8 mb-0 mt-4">Date & Time</Text>
        <View className="w-[50%] ml-8">
          <Buttons
            onPress={showDatepicker}
            title={date.toLocaleDateString([], {
              hour: '2-digit',
              minute: '2-digit',
              second: undefined, // Explicitly set seconds to undefined to exclude them
              hour12: true, // Set to false if you want 24-hour format, true for 12-hour format
            })}
            color={true}
          />
        </View>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}
        {showTimePicker && (
          <DateTimePicker
            value={date}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onTimeChange}
          />
        )}
        <View className="mx-auto w-1/2 flex items-center justify-center">
          <Buttons title="Add Event" onPress={submit} />
        </View>
      </View>
    </View>
  );
};

export default AddEventScreen;
