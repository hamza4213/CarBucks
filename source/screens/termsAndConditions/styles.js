import {StyleSheet} from 'react-native';
import {grayText} from '../../common/constants/colors';

export default StyleSheet.create({
  contentContainer: {
    height: '100%',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginTop: -35,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  header: {
    height: 90,
  },
  title: {
    fontSize: 15,
  },
  description: {
    fontSize: 10,
    color: grayText,
  },
  termsSectionContainer: {
    paddingVertical: 15,
  },
});
