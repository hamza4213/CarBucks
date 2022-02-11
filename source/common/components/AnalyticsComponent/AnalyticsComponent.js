import {View, Text} from 'react-native';
import React from 'react';
import colors, {
  primaryDark,
  primaryLight,
  text,
} from '../../../common/constants/colors';
const AnalyticsComponent = props => {
  const {item, index} = props;
  return (
    <View
      style={{
        width: '45%',
        height: 70,
        backgroundColor: '#fff',
        marginTop: 20,
        // alignItems: 'center',
        borderRadius: 10,
        shadowOffset: {width: 100, height: 50},
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '70%',
          height: '50%',
          paddingLeft: 20,
          justifyContent: 'space-evenly',
          // backgroundColor: 'yellow',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 20,
            backgroundColor: colors.completedGreenLight,
          }}></View>
        <Text style={{fontSize: 18, color: colors.completedGreenLight}}>
          $ {item.earnings}
        </Text>
      </View>
      <Text style={{alignSelf: 'center'}}>Total Wallet Balance</Text>
    </View>
  );
};

export default AnalyticsComponent;
