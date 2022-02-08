import {StyleSheet, Dimensions} from 'react-native';
import {lightPlaceHolder, primaryLight} from '../../common/constants/colors';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  contentContainer: {
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
    height: '100%',
  },
  userContainer: {
    flex: 1,
    zIndex: 99,
    top: height * 0.12,
    position: 'absolute',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  image: {
    width: 104,
    height: 110,
    borderRadius: 15,
  },
  name: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
    lineHeight: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  occupation: {
    fontSize: 13,
    color: 'white',
    fontFamily: 'Poppins',
    textTransform: 'capitalize',
  },
  chatWrapper: {
    width: 80,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  chat: {
    color: 'white',
    textAlign: 'center',
    borderRadius: 10,
    fontFamily: 'Poppins',
    borderWidth: 1,
    borderColor: 'white',
  },
  viewProfileContainer: {
    flex: 1,
    paddingLeft: 2,
    justifyContent: 'center',
  },
  viewProfileText: {
    fontSize: 12,
    color: 'white',
    fontWeight: '500',
  },
  profile: {
    paddingHorizontal: 15,
    height: 50,
    justifyContent: 'center',
    marginTop: 15,
  },
  reviewCountWrapper: {
    flexDirection: 'row',
  },
  starWrapper: {
    flexDirection: 'row',
    paddingTop: 4,
  },
  reviewCount: {
    marginLeft: 5,
    fontSize: 12,
  },

  availableServices: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  serviceWrapper: {
    flexDirection: 'row',
    marginBottom: 8,
    width: '45%',
  },
  nextBtn: {
    height: 50,
    marginTop: height * 0.22,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: '600',
  },

  entryWrapper: {
    // display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileDetailsContainer: {
    marginTop: 30,
  },
  detailWrapper: {
    paddingHorizontal: 15,
  },
  desHeading: {
    fontSize: 16,
    fontWeight: '500',
  },
  detailText: {
    fontSize: 12,
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
    borderColor: primaryLight,
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
    color: primaryLight,
  },
  feedback: {
    height: 150,
    padding: 20,
    width: '100%',
    borderRadius: 20,
    textAlignVertical: 'top',
    backgroundColor: lightPlaceHolder,
  },
});
