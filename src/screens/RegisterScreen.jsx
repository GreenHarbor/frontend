import React from 'react';
import { View, Image, Text, SafeAreaView } from 'react-native';
import logo from '../../assets/logo.png';
import Input from '../shared/Input';
import Buttons from '../shared/Buttons';
import CheckBox from 'expo-checkbox';
import { Link, useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  const navigation = useNavigation();

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
          val={username}
          icon="envelope"
          setInput={setUsername}
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
          val={password}
          icon="lock"
          setInput={setPassword}
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
        <Buttons
          title="Sign Up"
          onPress={() => navigation.navigate('FoodRescue')}
        />
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
    </SafeAreaView>
  );
};

export default RegisterScreen;
