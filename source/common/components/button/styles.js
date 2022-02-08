import {Dimensions, StyleSheet} from 'react-native';
import {primaryLight} from '../../constants/colors';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  fullWidth: {
    width: '100%',
  },
  container: {
    height: 54,
    backgroundColor: primaryLight,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
});
