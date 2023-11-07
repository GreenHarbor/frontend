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
import { login, register } from '../utils/apis/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const navigation = useNavigation();

  const submit = async () => {
    try {
      const data = await register(email, password, username);
      if (data.status === 201) {
        var signin = await login(username, password);
        await AsyncStorage.setItem('token', signin.data.data.access_token);
        navigation.navigate('FoodRescue');
      }
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
      <View className="z-10 h-screen w-screen flex-1 flex-col items-center pt-8">
        <Text
          className={`text-2xl text-primary-color text-center font-['Orkney'] mb-4`}
        >
          Create Account
        </Text>
        <Input
          type="default"
          secure={false}
          placeholder="Username"
          val={username}
          icon="user"
          setInput={setUsername}
        />
        <Input
          type="email-address"
          secure={false}
          placeholder="Email"
          val={email}
          icon="envelope"
          setInput={setEmail}
        />
        <Input
          type="default"
          secure={true}
          placeholder="Password"
          val={password}
          icon="lock"
          setInput={setPassword}
        />
        <Input
          type="default"
          secure={true}
          placeholder="Confirm Password"
          val={confirmPassword}
          icon="lock"
          setInput={setConfirmPassword}
        />
        <View className="w-10/12 flex flex-row mt-2 p-2">
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text className="text-sm text-[#9e9e9e] font-['Orkney'] ml-2">
            I agree to the{' '}
            <Text className="text-primary-color ">Terms and Conditions</Text>.
          </Text>
        </View>
        <View className="w-screen h-4" />
        <Buttons title="Sign Up" onPress={submit} />
        <Text className="text-sm text-[#9e9e9e] font-['Orkney'] mt-2">
          Already have an account?
        </Text>
        <Link
          to="/Login"
          style={{ color: '#00BFA6', fontFamily: 'Orkney', fontSize: 16 }}
        >
          Sign in from here!
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

export default RegisterScreen;
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
