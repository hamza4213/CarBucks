import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  contentContainer: {
    marginTop: -19,
    zIndex: 99,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  CarBody: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  carTitle: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 27,
  },
  carPrice: {
    color: '#A90000',
    fontSize: 22,
    lineHeight: 27,
    fontWeight: '600',
    color: '#E21E00',
  },
  carName: {
    color: '#4E5F76',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
  },
  hour: {
    color: '#8392A6',
    fontSize: 16,
  },
  review: {
    color: '#8392A6',
    lineHeight: 18,
    fontSize: 12,
  },
  heading: {
    marginTop: 20,
    color: '#1C2D41',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
  },
  overviewContent: {
    marginTop: 20,
    fontSize: 12,
    lineHeight: 22,
    fontWeight: '400',
    color: '#8392A5',
  },
  read: {
    textDecorationLine: 'underline',
    textDecorationColor: '#000',
    fontSize: 12,
    lineHeight: 22,
    fontWeight: '400',
    color: '#333',
  },
  carSpecs: {
    flex: 1,
    flexDirection: 'row',
  },
  emoji: {marginRight: 5},
  profileContainer: {
    flex: 1,
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    borderColor: '#ECECEC',
    borderRadius: 12,
    justifyContent: 'space-between',
  },
  centeredRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ProfilePic: {
    marginRight: 8,
  },
  ProfileName: {
    // flex: 1.4,
  },
  ProfileIconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  ProfileIcon: {
    backgroundColor: '#E20001',
    padding: 10,
    borderRadius: 50,
    margin: 10,
  },
  mt2: {
    marginTop: 20,
  },
  mb2: {
    marginBottom: 20,
  },
  lightText: {
    color: '#8392A5',
    textDecorationLine: 'underline',
    textDecorationColor: '#8392A5',
    textDecorationStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#8392A5',
  },
});
