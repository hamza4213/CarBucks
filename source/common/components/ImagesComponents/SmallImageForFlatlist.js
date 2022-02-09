import {View, Text, Image} from 'react-native';
import React from 'react';

const SmallImageForFlatlist = () => {
  return (
    <Image
      source={require('../../../assets/pngs/download.jpg')}
      style={{
        width: 90,
        height: 90,
        borderRadius: 20,
      }}
    />
  );
};

export default SmallImageForFlatlist;
