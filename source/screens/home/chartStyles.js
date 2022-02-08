import {Dimensions, StyleSheet} from 'react-native';
import {primaryDark, text} from '../../common/constants/colors';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginTop: 15,
  },
  myEarningsContainer: {
    paddingVertical: 10,
    marginBottom: 15,
  },
  friendsInviteContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  friendsInviteCard: {
    width: '48%',
    height: 180,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 16,
    color: '#264653',
    fontWeight: '500',
  },
  title2: {
    fontSize: 14,
  },
  title3: {
    marginLeft: 10,
    marginBottom: 10,
  },
});
