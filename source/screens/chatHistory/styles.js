import { StyleSheet } from 'react-native';
import { chatHistoryGray } from '../../common/constants/colors';

export default StyleSheet.create({
  contentContainer: {
    marginTop: -25,
    backgroundColor: 'white',
    height: '100%',
    paddingHorizontal: 15,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  chatWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    paddingVertical: 12,
    borderBottomColor: '#F7F7F7',
  },
  textWrapper: {
    marginLeft: 10,
    // backgroundColor: 'tomato',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
  userName: {
    fontSize: 16,
  },
  msg: {
    fontSize: 11,
    color: chatHistoryGray,
  },
  time: {
    fontSize: 12,
    color: chatHistoryGray,
    marginLeft: 'auto',
    paddingTop: 5,
  },
  chatsContainer: {
    marginTop: 20,
  },
  inviteWrapper: {
    // marginLeft: 'auto',
    position: "absolute",
    top: 5,
    right: 0
  },
  invite: {
    fontSize: 12,
    color: 'white',
    textDecorationLine: 'underline',
  },
});
