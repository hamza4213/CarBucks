import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  contentContainer: {
    height: 130,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIconWrapper: {
    padding: 10,

    justifyContent: 'center',
  },
  image: {
    height: 55,
    width: 55,
    borderRadius: 15,
  },
  nameContainer: {
    marginLeft: 8,
  },
  name: {
    fontSize: 19,
    color: 'white',
  },
  status: {
    fontSize: 13,
    color: 'white',
  },
  inviteWrapper: {
    marginLeft: 'auto',
    marginRight: 25,
  },
  inviteText: {
    color: 'white',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
});
