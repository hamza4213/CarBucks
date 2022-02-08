import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {primaryDark, primaryLight} from '../../../constants/colors';

export default function Tab({Icon, text, onPress, isActive}) {
  return isActive ? (
    <LinearGradient
      colors={[primaryLight, primaryDark]}
      start={{x: 0.2, y: 1.0}}
      end={{x: 0.8, y: 0.0}}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.5}
        style={styles.tabContainer}>
        <View style={styles.iconView}>
          <Icon style={{height: 15, width: 15}} />
        </View>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  ) : (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={styles.tabContainerInActve}>
      <View style={styles.iconView}>
        <Icon style={{height: 15, width: 15}} />
      </View>
      <Text style={styles.textInActive}>{text}</Text>
    </TouchableOpacity>
  );
}
