import {StyleSheet} from 'react-native';
import {text} from '../../common/constants/colors';

export default StyleSheet.create({
  contentContainer: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    marginTop: -20,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    height: '100%',
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20,
  },
  accountSettingsWrapper: {
    borderRadius: 12,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  cardView: {
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  settingEntery: {
    // padding: 5,
    paddingVertical: 8,
    flexDirection: 'row',
    marginVertical: 2,
  },
  text: {
    marginLeft: 10,
    marginVertical: 5,
  },
  logo: {
    height: 12,
    width: 12,
    marginRight: 10,
  },
  arrowDown: {
    marginLeft: 'auto',
    marginRight: 14,
  },
  divider: {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 1,
    backgroundColor: text,
  },
});
