import React from 'react';
import { TextInput, Pressable, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../utils/hooks/useTogglePasswordVisibility';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Input = ({
  type,
  secure,
  placeholder,
  setInput,
  val,
  width,
  icon,
  lines,
}) => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  return (
    <View
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: width ? width : '83.333333%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      className="p-2 mt-3 mx-4 bg-white rounded-full border border-white flex flex-row items-center"
    >
      <Icon name={icon} style={{ marginLeft: 4 }} />
      <TextInput
        onChangeText={setInput}
        keyboardType={type}
        value={val}
        placeholder={placeholder}
        secureTextEntry={secure ? passwordVisibility : false}
        className="px-4 bg-white w-10/12 font-['Orkney'] rounded-full"
        multiline={true}
        numberOfLines={lines ? lines : 1}
      />
      {secure && (
        <Pressable onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons
            name={rightIcon}
            size={22}
            style={{ paddingLeft: 12 }}
            color="#232323"
          />
        </Pressable>
      )}
    </View>
  );
};

export default Input;
