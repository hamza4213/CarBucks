import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors, {text, primaryDark} from '../../../constants/colors';
import LinearGradientWrapper from '../../LinearGradientWrapper';
import {useNavigation} from '@react-navigation/native';
const CompanyAccessoryComponent = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: '40%',
        height: 140,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 15,
        shadowOffset: {width: 100, height: 50},
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 15,
      }}>
      <View
        style={{
          height: '40%',
          width: '90%',
          //   backgroundColor: '#000',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
          marginTop: 5,
        }}>
        <Image
          source={require('../../../../assets/pngs/buyCarImage.jpg')}
          style={{height: '100%', width: '40%'}}
        />
        <View
          style={{
            height: '100%',
            width: '60%',
            // backgroundColor: 'yellow',
          }}>
          <Text style={{alignSelf: 'flex-end', color: primaryDark}}>$ 50</Text>
          <Text style={{alignSelf: 'flex-end'}}>Company</Text>
        </View>
      </View>
      <Text style={{fontSize: 12, alignSelf: 'center', color: text}}>
        Lorem Ipsum is simply dummy text of the printing.
      </Text>
      <LinearGradientWrapper
        style={{
          alignSelf: 'flex-end',
          height: '20%',
          width: '60%',
          borderRadius: 15,
          marginRight: 5,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AccessoriesDetails')}
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 12}}>Add to Cart</Text>
        </TouchableOpacity>
      </LinearGradientWrapper>
    </View>
  );
};

export default CompanyAccessoryComponent;
