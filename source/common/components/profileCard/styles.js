import {StyleSheet} from 'react-native';
import {
  text,
  placeholderBlack,
  primaryLight,
  primaryDark,
} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    height: 94,
    width: '100%',
    elevation: 2,
    shadowRadius: 8,
    shadowOpacity: 1,
    marginBottom: 15,
    shadowColor: '#000',
    flexDirection: 'row',
    shadowOffset: {width: 0, height: 0},
  },
  image: {
    width: 80,
    height: 94,
    resizeMode: 'cover',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  textView: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  service: {
    color: text,
    fontSize: 14,
    marginBottom: 3,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  name: {
    color: text,
    fontSize: 12,
    textTransform: 'capitalize',
  },
  endView: {
    padding: 15,
    marginLeft: 'auto',
    // alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  seeDetails: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: primaryDark,
  },
  bookNow: {
    fontSize: 13,
    fontWeight: '500',
    color: primaryDark,
  },
});
