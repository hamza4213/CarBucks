import {StyleSheet} from 'react-native';
import {primaryDark, text} from '../../../common/constants/colors';

export default StyleSheet.create({
  timeContainer: {
    // marginLeft: 20,
  },
  timeWrapper: {
    height: 30,
    width: 65,
    backgroundColor: text,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  time: {
    fontWeight: '600',
    marginVertical: 20,
  },
  bgGray: {
    backgroundColor: '#EDEDED',
  },
  bgActive: {
    backgroundColor: primaryDark,
  },
  timeText: {
    color: 'white',
  },
});
