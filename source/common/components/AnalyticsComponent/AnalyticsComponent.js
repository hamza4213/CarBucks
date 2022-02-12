import {View, Text} from 'react-native';
import React from 'react';
import colors, {
  primaryDark,
  primaryLight,
  darkOrange,
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
            backgroundColor:
              index === 0 ? colors.completedGreenLight : darkOrange,
          }}></View>
        {index === 0 || index === 1 ? (
          <Text
            style={{
              fontSize: 18,
              color: index === 0 ? colors.completedGreenLight : darkOrange,
            }}>
            $ {item.earnings}
          </Text>
        ) : (
          <Text
            style={{
              fontSize: 18,
              color: index === 0 ? colors.completedGreenLight : darkOrange,
            }}>
            {item.earnings}
          </Text>
        )}
      </View>
      <Text style={{alignSelf: 'center'}}>Total Wallet Balance</Text>
    </View>
  );
};

export default AnalyticsComponent;
