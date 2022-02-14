import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradientWrapper from '../LinearGradientWrapper';
import colors, {primaryDark, primaryLight, text} from '../../constants/colors';
const InsuranceBuyButton = props => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: '10%',
        width: '100%',
        flexDirection: 'row',
        height: 80,
        // backgroundColor: '#000',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '40%',
          height: '80%',
          //   backgroundColor: 'yellow',
          justifyContent: 'center',
          //   alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 17}}>Total Premium</Text>
        <View
          style={{
            flexDirection: 'row',
            width: '65%',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: primaryLight}}>
            $ 100
          </Text>
          <Text style={{color: text, marginTop: 3, fontSize: 17}}>/year</Text>
        </View>
      </View>
      <LinearGradientWrapper
        style={{width: '50%', height: '70%', borderRadius: 20}}>
        <TouchableOpacity
          onPress={props.onPress}
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 17, color: '#fff'}}>Buy this Policy</Text>
        </TouchableOpacity>
      </LinearGradientWrapper>
    </View>
  );
};

export default InsuranceBuyButton;
