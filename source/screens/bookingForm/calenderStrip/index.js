import moment from 'moment';
import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function CalenderStrip({date}) {
  const [activeTime, setActiveTime] = useState(-1);

  const dates = [];

  for (let i = 0; i < 90; i++) {
    var tomorrow = new Date(date);
    tomorrow.setDate(tomorrow.getDate() + i);

    dates.push(tomorrow);
  }

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {dates.map((item, index) => (
        <TouchableOpacity
          onPress={() => setActiveTime(index)}
          style={[
            styles.dateContainer,
            activeTime === index ? styles.bgActive : styles.bgGray,
          ]}
          key={index}>
          <Text
            style={[
              styles.date,
              activeTime === index ? styles.timeText : null,
            ]}>
            {moment(item).format('DD')}
          </Text>
          <Text
            style={[styles.day, activeTime === index ? styles.timeText : null]}>
            {moment(item).format('dddd').slice(0, 2)}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
