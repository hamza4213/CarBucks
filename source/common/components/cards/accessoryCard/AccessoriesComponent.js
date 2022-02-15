import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors, {primaryDark, text} from '../../../constants/colors';
import LinearGradientWrapper from '../../LinearGradientWrapper';
const AccessoriesComponent = () => {
  const Images = [
    require('../../../../assets/pngs/accessoryImg.png'),
    require('../../../../assets/pngs/accessoryImg.png'),
    require('../../../../assets/pngs/accessoryImg.png'),
    require('../../../../assets/pngs/accessoryImg.png'),
  ];
  return (
    <View
      style={{
        width: '100%',
        height: 130,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowOffset: {width: 50, height: 100},
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 2,
        alignItems: 'center',
      }}>
      <View
        style={{
          height: '60%',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          //   backgroundColor: 'green',
          marginTop: 5,
        }}>
        <Image
          style={{height: '100%', width: '30%', borderRadius: 10}}
          source={require('../../../../assets/pngs/accessoryImage.jpg')}
        />
        <View style={{width: '50%', height: '100%', justifyContent: 'center'}}>
          <Text
            style={{
              color: primaryDark,
              fontWeight: 'bold',
              fontFamily: 'Poppins-Regular',
            }}>
            Car MArt
          </Text>
          <Text style={{color: text, fontSize: 12}}>
            Lorem Ipsum is simply dummy text of the printing.
          </Text>
        </View>
      </View>
      <View
        style={{
          //   backgroundColor: 'black',
          height: '40%',
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '60%',
            height: '100%',
            // backgroundColor: 'teal',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          {Images.map((item, index) => (
            <View
              style={{
                width: 35,
                height: '70%',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: text,
                justifyContent: 'center',
                alignItems: 'center',
                // padding: 20,
              }}>
              <Image source={item} style={{height: '80%', width: '80%'}} />
            </View>
          ))}
        </View>
        <View
          style={{
            width: '40%',
            height: '60%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <LinearGradientWrapper
            style={{
              height: '100%',
              width: '70%',
              alignSelf: 'center',
              borderRadius: 20,
            }}>
            <TouchableOpacity
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff', fontSize: 12}}>Explore Now</Text>
            </TouchableOpacity>
          </LinearGradientWrapper>
        </View>
      </View>
    </View>
  );
};

export default AccessoriesComponent;
