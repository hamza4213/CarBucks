import {StyleSheet} from 'react-native';
import {
  primaryLight,
  text,
  lightPlaceHolder,
  primaryDark,
} from '../../common/constants/colors';
export default StyleSheet.create({
  contentContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  image: {
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 200,
    width: 300,
    resizeMode: 'contain',
  },
  thankYouText: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 34,
    marginTop: 20,
    color: primaryDark,
  },
  starWrapper: {
    flexDirection: 'row',
    marginTop: 15,
  },
  experiance: {
    fontSize: 24,
    color: text,
    marginTop: 18,
  },
  feedback: {
    backgroundColor: lightPlaceHolder,
    height: 150,
    padding: 20,
    width: '100%',
    textAlignVertical: 'top',
    borderRadius: 20,
    marginTop: 20,
  },
  sendButton: {
    width: 150,
    height: 35,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    marginBottom: 30,
  },
});
