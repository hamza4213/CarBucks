import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../common/components/header';
import styles from './styles';

export default function OCR() {
  const tessOptions = {};

  return (
    <View>
      <Header title="OCR" />
      <View style={styles.contentContainer}>
        <Text>OCR</Text>
      </View>
    </View>
  );
}
