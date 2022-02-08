import {StyleSheet} from 'react-native';
import {text} from '../../common/constants/colors';

export default StyleSheet.create({
  headerContent: {
    marginHorizontal: 25,
  },
  walletText: {
    fontWeight: '500',
    color: 'white',
  },
  balance: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  addMoneyBtn: {
    paddingVertical: 10,
    marginTop: 2,
    backgroundColor: 'white',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '600',
  },
  contentContainer: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backgroundColor: 'white',
    marginTop: -18,
    height: '100%',
    paddingHorizontal: 20,
  },
  transactionTxt: {
    fontWeight: '700',
    fontSize: 20,
    marginTop: 20,
  },
  transactionContainer: {
    flexDirection: 'row',
    // backgroundColor: 'orange',
    marginTop: 20,
  },
  iconContainer: {
    borderWidth: 1,
    borderRadius: 5,
    height: 18,
    width: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginHorizontal: 10,
  },
  tranDesc: {
    fontWeight: '500',
  },
  time: {
    color: text,
  },
  priceContainer: {
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  price: {
    color: text,
    fontWeight: '500',
  },
});
