import {StyleSheet, Dimensions} from 'react-native';
import {darKGrayBg, lightGrayBg, text} from '../../common/constants/colors';
const {height} = Dimensions.get('window');

export default StyleSheet.create({
  contentContainer: {
    width: '100%',
    backgroundColor: 'white',
    marginTop: -20,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    height: height - 160,
    // justifyContent: 'center',
  },
  chatSection: {
    paddingHorizontal: 20,
  },
  viewBottom: {
    height: 90,
    width: '100%',
    marginTop: 'auto',
    borderTopWidth: 1,
    borderTopColor: text,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '67%',
  },
  ml10: {
    marginLeft: 8,
  },
});
