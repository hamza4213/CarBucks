import React from 'react';
import {TouchableOpacity} from 'react-native';
import CheckBoxTick from '../../../assets/svgs/checkBoxTick.svg';
import styles from './styles';

export default function Checkbox({isChecked, setChecked}) {
  return (
    <TouchableOpacity
      style={styles.checkBox}
      onPress={() => setChecked(prev => !prev)}>
      {isChecked ? <CheckBoxTick style={styles.checkBoxTick} /> : null}
    </TouchableOpacity>
  );
}
