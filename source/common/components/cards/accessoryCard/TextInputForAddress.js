import {View, Text, TextInput} from 'react-native';
import React from 'react';
import colors, {text, primaryDark} from '../../../constants/colors';
const TextInputForAddress = props => {
  const {state, setState, row, title, placeholder} = props;
  return (
    <View
      style={{
        marginTop: 10,
        width: row ? '45%' : '100%',
        // backgroundColor: '#000',
      }}>
      <Text style={{fontWeight: '600'}}>{title}</Text>
      <View style={{height: 15}}></View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={text}
        style={{
          width: '100%',
          borderWidth: 1,
          borderRadius: 10,
          height: 40,
          paddingLeft: 10,
          color: text,
        }}
      />
    </View>
  );
};

export default TextInputForAddress;
