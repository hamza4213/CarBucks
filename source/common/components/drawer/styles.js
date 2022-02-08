import {Dimensions, StyleSheet} from 'react-native';
import {
  primaryDark,
  primaryLight,
  text,
  textDark,
} from '../../constants/colors';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  drawer: {
    // width: 250,
    height: '100%',
    marginRight: 0,
    backgroundColor: 'white',
  },
  logoView: {
    alignItems: 'center',
    // backgroundColor: 'green',
    marginTop: 50,
  },
  underline: {
    height: 2,
    backgroundColor: text,
    width: 175,
  },
  tabsView: {
    marginTop: 30,
  },
  bottomTab: {
    height: 55,
    width: '100%',
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  socilaIcons: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  whiteLogo: {
    flex: 1,
    // marginLeft: 20,
    alignItems: 'center',
  },

  cardsContainer: {
    height: 60,
    marginTop: 20,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  dropDown: {
    marginTop: 20,
    width: 140,
    marginRight: 20,
    marginLeft: 'auto',
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: text,
    padding: 10,
  },
  walletView: {
    width: 25,
    height: 25,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primaryDark,
  },
  amountWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  amount: {
    // fontSize: 16,
    fontWeight: '600',
    color: text,
  },
  cardImage: {
    height: 12,
    width: 12,
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

  buttonsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 40,
    marginHorizontal: 10,
    height: 35,
  },

  tabs: {
    height: 35,
    marginTop: 40,
    flexDirection: 'row',
    // marginHorizontal: 10,
    marginHorizontal: 10,
    justifyContent: 'space-between',

    // width: '100%',
    backgroundColor: 'white',
    // elevation: 2,
    // shadowRadius: 8,
    // shadowOpacity: 1,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 0},
  },
  tab: {
    flex: 0.3,
    // flex: 1,
    height: '100%',
    // width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: text,
  },
  focusedTab: {
    backgroundColor: primaryDark,
    color: 'white',
    flex: 0.3,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  tabText: {
    // color: textDark,
    fontSize: 10,
    color: primaryDark,
  },
  ActiveTabText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 10,
  },
});
