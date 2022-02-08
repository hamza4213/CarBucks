import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {primaryDark, primaryLight} from '../../../constants/colors';
import styles from './styles';

export default function RatingButton({
  title,
  onPress,
  style,
  textStyle,
  isLoading,
  type,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={isLoading ? () => {} : onPress}>
      {type === 'gradiant' || type==="gradient" ? (
        <LinearGradient
          colors={[primaryLight, primaryDark]}
          start={{x: 0.2, y: 1.0}}
          end={{x: 0.8, y: 0.0}}
          style={[styles.button, style]}>
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={[styles.grdBtn, textStyle]}>{title}</Text>
          )}
        </LinearGradient>
      ) : (
        <View style={[styles.button, style]}>
          {isLoading ? (
            <ActivityIndicator color="black" />
          ) : (
            <Text style={textStyle}>{title}</Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}
