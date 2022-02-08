import {StyleSheet, Dimensions} from 'react-native';
import {primaryLight} from '../../common/constants/colors';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 50,
    marginTop: -28,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backgroundColor: 'white',
    height: height,
    paddingBottom: 30,
  },
  authTitle: {
    color: 'white',
    fontSize: 38,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  logoContainer: {
    marginTop: 45,
    alignItems: 'center',
  },
  mt40: {
    marginTop: 40,
  },
  mb20: {
    marginBottom: 20,
  },
});
