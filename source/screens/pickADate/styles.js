import {StyleSheet} from 'react-native';
import {primaryDark, textDark} from '../../common/constants/colors';

export default StyleSheet.create({
  contentContainer: {
    marginTop: -19,
    zIndex: 99,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  DateInText: {
    // flexDirection: 'row',
    marginVertical: 20,
  },
  dateHeading: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1C2D41',
    marginBottom: 5,
  },
  timeDateFrom: {
    marginRight: 20,
    flexDirection: 'row',
  },
  timeDataTo: {
    marginTop: 10,
    flexDirection: 'row',
  },
  textDate: {
    color: '#8392A5',
    fontSize: 12,
  },
  timeFrom: {
    marginLeft: 30,
  },
  detailInnerContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  notesIconsContiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#FAFAFA',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  calendar: {
    elevation: 4,
    borderRadius: 16,
    marginTop: -75,
    marginBottom: 20,
    padding: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    // flex: 1,
  },
  addressBtn: {
    width: 150,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: textDark,
    backgroundColor: 'white',
  },
  addressTxt: {
    color: primaryDark,
  },
});
