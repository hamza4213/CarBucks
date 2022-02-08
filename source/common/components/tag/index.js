import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview';
import styles from './styles';

export default function Tag({carData, index, setIndex, setName}) {
  const clickhandler = item => {
    setIndex(item.id);
    setName(item.name);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {carData.map((item, i) => (
        <TouchableOpacity
          style={{backgroundColor: 'white'}}
          activeOpacity={1}
          onPress={() => {
            clickhandler(item);
          }}>
          <CardView
            cardElevation={index === item.id ? 0 : 7}
            cardMaxElevation={7}
            cornerRadius={10}
            style={[styles.tag, index === item.id ? styles.activeTag : null]}>
            <Text style={styles.tagText}>{item?.name || '-'}</Text>
          </CardView>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
