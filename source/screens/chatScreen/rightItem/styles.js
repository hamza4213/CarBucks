import {StyleSheet, Dimensions} from 'react-native';
import {darKGrayBg, lightGrayBg, text} from '../../../common/constants/colors';
const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  sentView: {
    width: '75%',
    marginTop: 10,
    marginLeft: 'auto',
    paddingHorizontal: 15,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    backgroundColor: darKGrayBg,
    borderBottomStartRadius: 10,
    paddingVertical: 10,
  },
  sentText: {
    color: 'white',
  },
  sentTime: {
    color: 'white',
    marginLeft: 'auto',
  },
});
