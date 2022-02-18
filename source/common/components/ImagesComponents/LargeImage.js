import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const LargeImage = props => {
  const navigation = useNavigation();
  const {item} = props;
  console.log('item in large component ', item);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ServiceDetails')}
      style={{
        width: '40%',
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        shadowOffset: {width: 100, height: 50},
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 15,
        marginTop: 10,
      }}>
      <Image
        source={item.img}
        style={{
          width: '100%',
          height: '70%',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      />
      <Text style={{fontWeight: '600', fontSize: 13}}>{item.desc}</Text>
    </TouchableOpacity>
  );
};

export default LargeImage;
