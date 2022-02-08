import {StyleSheet} from 'react-native';
import {primaryLight, text} from '../../../constants/colors';

export default StyleSheet.create({
  tabContainer: {
    height: 60,
    width: '100%',
    // backgroundColor: primaryLight,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  tabContainerInActve: {
    height: 60,
    width: '100%',
    // backgroundColor: primaryLight,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  textInActive: {
    textTransform: 'uppercase',
    fontWeight: '500',
    color: text,
  },
  iconView: {
    width: 50,
    alignItems: 'center',
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: '500',
    color: 'white',
  },
});
