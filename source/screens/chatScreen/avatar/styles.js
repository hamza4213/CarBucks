import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: 45,
    height: 50,
    overflow: 'hidden',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  dot: {
    right: 1,
    bottom: 3,
    width: 13,
    height: 13,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'white',
    position: 'absolute',
  },
  active: {
    backgroundColor: 'green',
  },
  mr: {
    marginRight: 8,
  },
  ml: {
    marginLeft: 8,
  },
});
