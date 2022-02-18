import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview';
import styles from './styles';

export default function Tag({carData, setName, title}) {
  const [ind, setInd] = useState(null);
  const clickhandler = (item, index) => {
    console.log(item, index);
    setInd(index);
    setName(item.name ? item.name : item.label ? item.label : '-');
  };
  console.log('carData', carData);
  return (
    <>
      <Text>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {carData.map((item, index) => (
          <TouchableOpacity
            style={{
              borderRadius: 10,
              marginVertical: 10,
              marginRight: 20,
              marginLeft: 5,
              paddingHorizontal: 25,
              paddingVertical: 12,
              backgroundColor:
                index === ind ? 'rgba(228, 16, 17, 0.09)' : '#fff',
              shadowOffset: index === ind ? null : {width: 100, height: 100},
              shadowColor: index === ind ? null : '#000',
              shadowOpacity: index === ind ? null : 1,
              elevation: index === ind ? null : 7,
              shadowRadius: index === ind ? null : 10,
            }}
            activeOpacity={1}
            onPress={() => clickhandler(item, index)}>
            <Text style={styles.tagText}>
              {item.name ? item.name : item.label ? item.label : '-'}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
}
