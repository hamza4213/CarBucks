import {StyleSheet} from 'react-native';
import {textDark} from '../../common/constants/colors';

export default StyleSheet.create({
  contentContainer: {
    marginTop: -35,
    backgroundColor: 'white',
    height: '100%',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 5,
  },
  cardView: {
    marginTop: 30,
    padding: 20,
    // borderRadius: 20,
  },
  addCardWrapper: {
    marginTop: 40,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  inputView: {
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    color: textDark,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: textDark,
  },
  expiryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expiry: {
    width: 70,
  },
  cvv: {
    // marginLeft: 'auto',
    width: 70,
  },
  saveCard: {
    fontSize: 10,
    textAlign: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: textDark,
  },
  payButton: {
    height: 50,
    marginTop: 40,
    marginBottom: 30,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: '500',
  },
  centeredInput: {
    textAlign: 'center',
  },
});
