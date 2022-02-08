import {Dimensions, StyleSheet} from 'react-native';
import {
  text,
  addressColor,
  primaryLight,
  primaryDark,
} from '../../common/constants/colors';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  contentContainer: {
    height,
    backgroundColor: 'white',
    marginTop: -20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  imageContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  mb20: {
    marginBottom: 20,
  },
  mt20: {
    marginTop: 20,
  },
  image: {
    height: 160,
    width: 160,
    borderRadius: 20,
  },

  inputContainer: {
    paddingTop: 30,
    width: '100%',
  },
  profileNameContainer: {
    alignItems: 'center',
    marginTop: 25,
  },
  profileName: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});
