import {StyleSheet} from 'react-native';
import {primaryDark, text} from '../../common/constants/colors';

export default StyleSheet.create({
  contentContainer: {
    marginTop: -20,
    zIndex: 99,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    // height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  resultTop: {
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  filter: {
    color: '#8392A5',
  },
  mainHeading: {
    color: '#1C2D41',
    fontSize: 16,
    fontWeight: '500',
  },
});
