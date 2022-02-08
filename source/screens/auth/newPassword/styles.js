import {StyleSheet, Dimensions} from 'react-native';
import {primaryDark, primaryLight} from '../../../common/constants/colors';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  fullScreen: {
    flex: 1,
    // height,
    width: '100%',
    backgroundColor: 'white',
  },
  header: {
    // width,
    alignItems: 'center',
    height: height * 0.25 + 70,
    // justifyContent: 'center',
    paddingTop: height * 0.06,
    backgroundColor: primaryDark,
  },
  backImage: {
    width: '100%',
    height: 100,
    marginTop: -75,
  },
  container: {
    height: height * 0.75 - 70,
    // top: height - height * 0.75,
    // position: 'absolute',
  },
  contentContainer: {
    paddingTop: height * 0.05,
    paddingLeft: 15,
    paddingRight: 15,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    width,
    fontSize: 36,
    marginTop: -70,
    color: 'black',
    marginBottom: 25,
    fontWeight: '700',
    textAlign: 'center',
  },
  mb20: {
    marginBottom: 20,
  },
  forgotPasswordWrapper: {
    marginTop: 15,
  },
  dontHaveAccountWrapper: {
    marginTop: 'auto',
    marginBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dontHaveAccount: {
    fontSize: 16,
  },

  signUpText: {
    fontWeight: 'bold',
  },
});
