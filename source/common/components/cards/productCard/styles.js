import { StyleSheet } from 'react-native';
import { wp } from '../../../../utils/helper';
import colors, { primaryDark, text } from '../../../constants/colors';

export default StyleSheet.create({
  cardContainer: {

    width: "45%",
    height: 200,
    margin: 10
  },
  productContainer: {

    flex: 1,
    // flex: 1,
    padding: 10,
    elevation: 2,
    shadowRadius: 8,
    shadowOpacity: 0.3,

    shadowColor: '#000',
    backgroundColor: "#FFF",
    shadowOffset: { width: 0, height: 0 },
  },
  imageContainer: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    color: primaryDark,
    marginLeft: 'auto',
    fontSize: 18,
    fontWeight: '600',
  },
  productName: {
    fontWeight: '600',
  },
  companyName: {
    color: text,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  bookNow: { color: colors.textBlack, fontFamily: "Poppins-Regular", fontSize: 10 },
  image: {
    resizeMode: 'contain',
    alignSelf: "center",
    flex: 1
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
