import {StyleSheet} from 'react-native';
import colors, {
  primaryDark,
  primaryLight,
  text,
} from '../../common/constants/colors';
export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  contentContainer: {
    marginTop: -20,
    // paddingHorizontal: 20,
    borderTopLeftRadius: 18,
    backgroundColor: 'white',
    borderTopRightRadius: 18,
  },
  tab: {
    paddingHorizontal: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  focusedTab: {
    backgroundColor: 'white',
    color: 'white',
  },

  tabText: {
    color: 'white',
    fontSize: 12,
  },
  ActiveTabText: {
    color: primaryDark,
    fontWeight: '600',
    fontSize: 12,
  },
});
