import {Dimensions, StyleSheet} from 'react-native';
import {primaryDark, text, textDark} from '../../common/constants/colors';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  contentContainer: {
    marginTop: -20,
    zIndex: 99,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  imageContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    marginTop: -90,
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    resizeMode: 'contain',
    marginTop: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    fontWeight: '300',
    color: text,
  },

  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  oldPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  price: {
    textDecorationLine: 'line-through',
    color: primaryDark,
    fontSize: 18,
    fontWeight: '700',
  },
  newPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: 'green',
  },
  priceBtn: {
    width: 180,
    height: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
    marginTop: 15,
  },
  priceText: {
    fontSize: 20,
    fontWeight: '600',
  },
  descText: {
    marginTop: 30,
    fontSize: 16,
    color: text,
    borderBottomWidth: 1,
    paddingBottom: 13,
  },
  itemsCountContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  divider: {
    width: 5,
    height: 35,
    backgroundColor: 'black',
  },
  product: {
    flex: 1,
  },
  minusView: {
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  plusView: {
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  countContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  countText: {
    fontSize: 36,
    fontWeight: '700',
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontWeight: '600',
    fontSize: 18,
    color: primaryDark,
  },
  buyBtn: {
    marginTop: height * 0.13,
    marginBottom: 30,
    height: 50,
  },
  disableBtn: {
    color: textDark,
    fontWeight: '500',
    fontSize: 24,
  },
  buyText: {
    fontWeight: '500',
    fontSize: 24,
  },
  outOfStock: {
    marginTop: 8,
    textAlign: 'right',
    marginRight: 10,
    color: primaryDark,
  },
});
