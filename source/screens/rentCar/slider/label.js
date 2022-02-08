import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Label = ({text, ...restProps}) => {
  return (
    <View style={styles.root} {...restProps}>
      <Text style={styles.text}>${text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    color: '#E20001',
  },
});

export default memo(Label);
