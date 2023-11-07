import React from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  Modal,
  StyleSheet,
  Pressable,
} from 'react-native';
import logo from '../../assets/logo.png';
import Input from '../shared/Input';
import Buttons from '../shared/Buttons';
import CheckBox from 'expo-checkbox';
import { Link, useNavigation } from '@react-navigation/native';
import { login } from '../utils/apis/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  const navigation = useNavigation();

  const submit = async () => {
    try {
      var signin = await login(username, password);
      await AsyncStorage.setItem('token', signin.data.data.access_token);
      navigation.navigate('FoodRescue');
    } catch (e) {
      console.log(e);
      setMessage(e.message);
      setModalVisible(true);
    }
  };
  return (
    <SafeAreaView className="bg-white w-screen h-screen">
      <Image
        source={logo}
        alt="Logo"
        className="w-full"
        resizeMethod="scale"
        resizeMode="stretch"
      />
      <View className="w-screen flex flex-col items-center pt-8 ">
        <Text
          className={`text-2xl text-primary-color text-center font-['Orkney']`}
        >
          Sign In
        </Text>
        <View className="w-screen flex items-center pt-12">
          <Input
            type="default"
            secure={false}
            placeholder="Username"
            val={username}
            setInput={setUsername}
            icon="user"
          />
          <Input
            type="default"
            secure={true}
            placeholder="Password"
            val={password}
            icon="lock"
            setInput={setPassword}
          />
          <View className="w-10/12 flex flex-row mt-2 p-2">
            <View className="w-1/2 flex-row gap-2 flex items-start">
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />
              <Text className="text-sm text-[#9e9e9e] font-['Orkney']">
                Remember me
              </Text>
            </View>

            <View className="ml-auto text-[#9e9e9e]">
              <Link
                to="/Register"
                style={{ color: '#9e9e9e', fontFamily: 'Orkney' }}
              >
                Forgot Password?
              </Link>
            </View>
          </View>
          <View className="w-screen h-14" />
        </View>
        <Buttons title="Sign In" onPress={submit} isDark={true} />
        <Text className="text-sm text-[#9e9e9e] font-['Orkney'] mt-4">
          Don't have an account?
        </Text>
        <Link
          to="/Register"
          style={{ color: '#00BFA6', fontFamily: 'Orkney', fontSize: 16 }}
        >
          Register an account here!
        </Link>
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
    </SafeAreaView>
  );
};

export default LoginScreen;

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
