import {StyleSheet} from 'react-native';
import {primary} from '../../constants/colors';

export default StyleSheet.create({
  textInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowOffset: {width: 100, height: 50},
    shadowColor: '#000',
    shadowOpacity: 1,
    elevation: 15,
  },

  container: {
    minHeight: 60,
    width: '100%',
    borderWidth: 1,
    paddingEnd: 30,
    paddingStart: 30,
    borderRadius: 30,
    borderColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerA: {
    borderColor: 'black',
  },
  labelView: {
    top: -12,
    left: 30,
    paddingLeft: 6,
    paddingRight: 6,
    position: 'absolute',
  },
  labelViewA: {
    backgroundColor: 'white',
  },
  labelViewB: {
    backgroundColor: primary,
  },
  labelA: {
    color: 'black',
  },
  labelB: {
    color: 'white',
  },
  leftIcon: {
    marginRight: 5,
  },
  rightIcon: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    marginLeft: 'auto',
  },
});
