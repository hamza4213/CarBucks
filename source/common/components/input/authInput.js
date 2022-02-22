import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
// import styles from '../../../screens/bookingForm/styles'
import CardView from 'react-native-cardview';
import {text} from '../../constants/colors';
import styles from './styles';

export default function AuthInput({
  onChangeText,
  placeholder,
  style,
  RightIcon,
  RightIconActive,
  inputType,
  phone,
  ...rest
}) {
  const [active, setActive] = useState(false);
  return (
    <View
      // cardElevation={3}
      // cornerRadius={15}
      //   style={[styles.textInputContainer, style]}
      style={[
        phone ? null : {justifyContent: 'space-between'},
        styles.textInputContainer,
        style,
      ]}>
      {phone ? RightIcon : null}
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={text}
        color={text}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        style={{flexGrow: 1}}
        secureTextEntry={inputType === 'password' ? true : false}
        {...rest}
      />
      {phone ? null : active && RightIconActive ? RightIconActive : RightIcon}
    </View>
  );
}
