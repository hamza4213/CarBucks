import {View, Text, Image} from 'react-native';
import React from 'react';

const ImagesInRow = () => {
  const imgs = [
    'https://i.ibb.co/yRnVg44/Mask.png',
    'https://i.ibb.co/cY5W9LW/repair1.png',
    'https://i.ibb.co/r5y88kj/repair2.png',
    'https://i.ibb.co/vcpD2K0/repair3.png',
  ];
  return (
    <View
      style={{
        width: '100%',
        height: 75,
        // backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {imgs.map((item, index) => (
        <Image
          source={{uri: item}}
          style={{height: '100%', width: '22%', borderRadius: 10}}
        />
      ))}
    </View>
  );
};

export default ImagesInRow;
