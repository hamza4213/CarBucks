import {StyleSheet} from 'react-native';
import {primaryDark, text} from '../../constants/colors';

export default StyleSheet.create({
  Description: {
    color: '#B1B1B1',
  },
  imageContainer: {
    backgroundColor: '#F7F7F7',
    padding: 10,
    marginTop: 20,
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
});
