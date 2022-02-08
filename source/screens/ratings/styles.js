import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contentContainer: {
    // flex: 1,
    // backgroundColor: 'white',

    // paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  givenContainer: {
    // marginBottom: 20,
    marginTop: -30,
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20

  },
  givenBtn: {
    width: 110,
    height: 30,
    backgroundColor: '#F1F1F1',
    borderWidth: 1,
    borderColor: 'white',
  },
  receivedBtn: {
    marginLeft: 20,
    width: 110,
    height: 30,
    backgroundColor: '#F1F1F1',
  },
});
