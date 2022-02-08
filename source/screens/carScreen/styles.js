import {StyleSheet, Dimensions} from 'react-native';
import {
  lightPlaceHolder,
  primaryDark,
  primaryLight,
} from '../../common/constants/colors';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  contentContainer: {
    flex: 1,
    height: '100%',
    paddingTop: 20,
    backgroundColor: 'white',
    marginTop: -(height * 0.01),
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },

  contentWrapper: {
    marginTop: -130,
  },
  profileContainer: {
    width: '100%',
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  starWrapper: {
    flexDirection: 'row',
  },
  imageView: {
    width: 130,
    height: 130,
    overflow: 'hidden',
  },
  userContainer: {
    flexDirection: 'row',
    zIndex: 99,

    marginHorizontal: 20,
  },
  addressUserContainer: {
    flexDirection: 'row',
    zIndex: 99,
    alignItems: 'center',
  },
  chatWrapper: {
    width: 80,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  aboutContainer: {
    marginLeft: 10,
  },
  userPrice: {
    color: 'red',
    fontWeight: 'bold',
  },
  addressAboutContainer: {
    marginLeft: 10,
    flexGrow: 1,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  headerImage: {
    width: 60,
    height: 60,
    marginRight: 20,
    borderRadius: 30,
  },
  detailContainer: {
    marginTop: 10,
  },
  detailHeading: {
    padding: 10,
    fontWeight: 'bold',
  },
  detailInnerContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  notesIconsContiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notesIcon: {
    width: 2,
    backgroundColor: 'red',
  },
  detailIcon: {
    color: 'red',
    width: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  addressUserName: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
  occupation: {
    fontSize: 14,
    color: 'white',
  },
  addressUserOccupation: {
    fontSize: 14,
    color: 'gray',
  },
  addressReviewCountWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatWrapper: {
    width: 80,
    borderRadius: 10,
    marginTop: 10,
  },
  chat: {
    color: 'white',
    textAlign: 'center',
    borderRadius: 10,

    borderWidth: 1,
    borderColor: 'white',
  },
  viewProfileContainer: {
    marginLeft: 'auto',
    paddingTop: 20,
  },
  viewProfileText: {
    color: 'white',
    fontSize: 12,
    marginTop: 'auto',
  },

  entryWrapper: {
    // display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileDetailsContainer: {
    marginTop: 30,
  },

  service: {
    fontWeight: '400',
    fontSize: 18,
    color: '#6A6A6A',
  },

  role: {
    color: '#B1B1B1',
    fontSize: 16,
  },
  servicePrice: {
    color: primaryLight,
    fontWeight: '700',
    fontSize: 20,
  },
  mapImages: {
    resizeMode: 'contain',
    width: '100%',
  },
  imageContainer: {
    marginTop: 10,
  },
  personAvailabilityContainer: {
    // padding: 8,
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
  },

  personAvailabilityWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    height: 18,
    width: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  personName: {
    marginLeft: 10,
  },
  rate: {
    fontWeight: '500',
    fontSize: 14,
  },
  payContainer: {
    // backgroundColor: 'lightgreen',
    marginTop: 30,
  },
  payDiscount: {
    fontSize: 18,
    color: '#6A6A6A',
  },
  tenPercent: {
    color: primaryLight,
    fontWeight: '700',
  },
  paymentOptions: {
    // backgroundColor: 'tomato',
    marginTop: 20,
    paddingLeft: 10,
  },
  payCash: {
    marginTop: 20,
  },
  bookNowButton: {
    borderWidth: 1,
    borderColor: primaryDark,
    borderRadius: 5,
    // padding: 8,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  bookNow: {
    fontSize: 14,
    color: primaryDark,
  },
  feedback: {
    height: 150,
    padding: 20,
    width: '100%',
    borderRadius: 20,
    textAlignVertical: 'top',
    backgroundColor: lightPlaceHolder,
  },
  dAndT: {
    marginTop: 25,
    fontSize: 18,
    fontWeight: '600',
  },
  dAndTContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  arrow: {
    marginTop: 12,
    marginLeft: 8,
  },
  addressInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'white',
    marginTop: 15,
  },
  adressInput: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    color: 'white',
  },
  addressInputHeading: {
    color: 'white',
    paddingHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 15,
  },
});
