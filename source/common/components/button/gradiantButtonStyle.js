import {Dimensions, StyleSheet} from 'react-native';
import {border, primaryLight} from '../../constants/colors';

export default StyleSheet.create({
  gradiantContainerWrapper: {
    flex: 1,
  },
  gradiantContainer: {
    height: 54,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  simpleButton: {
    borderWidth: 0.5,
    borderColor: border,
  },
  buttonTitle: {
    color: 'white',
    fontWeight: '400',
    fontSize: 18,
    marginRight: 10,
  },
  buttonTitleSimple: {
    color: border,
  },
});
