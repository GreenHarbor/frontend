import React from 'react';
import { TextInput, Pressable, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Select = ({ options, chosen, changeChosen }) => {
  return (
    <Picker
      selectedValue={chosen}
      onValueChange={(itemValue, itemIndex) => changeChosen(itemValue)}
      style={{
        height: 50,
        width: 150,
        marginLeft: 16,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
      }}
    >
      {options.map((option, index) => {
        return <Picker.Item label={option} value={option} key={index} />;
      })}
    </Picker>
  );
};

export default Select;
