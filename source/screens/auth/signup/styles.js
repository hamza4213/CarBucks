import {StyleSheet, Dimensions} from 'react-native';
import {primary, primaryDark, text} from '../../../common/constants/colors';

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
  createAccountTxt: {
    color: primaryDark,
    textDecorationLine: 'underline',
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 20,
  },

  fullScreen: {
    height,
    // width,
    backgroundColor: 'white',
  },
  header: {
    // width,
    alignItems: 'center',
    height: height * 0.25,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  container: {
    resizeMode: 'contain',
    height: height,
    paddingTop: 20,
    // top: height - height * 0.75,
    // position: 'absolute',
  },
  forgotPasswordWrapper: {
    marginTop: 15,
  },
  forgotPasswordText: {
    color: 'white',
  },
  contentContainer2: {
    paddingLeft: 15,
    paddingRight: 15,
    height: '100%',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  heading: {
    width,
    fontSize: 36,
    color: 'white',
    marginBottom: 25,
    fontWeight: '700',
    textAlign: 'center',
  },
  mb20: {
    marginBottom: 20,
  },

  termsAndConditionsTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  yesIAgree: {
    // color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
  termsAndConditions: {
    fontSize: 16,
    fontWeight: 'bold',
    // color: 'white',
  },
  signupButton: {
    marginTop: 15,
  },
  formInputsWrapper: {
    minHeight: 60,
    width: '100%',
    borderWidth: 1,
    paddingEnd: 30,
    paddingStart: 30,
    borderRadius: 30,
    borderColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  menu: {
    width: '100%',
  },
  optionsDivider: {
    borderBottomWidth: 1,
  },
  CountryPicker: {
    width: '100%',
    // backgroundColor: 'teal',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: text,
    marginBottom: 20,
  },
});
