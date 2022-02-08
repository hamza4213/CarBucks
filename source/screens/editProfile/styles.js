import {StyleSheet, Dimensions} from 'react-native';
import {
  primary,
  primaryDark,
  primaryLight,
} from '../../common/constants/colors';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  logoContainer: {
    marginTop: 45,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 38,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '600',
  },

  contentContainer: {
    paddingHorizontal: 50,
    marginTop: -28,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backgroundColor: 'white',
    height: height,
  },
  heading: {
    width: '100%',
    fontSize: 36,
    color: 'white',
    marginBottom: 25,
    fontWeight: '700',
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 40,
  },
  mb20: {
    marginBottom: 20,
  },
  authBtn: {
    width: '100%',
    paddingVertical: 15,
    marginTop: 20,
  },
  authTxt: {
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
