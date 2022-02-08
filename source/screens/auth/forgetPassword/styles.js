import {StyleSheet, Dimensions} from 'react-native';
import {primaryDark, primaryLight} from '../../../common/constants/colors';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 50,
    marginTop: -28,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backgroundColor: 'white',
    height: '100%',
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
  inputContainer: {
    marginTop: 40,
  },
  inputStyle: {
    marginBottom: 20,
  },
  authTxt: {
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  authBtn: {
    width: '100%',
    paddingVertical: 15,
    marginTop: 10,
  },
  loginTxt: {
    color: primaryDark,
    marginTop: 10,
    textAlign: 'center',
  },

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
  contentContainer2: {
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
    // marginTop: 'auto',
    // marginBottom: 40,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dontHaveAccount: {
    fontSize: 16,
    textAlign: 'center',
  },

  signUpText: {
    fontWeight: 'bold',
  },
});
