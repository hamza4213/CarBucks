import {Dimensions, StyleSheet} from 'react-native';
import {primaryDark, text} from '../../common/constants/colors';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: primaryDark,
  },
  header: {
    flex: 1,
    // paddingTop: 20,
    // flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: 17,
    marginLeft: 10,
    fontFamily: 'poppins',
  },
  secondContainer: {
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
});
