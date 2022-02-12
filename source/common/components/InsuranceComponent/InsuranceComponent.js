import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors, {
  primaryDark,
  primaryLight,
  darkOrange,
  primary,
  text,
} from '../../../common/constants/colors';
import LinearGradientWrapper from '../../../../source/common/components/LinearGradientWrapper/index';
import {useNavigation} from '@react-navigation/native';
const InsuranceComponent = props => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: '100%',
        height: 120,
        backgroundColor: '#fff',
        // marginTop: 20,
        // alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        shadowOffset: {width: 100, height: 50},
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 15,
        flexDirection: 'row',
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '35%',
          height: '100%',
          justifyContent: 'center',
          //   backgroundColor: 'yellow',
          alignItems: 'center',
        }}>
        <Image
          style={{width: '90%', height: '90%', borderRadius: 15}}
          source={require('../../../assets/pngs/buyCarImage.jpg')}
        />
      </View>
      <View
        style={{
          //   flexDirection: 'row',
          width: '65%',
          height: '100%',

          //   backgroundColor: 'teal',
          //   alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <View style={{height: 10}}></View>
        <Text style={{color: primary, fontWeight: 'bold'}}>
          Tata Aig insurance
        </Text>
        <Text style={{color: text}}>
          Lorem Ipsum is simply dummy text of the printing.
        </Text>
        <View style={{height: 10}}></View>

        <LinearGradientWrapper
          style={{
            width: '50%',
            height: 30,
            borderRadius: 20,
            alignSelf: 'flex-end',
            marginRight: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          right={true}>
          <TouchableOpacity
            onPress={() => navigation.navigate('InsuranceComprehensive')}
            style={{
              height: '100%',
              width: '100%',

              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 12}}>Explore Now</Text>
          </TouchableOpacity>
        </LinearGradientWrapper>
      </View>
    </View>
  );
};

export default InsuranceComponent;
