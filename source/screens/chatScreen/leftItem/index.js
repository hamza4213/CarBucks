import React from 'react';
import {View, Text} from 'react-native';
import Avatar from '../avatar';
import styles from './styles';

export default function LeftItem() {
  return (
    <View style={styles.container}>
      <Avatar left />
      <View style={styles.welcomeMsg}>
        <View style={styles.msgTop}>
          <Text style={styles.name}>Mike Mazowski </Text>
          <Text style={styles.user}>admin</Text>
        </View>
        <Text style={styles.msgTxt}>
          Hello guys, we have discussed about post-corona vacation plan and our
          decision is to go to Bali. We will have a very big party after this
          corona ends! These are some images about our destination
        </Text>
        <Text style={styles.time}>16:04</Text>
      </View>
    </View>
  );
}
