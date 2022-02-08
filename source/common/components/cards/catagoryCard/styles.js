import {StyleSheet} from 'react-native';
import {primaryDark, text, textDark} from '../../../constants/colors';

export default StyleSheet.create({
  accessoryContainer: {
    flex: 1,
    elevation: 2,
    shadowRadius: 8,
    shadowOpacity: 1,
    marginBottom: 10,
    paddingVertical: 10,
    shadowColor: '#000',
    flexDirection: 'row',
    paddingHorizontal: 15,
    shadowOffset: {width: 0, height: 0},
  },
  categoryImg: {
    flex: 1,
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  detailContainer: {
    flex: 2,
    justifyContent: 'space-between',
  },
  textContainer: {
    marginLeft: 14,
  },
  catName: {
    fontSize: 14,
    fontWeight: '500',
  },
  reviewText: {
    fontSize: 10,
    fontWeight: '500',
    color: 'blue',
  },
  addressTxt: {
    color: textDark,
    fontSize: 12,
  },
  hart: {
    marginLeft: 'auto',
    marginTop: 10,
  },
  price: {
    color: primaryDark,
    marginLeft: 'auto',
    fontSize: 18,
    fontWeight: '600',
  },
  productName: {
    fontWeight: '600',
    marginVertical: 5,
    flex: 0.35,
  },
  companyName: {
    fontWeight: '600',
    color: text,
  },
  CTA: {
    width: 90,
    height: 35,
    borderRadius: 5,
    marginLeft: 'auto',
  },
  ctaText: {
    fontSize: 10,
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
  reviewContainer: {
    flexDirection: 'row',
  },

  star: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 3,
  },
  orderTxt: {
    fontSize: 12,
    color: textDark,
  },
  availableTxt: {
    fontWeight: 13,
    color: primaryDark,
    fontWeight: '500',
  },
});
