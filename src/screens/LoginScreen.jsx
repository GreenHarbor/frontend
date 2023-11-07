import React from 'react';
import { View, Image, Text, SafeAreaView } from 'react-native';
import logo from '../../assets/logo.png';
import Input from '../shared/Input';
import Buttons from '../shared/Buttons';
import CheckBox from 'expo-checkbox';
import { Link, useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
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
    </SafeAreaView>
  );
};

export default LoginScreen;
