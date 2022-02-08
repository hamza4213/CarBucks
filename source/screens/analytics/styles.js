import {Dimensions, StyleSheet} from 'react-native';
import {primaryDark, text} from '../../common/constants/colors';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  contentContainer: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    marginTop: -20,
    backgroundColor: 'white',
    height: height,
    paddingHorizontal: 20,
  },
});
