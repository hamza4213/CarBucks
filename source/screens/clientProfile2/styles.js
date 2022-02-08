import {StyleSheet, Dimensions} from 'react-native';
import {
  grayText,
  primaryDark,
  text,
  textDark,
} from '../../common/constants/colors';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  contentContainer: {
    height: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    marginTop: -20,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  profileContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: text,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
  },
  nameWrapper: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  nameTxt: {
    fontWeight: '700',
    fontSize: 16,
  },
  contactNoTxt: {
    color: text,
    fontSize: 13,
    fontWeight: '500',
    marginTop: 5,
  },
  more: {
    marginLeft: 'auto',
    height: 25,
    width: 25,
    marginRight: 10,
  },
  settingsTxt: {
    fontSize: 24,
    fontWeight: '700',
    color: textDark,
    marginTop: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: text,
    // paddingHorizontal: 10,
    // paddingVertical: 5,
    padding: 10,
    marginTop: 20,
    width: width / 2.4,
  },
  walletView: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primaryDark,
  },
  cardImage: {
    height: 20,
    width: 20,
  },
  iconView: {
    width: 25,
    height: 25,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E2E1E0',
  },
  cardText: {
    fontWeight: '600',
  },
  amountWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  amount: {
    fontSize: 16,
    fontWeight: '700',
    color: text,
  },
  tabsContainer: {
    marginTop: 15,
  },
  tabWrapper: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: text,
    paddingVertical: 14,
  },
  tabText: {
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 15,
  },
  tabIcon: {},
});
