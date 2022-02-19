import {View, Text, TextInput} from 'react-native';
import React from 'react';
import colors, {text, primaryDark} from '../../common/constants/colors';
const TextInputComponent = props => {
  const {title, icon, placeholder} = props;
  return (
    <View>
      <Text style={{color: text}}>{title}</Text>
      <View style={{height: 10}}></View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: 50,
          borderRadius: 10,
          borderColor: text,
          borderWidth: 1,
          paddingHorizontal: 10,
        }}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={text}
          color={text}
        />
        {icon}
      </View>
    </View>
  );
};

export default TextInputComponent;
