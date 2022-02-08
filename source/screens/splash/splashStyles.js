import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height,
    width,
    alignItems: 'center',
  },
  gradiantLogo: {
    marginTop: height * 0.35,
  },
  gradiantDesign: {
    marginTop: 'auto',
  },
});
