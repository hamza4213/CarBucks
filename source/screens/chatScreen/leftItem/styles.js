import {StyleSheet, Dimensions} from 'react-native';
import {lightGrayBg, text} from '../../../common/constants/colors';
const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  welcomeMsg: {
    width: '75%',
    marginTop: 30,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomEndRadius: 10,
    backgroundColor: lightGrayBg,
  },
  msgTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: '500',
    fontSize: 13,
    color: '#F2994A',
  },
  user: {
    color: text,
  },
  msgTxt: {
    color: '#1B1A57',
  },
  time: {
    color: text,
    marginLeft: 'auto',
  },
});
