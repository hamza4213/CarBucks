import {StyleSheet, Dimensions} from 'react-native';
import {primaryDark, text, textDark} from '../../common/constants/colors';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  contentContainer: {
    marginTop: -18,
    height: '100%',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    width: '100%',
    height: height - height * 0.2,
    position: 'absolute',
    top: height * 0.1,
  },
  Description: {
    color: '#B1B1B1',
  },
  imageContainer: {
    backgroundColor: '#F7F7F7',
    padding: 10,
    marginTop: 20,
    marginTop: -90,
    flexDirection: 'row',
  },
  border: {
    marginTop: 25,
    marginBottom: 25,
    borderBottomColor: '#B1B1B1',
    borderWidth: 1,
  },
  image: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    resizeMode: 'contain',
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  imgView: {
    height: 112,
    width: 119,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  descriptionView: {flex: 2, paddingHorizontal: 10},
  title: {
    lineHeight: 27,
    fontSize: 18,
    fontWeight: '600',
  },
  descText: {
    marginTop: 30,
    fontSize: 16,
    color: text,
    borderBottomWidth: 1,
    paddingBottom: 13,
  },
  cartFooter: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },

  minusView: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusView: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  countContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  countText: {
    fontSize: 18,
    // lineHeight: 28,
    fontWeight: '700',
  },
  totalTitle: {
    fontSize: 18,
    color: '#6B6B6B',
  },
  itemPrice: {
    fontWeight: '600',
    fontSize: 18,
    color: primaryDark,
  },
  totalTitle2: {
    fontSize: 12,
    color: '#6B6B6B',
  },
  itemPrice2: {
    fontWeight: '600',
    fontSize: 12,
    color: primaryDark,
  },
  deliveryView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buyBtn: {
    marginTop: 40,
    marginBottom: 30,
    height: 50,
  },
  buyText: {
    fontWeight: '500',
    fontSize: 24,
  },
  productCartFooter: {
    flexDirection: 'row',
    marginTop: 'auto',
  },
  descriptionViewHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  detailContainer: {
    marginTop: 10,
  },
  addressInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'gray',
    marginTop: 5,
  },
  adressInput: {
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  addressBtn: {
    width: 120,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: textDark,
    backgroundColor: 'white',
  },
  addressTxt: {
    color: primaryDark,
  },
  radioContainer: {
    padding: 15,
    marginTop: 10,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  deliveryTxt: {
    color: textDark,
    fontSize: 15,
  },
  notFound: {
    height: 100,
    marginTop: height * 0.13,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
