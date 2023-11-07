import React, { useState } from 'react';
import { View, Text, Button, Modal, Pressable, StyleSheet } from 'react-native';
import Input from '../shared/Input';
import Select from '../shared/Select';
import Buttons from '../shared/Buttons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { createPost } from '../utils/apis/foodrescue';

const sample = {
  coordinate_lat: '91.54789',
  coordinate_long: '21.67890',
  datefrom: '2023-09-19 15:00:00',
  dateposted: '2023-09-19 15:00:00',
  dateto: '2023-09-19 15:00:00',
  description:
    'Skewered, grilled chicken marinated in aromatic spices, served with peanut sauce, a flavorful appetizer or main dish',
  foodtype: 'Normal',
  location: '80 Stamford Rd, Singapore 178902',
  title: 'Chicken Satay',
  verified: true,
};

const AddFoodScreen = () => {
  const options = ['Normal', 'Vegan', 'Organic'];
  const navigation = useNavigation();

  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [foodType, setFoodType] = useState('Normal');
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());
  const [message, setMessage] = React.useState('');

  const [mode, setMode] = useState('time');
  const [show, setShow] = useState(false);

  const [modalVisible, setModalVisible] = React.useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(Platform.OS === 'ios'); // For iOS, you might want to handle the visibility with a modal
    setDateTo(currentDate);
  };

  const showTimepicker = () => {
    setShow(true);
  };

  const submit = async () => {
    const data = {
      title: title,
      description: description,
      foodtype: foodType,
      location: location,
      datefrom: dateFrom,
      dateto: dateTo,
      coordinate_lat: '91.54789',
      coordinate_long: '21.67890',
      dateposted: new Date(),
      verified: true,
    };
    try {
      const res = await createPost(data);
      console.log(res);
      if (res.status === 201) {
        navigation.navigate('FoodRescue');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View className="w-screen h-screen bg-white flex flex-col">
      <View className="w-full h-full mt-4">
        <Text className="ml-8 mb-0">Title</Text>
        <Input
          type="default"
          placeholder="Title"
          val={title}
          setInput={setTitle}
        />
        <Text className="ml-8 mb-0 mt-4">Description</Text>
        <Input
          type="default"
          placeholder="Description"
          val={description}
          setInput={setDescription}
          lines={3}
        />
        <Text className="ml-8 mb-0 mt-4">Food Type</Text>
        <Select
          options={options}
          placeholder="Food Type"
          chosen={foodType}
          changeChosen={setFoodType}
        />
        <Text className="ml-8 mb-0">Location</Text>
        <Input
          type="default"
          placeholder="Location"
          val={location}
          setInput={setLocation}
        />
        <Text className="ml-8 mb-0 mt-4">Collect By</Text>
        <View className="w-[30%] ml-8">
          <Buttons
            onPress={showTimepicker}
            title={dateTo.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              second: undefined, // Explicitly set seconds to undefined to exclude them
              hour12: true, // Set to false if you want 24-hour format, true for 12-hour format
            })}
            color={true}
          />
        </View>
        {show && (
          <DateTimePicker
            value={dateTo}
            mode={mode}
            is24Hour={true}
            display={Platform.OS === 'android' ? 'clock' : 'default'} // Use 'clock' display on Android
            onChange={onChange}
          />
        )}
        <View className="mx-auto w-1/2 flex items-center justify-center">
          <Buttons title="Add Food" onPress={submit} />
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{message}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Okay!</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddFoodScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
