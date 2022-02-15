import {View, Text} from 'react-native';
import React from 'react';
import CarWash from '../../../assets/svgs/Carwash.svg';
const SmallImage = () => {
  return (
    <View
      style={{
        width: '30%',
        // backgroundColor: 'teal',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <CarWash />
      <Text style={{fontSize: 12}}>Car Wash Service</Text>
    </View>
  );
};

export default SmallImage;
