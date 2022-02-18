import {StyleSheet} from 'react-native';
import {headingText, tagText, textDark} from '../../common/constants/colors';

export default StyleSheet.create({
  ScrollView: {
    height: '100%',
    backgroundColor: 'white',
    marginTop: -18,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingHorizontal: 20,
  },
  contentContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,

    paddingTop: 30,
    marginTop: -20,
  },
  tag: {
    borderRadius: 10,
    marginVertical: 10,
    marginRight: 20,
    marginLeft: 5,
    paddingHorizontal: 25,
    paddingVertical: 12,
    backgroundColor: 'white',
  },
  activeTag: {
    backgroundColor: 'rgba(228, 16, 17, 0.09)',
  },
  tagText: {
    color: tagText,
  },
  headingTxt: {
    color: headingText,
    fontWeight: '500',
    marginVertical: 10,
  },
  filterBtn: {
    paddingVertical: 15,
    marginTop: 50,
    marginBottom: 20,
  },
  slider: {
    width: '100%',
  },
  range: {
    width: '98%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rangeNum: {
    fontSize: 16,
    color: '#E20001',
  },
  lightText: {
    color: '#8392A5',
  },
  mt15: {
    marginTop: 15,
  },
});
