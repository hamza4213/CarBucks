import { StyleSheet } from 'react-native';
import { text } from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    // paddingHorizontal: 15,
    marginHorizontal:20,
    padding: 10,
    marginBottom: 25, 
    elevation: 2,
    shadowRadius: 8,
    shadowOpacity: 0.3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    backgroundColor: "#FFF"
  },
  image: {
    height: 85,
    width: 85,
    borderRadius: 15,
  },
  reviewWrapper: {
    flexDirection: 'row',
  },
  starWrapper: {
    flexDirection: 'row',
    marginTop: 10,
  },
  nameWrapper: {
    marginLeft: 15,
  },
  textService: {
    fontWeight: '500',
    color: text,
  },
  textName: {
    color: text,
    fontSize: 12,
  },
  reviewTextWrapper: {},
  reviewHeading: {
    fontSize: 18,
    fontWeight: '600',
    paddingVertical: 12,
  },
  reviewText: {
    fontWeight: '300',
    fontSize: 12,
    paddingBottom: 25,
  },
  giveReviewBtn: {
    height: 30,
    width: 130,
    marginLeft: 'auto',
  },
});
