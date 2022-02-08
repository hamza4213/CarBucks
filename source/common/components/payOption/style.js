import {StyleSheet, Dimensions} from 'react-native';

const {Height} = Dimensions.get('window');

export default StyleSheet.create({
  payWrapper: {
    flexDirection: 'row',
  },
  pay: {
    color: '#6C6C6C',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 10,
  },
});
