import React from 'react';
import {View, Text} from 'react-native';
import Avatar from '../avatar';
import styles from './styles';

export default function RightItem() {
  return (
    <View style={styles.container}>
      <View style={styles.sentView}>
        <Text style={styles.sentText}>
          That’s very nice place! you guys made a very good decision. Can’t wait
          to go on vacation!
        </Text>
        <Text style={styles.sentTime}>16:04</Text>
      </View>
      <Avatar right />
    </View>
  );
}
