import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors, {text, primaryDark} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';

const CardComponent = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ServiceDetails')}
      style={{
        width: '30%',
        height: 85,
        borderRadius: 10,
        // alignSelf: 'center',
        backgroundColor: '#fff',
        shadowOffset: {width: 100, height: 50},
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 15,
        flexDirection: 'row',
      }}>
      <View
        style={{
          width: '35%',
          height: '100%',
          //   backgroundColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../assets/pngs/girlProfile.png')}
          style={{width: '100%', height: '100%', borderRadius: 10}}
        />
      </View>
      <View
        style={{
          width: '65%',
          height: '100%',
          paddingHorizontal: 10,
          //   backgroundColor: 'teal',
        }}>
        <View style={{height: 5}}></View>
        <Text style={{fontWeight: 'bold'}}>Car Wash Service</Text>
        <View style={{height: 5}}></View>
        <Text style={{color: text}}>Emma Watson</Text>
        <View
          style={{
            width: '100%',
            // height: '100%',
            flexDirection: 'row',
            // backgroundColor: 'yellow',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: text,
              alignSelf: 'flex-end',
              marginRight: 15,
              marginTop: 5,
            }}>
            $ 10
          </Text>
          <View style={{height: 15}}></View>
          <Text style={{color: primaryDark, fontWeight: 'bold'}}>
            View Details
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardComponent;
