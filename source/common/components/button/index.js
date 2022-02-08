import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {primaryLight, primaryDark} from '../../constants/colors';
import styles from './styles';

export default function Button({
  onPress,
  title,
  bgColor,
  color,
  style,
  containerStyle,
  disabled,
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress ? () => onPress() : () => {}}
      activeOpacity={0.7}
      style={[styles.fullWidth, style]}>
      <View
        style={[
          styles.container,
          containerStyle,
          {backgroundColor: bgColor || primaryDark},
        ]}>
        <Text style={[styles.title, {color: color || 'white'}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
