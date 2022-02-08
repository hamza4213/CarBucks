import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  header: {
    height: height * 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  contentContainer: {
    marginTop: -20,
    height: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonsView: {
    marginTop: 30,
    flexDirection: 'row',
  },
  mr10: {
    marginRight: 10,
  },
  imageView: {
    width: '100%',
    top: height * 0.1,
    overflow: 'hidden',
    position: 'absolute',
    height: height * 0.3,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    resizeMode: 'cover',
  },
  pt30: {
    marginTop: 20,
  },
  separator: {
    height: 60,
  },
});
