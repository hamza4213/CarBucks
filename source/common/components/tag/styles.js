import {StyleSheet} from 'react-native';
import {tagText} from '../../constants/colors';

export default StyleSheet.create({
  tag: {
    borderRadius: 10,
    marginVertical: 10,
    marginRight: 20,
    marginLeft: 5,
    paddingHorizontal: 25,
    paddingVertical: 12,
    backgroundColor: 'white',
  },
  activeTag: {
    backgroundColor: 'rgba(228, 16, 17, 0.09)',
  },
  tagText: {
    color: tagText,
  },
});
