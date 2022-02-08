import {StyleSheet} from 'react-native';
import colors, {primaryDark, text} from '../../common/constants/colors';

export default StyleSheet.create({
  contentContainer: {
    height: '100%',
    backgroundColor: 'white',
    marginTop: -18,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingHorizontal: 15,
  },
  detailTextWrapper: { 
    justifyContent: 'center',
    paddingLeft: 15,
    paddingVertical:5,
    width: '100%',
    elevation: 2,
    shadowRadius: 8,
    shadowOpacity: 0.1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    marginTop: 50,
    backgroundColor:"#FFF",
  },
  detailText: {
    color: colors.completedGreenLight,
    fontFamily:"Poppins-Bold"
  },
  notificationDetailCard: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    backgroundColor:"#FFF",

    marginTop: 30,
    elevation: 2,
    shadowRadius: 8,
    shadowOpacity: 0.1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
  },
  notificationWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  notificationKey: {
    color: primaryDark,
    flex: 1,
    fontSize: 15,
    // fontWeight: 's500',
  },
  notificationValue: {
    color: text,
    flex: 1,
    paddingLeft: 20,
    fontSize: 15,
  },
});
