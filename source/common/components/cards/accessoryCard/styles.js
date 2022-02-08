import {StyleSheet} from 'react-native';
import {primaryDark, text} from '../../../constants/colors';

export default StyleSheet.create({
  accessoryContainer: {
    marginHorizontal: 10,
    marginTop: 10,
    width: '45%',
    // flex: 1,
    padding: 10,
    elevation: 2,
    shadowRadius: 8,
    shadowOpacity: 1,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
  },
  touchable: {
    flex: 1,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 'auto',
    color: primaryDark,
  },
  productName: {
    paddingLeft: 2,
    fontWeight: '600',
    marginTop: 5,
  },
  companyName: {
    color: text,
  },
  exploreBtn: {
    height: 25,
    width: 90,
    marginTop: 20,
    marginLeft: 'auto',
  },
  exploreText: {
    fontSize: 12,
    fontWeight: '500',
  },
  bookNow: {
    marginTop: 10,
    color: primaryDark,
    marginLeft: 'auto',
  },

  image: {
    resizeMode: 'contain',
  },
  textColor: {
    fontSize: 12,
    fontWeight: '600',
  },
  description: {
    fontSize: 12,
    textAlign: 'justify',
  },
});
