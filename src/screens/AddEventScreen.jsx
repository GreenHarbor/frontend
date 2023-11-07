import React, { useState } from 'react';
import { View, Text, Button, Modal, Pressable, StyleSheet } from 'react-native';
import Input from '../shared/Input';
import Buttons from '../shared/Buttons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { createWorkshop } from '../utils/apis/workshop';

const sample = {
  Creator_Id: '2',
  Title: 'TEST WORKSHOP!',
  Description: 'This is for testing',
  Location: '123 Test Road',
  Vacancies: 22,
  Registration_Deadline: '2024-02-17-23:59:59.000',
  Start_Timestamp: '2024-02-10-15:00:00.000',
};

const AddEventScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [message, setMessage] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);

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

  function formatDateToCustomString(date) {
    const pad = (number, length = 2) => String(number).padStart(length, '0');

    let year = date.getFullYear();
    let month = pad(date.getMonth() + 1); // getMonth() is zero-based
    let day = pad(date.getDate());
    let hours = pad(date.getHours());
    let minutes = pad(date.getMinutes());
    let seconds = pad(date.getSeconds());
    let milliseconds = pad(date.getMilliseconds(), 3);

    return `${year}-${month}-${day}-${hours}:${minutes}:${seconds}.${milliseconds}`;
  }

  const submit = async () => {
    let reg = date;
    reg.setHours(reg.getHours() - 3);

    const data = {
      Creator_Id: '2',
      Title: name,
      Description: 'This is for testing',
      Location: location,
      Vacancies: 22,
      Registration_Deadline: formatDateToCustomString(reg),
      Start_Timestamp: formatDateToCustomString(date),
    };
    try {
      const res = await createWorkshop(data);
      console.log(res);
      if (res.status === 201) {
        navigation.navigate('Workshop');
      }
    } catch (e) {
      console.log(e);
      setMessage(e.message);
      setModalVisible(true);
    }
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

export default AddEventScreen;

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
