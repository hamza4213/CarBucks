import {View, Text, Image} from 'react-native';
import React from 'react';

const LargeImage = () => {
  return (
    <View
      style={{
        width: '40%',
        height: 160,
        // backgroundColor: 'black',
        borderRadius: 20,
        alignItems: 'center',
      }}>
      <Image
        source={require('../../../assets/pngs/download.jpg')}
        style={{
          width: '100%',
          height: '80%',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      />
      <Text>LargeImage</Text>
    </View>
  );
};

export default LargeImage;
