import {View, Text} from 'react-native';
import React from 'react';
import CarWash from '../../../assets/svgs/Carwash.svg';
const SmallImage = () => {
  return (
    <View
      style={{
        width: '35%',
        // backgroundColor: 'teal',
        alignItems: 'center',
      }}>
      <CarWash />
      <Text>Car Wash Service</Text>
    </View>
  );
};

export default SmallImage;
