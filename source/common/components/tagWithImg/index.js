import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview';
import styles from './styles';

export default function TagWithImg({carData, index, setIndex}) {
  const clickhandler = i => {
    if (index.includes(i)) {
      let indices = index.filter(ind => ind !== i);
      setIndex(indices);
    } else {
      setIndex([...index, i]);
    }
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {carData.map((item, i) => (
        <TouchableOpacity
          key={i}
          style={{backgroundColor: 'white'}}
          activeOpacity={1}
          onPress={() => clickhandler(i)}>
          <CardView
            cardElevation={index.includes(i) ? 0 : 7}
            cardMaxElevation={7}
            cornerRadius={10}
            style={[styles.tag, index.includes(i) ? styles.activeTag : null]}>
            <item.img />
            <Text style={styles.tagText}>{item.name}</Text>
          </CardView>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
