import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
// import styles from '../../../screens/bookingForm/styles'
import CardView from 'react-native-cardview';
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
    <CardView
      cardElevation={3}
      cornerRadius={15}
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
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        style={{flexGrow: 1}}
        secureTextEntry={inputType === 'password' ? true : false}
        {...rest}
      />
      {phone ? null : active && RightIconActive ? RightIconActive : RightIcon}
    </CardView>
  );
}
