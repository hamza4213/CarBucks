import React from 'react';
import {View, Image} from 'react-native';
import profileImage from '../../../assets/pngs/profileImage.png';
import girlProfile from '../../../assets/pngs/girlProfile.png';
import styles from './styles';

export default function Avatar({left}) {
  return (
    <View style={[styles.container, left ? styles.mr : styles.ml]}>
      <Image source={left ? profileImage : girlProfile} style={styles.image} />
      <View style={[styles.dot, styles.active]} />
    </View>
  );
}
