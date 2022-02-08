import {StyleSheet} from 'react-native';
import {addressColor, primaryLight, text} from '../../common/constants/colors';

export default StyleSheet.create({
  contentContainer: {
    height: '100%',
    backgroundColor: 'white',
    marginTop: -35,
    paddingHorizontal: 20,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    marginBottom: 50,
  },
  imageContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  image: {
    height: 180,
    width: 180,
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
    fontWeight: '500',
    fontSize: 18,
  },
  starWrapper: {
    flexDirection: 'row',
    paddingTop: 4,
  },
  reviewCount: {
    marginLeft: 5,
    fontSize: 12,
  },
  reviewCountWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    backgroundColor: primaryLight,
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
  },
});
