import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import RadioRed from '../../../assets/svgs/redRadio.svg';
import RadioBlack from '../../../assets/svgs/blackRadio.svg';

export default function PayOptions({
  title,
  value,
  style,
  isRadioSelected,
  setIsRadioSelected,
}) {
  return (
    <TouchableOpacity
      style={[style, styles.payWrapper]}
      onPress={() => setIsRadioSelected(value)}>
      <View>{isRadioSelected ? <RadioRed /> : <RadioBlack />}</View>
      <Text style={styles.pay}>{title}</Text>
    </TouchableOpacity>
  );
}
