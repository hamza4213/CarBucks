import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const LargeImage = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ServiceDetails')}
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
      <Text style={{fontWeight: '600'}}>Basic Service</Text>
    </TouchableOpacity>
  );
};

export default LargeImage;
