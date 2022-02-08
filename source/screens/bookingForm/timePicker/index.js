import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';

const timeArr = [
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
];

export default function TimePickerComp({activeTime, setActiveTime}) {
  return (
    <View style={styles.timeContainer}>
      <Text style={styles.time}>Time</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {timeArr.map((item, index) => (
          <TouchableOpacity
            onPress={() => setActiveTime(index)}
            style={[
              styles.timeWrapper,
              activeTime === index ? styles.bgActive : styles.bgGray,
            ]}
            key={index}>
            <Text style={activeTime === index ? styles.timeText : null}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
