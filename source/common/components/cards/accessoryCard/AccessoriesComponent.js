import {View, Text} from 'react-native';
import React from 'react';

const AccessoriesComponent = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 130,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowOffset: {width: 100, height: 100},
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
          justifyContent: 'space-between',
          backgroundColor: 'green',
        }}></View>
    </View>
  );
};

export default AccessoriesComponent;
