import {Dimensions, StyleSheet} from 'react-native';
import {
  text,
  addressColor,
  primaryLight,
  primaryDark,
} from '../../common/constants/colors';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  contentContainer: {
    height: '100%',
    backgroundColor: 'white',
    marginTop: -35,
    paddingHorizontal: 20,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    // backgroundColor: 'teal',
  },
  imageContainer: {
    marginTop: 50,
    alignItems: 'center',
    width: '40%',
    // backgroundColor: 'white',
    alignSelf: 'center',
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 20,
  },
  profileRatingContainer: {
    alignItems: 'center',
    marginTop: 25,
  },

  profile: {
    height: 70,
    width: 220,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 2,
    shadowRadius: 8,
    shadowOpacity: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
  },
  profileName: {
    fontWeight: '600',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  starWrapper: {
    flexDirection: 'row',
    paddingTop: 4,
  },
  reviewCountWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  reviewCount: {
    marginLeft: 5,
    fontSize: 12,
  },
  serviceContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  serviceText: {
    color: text,
  },
  performanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  projectsWrapper: {
    alignItems: 'center',
  },
  value: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  key: {
    fontSize: 10,
  },
  star: {
    marginLeft: 5,
  },
  profileDescription: {
    marginTop: 15,
    color: text,
  },
  addressContainer: {
    marginTop: 25,
  },
  addressWrapper: {
    height: 50,
    width: '100%',
    // paddingHorizontal: 10,
    paddingLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationCard: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 2,
    shadowRadius: 8,
    shadowOpacity: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
  },
  addressText: {
    color: addressColor,
    marginLeft: 10,
    flexWrap: 'wrap',
  },
  tabs: {
    height: 55,
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    backgroundColor: 'white',
    elevation: 2,
    shadowRadius: 8,
    shadowOpacity: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
  },
  tab: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  focusedTab: {
    backgroundColor: primaryDark,
    color: 'white',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  tabText: {
    color: text,
  },
  ActiveTabText: {
    color: 'white',
    fontWeight: '600',
  },
  scaneButton: {
    marginVertical: 20,
    height: 40,
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '600',
  },
  editBtn: {
    height: 35,
    width: 150,
  },
  editTxt: {
    fontSize: 12,
    fontWeight: '600',
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
  },
});
