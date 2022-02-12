import {Dimensions, StyleSheet} from 'react-native';
import {primaryDark, text} from '../../common/constants/colors';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  contentContainer: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    marginTop: -20,
    backgroundColor: 'white',
    height: height,
    paddingHorizontal: 20,
  },
  header: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 17,
    marginLeft: 10,
    fontFamily: 'poppins',
  },
  headerContent: {
    height: 40,
    // backgroundColor: '#FFF',
    width: '40%',
    marginLeft: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondContainer: {
    // alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // paddingHorizontal: 15,
  },
});
