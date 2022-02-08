import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import ForwardArrow from '../../../assets/svgs/forwardArrow.svg';
// import ProfileImage from '../../../assets/pngs/profileImage.png';
import CardView from 'react-native-cardview';
import { useNavigation } from '@react-navigation/core';

export default function NotificationCard({ notification, style, last }) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{ paddingHorizontal: 20, marginBottom: last ? 50 : 15 }}


      onPress={() => navigation.navigate('NotifcationDetail')}>
      <CardView
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={15}
        style={[styles.container, style]}>
        <Image style={styles.image} source={notification.image} />

        <View style={styles.textView}>
          <Text style={styles.msg}>{notification.msg}</Text>
          <Text style={styles.time}>{notification.time}</Text>
        </View>

        <View style={styles.endView}>
          <TouchableOpacity
            style={styles.arrowWrapper}
            onPress={() => navigation.navigate('NotifcationsDetail')}>
            <ForwardArrow />
          </TouchableOpacity>
        </View>
      </CardView>
    </TouchableOpacity>
  );
}
