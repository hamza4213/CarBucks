import {StyleSheet} from 'react-native';
import {text, textDark} from '../../../constants/colors';

export default StyleSheet.create({
  profileContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    height: 64,
    width: 64,
    borderRadius: 64 / 2,
  },
  nameContainer: {
    paddingLeft: 8,
    flex: 2,
  },
  name: {
    fontWeight: '500',
    fontSize: 20,
    color: 'white',
    textTransform: 'capitalize',
  },
  role: {
    fontSize: 16,
    color: text,
    textTransform: 'capitalize',
  },
});
