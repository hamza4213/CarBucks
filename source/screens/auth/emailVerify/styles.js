import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {StyleSheet, Dimensions} from 'react-native';
import {primaryDark, text, textDark} from '../../../common/constants/colors';

const Colors = {
  primary: '#2E3192',
  screenPrimaryBg: '#F4F5F7',
  secondary: '#F78B2C',
  textPrimary: '#FFFFFF',
  textSecondary: '#0F1E3D',
  form: 'rgba(255,255, 255,0.25)',
  formSecondary: '#EFEFEF',
  outline: '#707070',
  facebook: '#3A559F',
  googlePlus: '#D63C27',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#ABABAB',
  green: '#4BB543',
  red: 'red',
  modalBg: 'rgba(0, 0, 0, 0.4)',
};

const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
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
  contentContainer: {
    paddingHorizontal: 20,
    marginTop: -28,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backgroundColor: 'white',
    height: '100%',
    paddingBottom: 30,
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
  // contentContainer: {
  //   alignSelf: 'center',
  //   width: '85%',
  //   marginTop: responsiveHeight(20),
  // },
  enterCodeText: {
    alignSelf: 'center',
    color: Colors.white,
    marginBottom: responsiveHeight(2),
    fontSize: responsiveFontSize(2.2),
    textAlign: 'center',
  },
  codeInputWrapper: {
    alignSelf: 'center',
    width: '100%',
    marginTop: responsiveHeight(5),
    marginBottom: responsiveHeight(5),
  },
  codeFieldRoot: {},
  cell: {
    width: responsiveWidth(12),
    height: responsiveHeight(6),
    fontSize: responsiveFontSize(2),
    borderWidth: StyleSheet.hairlineWidth,
    // borderColor: Colors.form,
    borderColor: textDark,
    textAlign: 'center',
    textAlignVertical: 'center',
    // color: Colors.white,
    borderRadius: responsiveWidth(50) / 50,
    backgroundColor: Colors.form,
  },
  focusCell: {
    borderColor: primaryDark,
    backgroundColor: text,
  },
  byClickingText: {
    textAlign: 'center',
    fontSize: responsiveFontSize(1.8),
    color: Colors.white,
  },
  continueBtnContainer: {
    marginBottom: responsiveHeight(5),
  },
  tAdndCTextWrapper: {
    alignSelf: 'center',
    marginBottom: responsiveHeight(15),
  },
  underlineTextBtn: {
    color: Colors.secondary,
    fontSize: responsiveFontSize(1.8),
    textDecorationLine: 'underline',
  },
  andText: {
    color: Colors.white,
    fontSize: responsiveFontSize(1.8),
    marginHorizontal: responsiveWidth(1),
  },
  cantReceiveTextWrapper: {
    alignSelf: 'center',
  },
  cantReceiveText: {
    color: Colors.white,
    fontSize: responsiveFontSize(1.8),
    marginRight: responsiveWidth(1),
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
    height: height * 0.9,
    paddingTop: 20,
    // top: height - height * 0.75,
    // position: 'absolute',
  },
  // contentContainer: {
  //   paddingLeft: 15,
  //   paddingRight: 15,
  //   height: '100%',
  //   alignItems: 'center',
  //   // justifyContent: 'center',
  // },
  heading: {
    // width,
    fontSize: 36,
    // color: 'white',
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
  },
  yesIAgree: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
  termsAndConditions: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  signupButton: {
    marginTop: 15,
    marginBottom: 30,
  },
});
