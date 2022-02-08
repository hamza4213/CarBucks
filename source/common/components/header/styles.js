import { StyleSheet, Dimensions, Platform } from 'react-native';
import { sHeight } from '../../../utils/helper';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: height * 0.25,
    paddingTop: Platform.OS === "ios" ? sHeight : 0,
  },
  smallContainer: {
    height: height * 0.14,
    paddingTop: Platform.OS === "ios" ? sHeight : 0,
  },
  leftIconWrapper: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  mt: {
    paddingTop: 7,
  },
});
