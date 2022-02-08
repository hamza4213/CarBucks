import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default function TermsSection({item}) {
  return (
    <View style={styles.termsSectionContainer}>
      <Text style={styles.title}>{item?.heading}</Text>
      <Text style={styles.description}>{item?.description}</Text>
    </View>
  );
}
