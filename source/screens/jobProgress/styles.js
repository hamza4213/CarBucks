import {StyleSheet} from 'react-native';
import {
  border,
  lightPlaceHolder,
  placeholder,
  primaryDark,
  primaryLight,
  text,
  textDark,
} from '../../common/constants/colors';

export default StyleSheet.create({
  container: {
    height: '100%',
    marginTop: -35,
    backgroundColor: 'white',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    marginTop: 50,
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#FFF',
  },
  cardTopView: {
    flexDirection: 'row',
  },
  image: {
    height: 75,
    width: 75,
    borderRadius: 15,
  },
  textWrapper: {
    marginLeft: 5,
  },
  service: {
    fontWeight: '500',
    color: text,
  },
  name: {
    fontSize: 12,
    color: text,
  },

  rateWrapper: {
    marginLeft: 'auto',
  },
  rate: {
    fontWeight: '700',
    color: primaryLight,
  },
  cardCenterView: {
    marginTop: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceDetials: {
    fontWeight: '700',
    fontSize: 16,
  },
  carRepair: {
    fontSize: 16,
    color: textDark,
  },
  calenderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reschedule: {
    fontSize: 12,
    color: textDark,
  },
  cancelBtn: {
    marginTop: 10,
    paddingVertical: 3,
    width: 100,
    height: 40,
  },
  textStyle: {
    fontSize: 10,
  },
  calenderIncon: {
    marginLeft: 10,
  },
  bottomText: {
    color: text,
    fontSize: 12,
  },
  wantToCancel: {
    fontSize: 22,
    flexWrap: 'wrap',
    color: primaryLight,
    marginTop: 20,
  },
  textArea: {
    backgroundColor: lightPlaceHolder,
    height: 150,
    padding: 20,
    textAlignVertical: 'top',
    borderRadius: 20,
    marginTop: 25,
  },
  sendButton: {
    width: 150,
    height: 35,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
  },
});
