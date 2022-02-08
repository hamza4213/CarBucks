import {StyleSheet} from 'react-native';
import {primaryDark, text} from '../../../common/constants/colors';

export default StyleSheet.create({
  dateContainer: {
    width: 40,
    height: 70,
    marginRight: 15,
    backgroundColor: text,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 5,
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
  day: {
    fontSize: 12,
    fontWeight: '400',
  },
  date: {
    fontSize: 14,
    fontWeight: '500',
  },
});
