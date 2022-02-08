import React from 'react';
import { View, Text, Image } from 'react-native';
import FOLDER from '../../../assets/pngs/folder.png';

export default function NotFound({ text, style, marginTop }) {
  return (
    <View style={[{ justifyContent: 'center', alignItems: 'center', marginTop }, style]}>
      <Image source={FOLDER} style={{ height: 30, width: 30 }} />
      <Text style={{ fontSize: 13, marginTop: 4 }}>
        {!text || text === '' ? 'No Data Found.' : text}
      </Text>
    </View>
  );
}
