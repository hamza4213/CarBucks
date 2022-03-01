import React from 'react';
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';
import styles from './styles';
import EyeOn from '../../../assets/svgs/showPassword.svg';
import EyeOnW from '../../../assets/svgs/showPasswordWhite.svg';

import EyeOff from '../../../assets/svgs/hidePassword.svg';
import EyeOffW from '../../../assets/svgs/hidePasswordWhite.svg';
import colors, {
  placeholder as colorA,
  placeholderBlack,
  text,
} from '../../constants/colors';
import {useState} from 'react';
export default function Input({
  type,
  label,
  placeholder,
  LeftIcon,
  inputType,
  style,
  value,
  onChangeText,
  keyboardType,
  inputStyle,
  onChange,
  ...rest
}) {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(prev => !prev);
  };

  return (
    <View
      style={[
        styles.container,
        type === 'a' ? styles.containerA : null,
        style,
      ]}>
      {LeftIcon}

      <TextInput
        onChange={onChange}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={text}
        color={text}
        placeholder={placeholder || ''}
        keyboardType={keyboardType || 'default'}
        secureTextEntry={inputType === 'password' ? show : false}
        // placeholderTextColor={type === 'a' ? placeholderBlack : colorA}
        style={[{...inputStyle}]}
        {...rest}
      />

      {inputType ? (
        <TouchableOpacity
          style={styles.rightIcon}
          onPress={inputType === 'password' ? handleClick : () => {}}>
          {show ? (
            type === 'b' ? (
              <EyeOnW />
            ) : (
              <EyeOn />
            )
          ) : type === 'b' ? (
            <EyeOffW />
          ) : (
            <EyeOff />
          )}
        </TouchableOpacity>
      ) : null}

      <View
        style={[
          styles.labelView,
          type === 'a' ? styles.labelViewA : styles.labelViewB,
        ]}>
        <Text
          style={[styles.label, type === 'a' ? styles.labelA : styles.labelB]}>
          {label || 'Input'}
        </Text>
      </View>
    </View>
  );
}
