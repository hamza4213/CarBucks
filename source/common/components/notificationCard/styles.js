import { StyleSheet } from 'react-native';
import { text, placeholderBlack, primaryLight } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    height: 94,
    width: '100%',
    elevation: 2,
    shadowRadius: 8,
    shadowOpacity: 0.15, 
    shadowColor: '#000',
    flexDirection: 'row',
    shadowOffset: { width: 0, height: 0 },
    backgroundColor: "#FFF",

  },
  image: {
    width: 94,
    height: 94,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  textView: {
    marginLeft: 10,
    paddingTop: 20
  },
  msg: {
    color: text,
    fontSize: 12,
    marginBottom: 3,
    fontWeight: '500',
  },
  time: {
    color: text,
    fontSize: 12,
  },
  endView: {
    padding: 15,
    marginLeft: 'auto',
    justifyContent: 'center',
  },
  arrowWrapper: {
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: primaryLight,
  },
  bookNow: {
    fontSize: 13,
    fontWeight: '500',
    color: primaryLight,
  },
});
