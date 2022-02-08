import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {primaryDark, primaryLight} from '../../constants/colors';
import styles from './gradiantButtonStyle';
import LinearGradient from 'react-native-linear-gradient';

export default function GradiantButton({
  isGradiant,
  title,

  style,
  onPress,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress ? () => onPress() : () => {}}
      style={[styles.gradiantContainerWrapper, style]}>
      {isGradiant ? (
        <LinearGradient
          colors={[primaryLight, primaryDark]}
          start={{x: 0.2, y: 1.0}}
          end={{x: 0.8, y: 0.0}}
          style={styles.gradiantContainer}>
          <Text style={styles.buttonTitle}>{title}</Text>
          {/* <Icon /> */}
        </LinearGradient>
      ) : (
        <View style={[styles.gradiantContainer, styles.simpleButton]}>
          <Text style={[styles.buttonTitle, styles.buttonTitleSimple]}>
            {title}
          </Text>
          {/* <Icon /> */}
        </View>
      )}
    </TouchableOpacity>
  );
}
