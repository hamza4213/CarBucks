import {StyleSheet} from 'react-native';
import {transHistoryGray} from '../../common/constants/colors';

export default StyleSheet.create({
  contentContainer: {
    height: '100%',
    backgroundColor: 'white',
    marginTop: -18,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingHorizontal: 20,
  },

  container: {
    marginTop: 50,
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 130,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
  },
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: transHistoryGray,
  },
  key: {
    color: transHistoryGray,
  },
  downloadWrapper: {
    width: 150,
    marginTop: 60,
    borderRadius: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  download: {
    color: 'white',
  },
});
