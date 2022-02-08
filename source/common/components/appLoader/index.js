import React from 'react';
import {StyleSheet} from 'react-native';
import {primaryDark} from '../../constants/colors';
import Spinner from 'react-native-loading-spinner-overlay';

export default function AppLoader({textContent = ''}) {
  return (
    <Spinner
      visible={true}
      animation="fade"
      textContent={textContent}
      textStyle={styles.textStyle}
      overlayColor="rgba(0, 0, 0, 0.5)"
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: '400',
    color: 'white',
    marginTop: -50,
  },
});
