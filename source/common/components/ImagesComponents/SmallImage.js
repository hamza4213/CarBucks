import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import CarWash from '../../../assets/svgs/Carwash.svg';
import {useNavigation} from '@react-navigation/native';

const SmallImage = props => {
  const {item} = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CarServicesDetails')}
      style={{
        width: '90%',
        height: '80%',
        // backgroundColor: 'teal',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <Image style={{width: '100%', height: '80%'}} source={item.img} />
      <View style={{height: 10}}></View>
      <Text style={{fontSize: 12, fontWeight: '600', alignSelf: 'center'}}>
        {item.desc}
      </Text>
    </TouchableOpacity>
  );
};

export default SmallImage;
