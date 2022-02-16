import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import CarWash from '../../../assets/svgs/Carwash.svg';
import {useNavigation} from '@react-navigation/native';

const SmallImage = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CarServicesDetails')}
      style={{
        width: '30%',
        // backgroundColor: 'teal',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <CarWash />
      <Text style={{fontSize: 12}}>Car Wash Service</Text>
    </TouchableOpacity>
  );
};

export default SmallImage;
