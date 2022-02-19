import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  carContainer: {
    padding: 20,
    borderRadius: 20,
    marginVertical: 10,
    backgroundColor: '#FFF',
    shadowOffset: {width: 100, height: 50},
    shadowColor: '#000',
    shadowOpacity: 1,
    elevation: 3,
  },

  Carfooter: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ImgContainter: {
    paddingTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  carTag: {
    position: 'absolute',
    top: 10,
    backgroundColor: '#ccc',
    color: '#474A9C',
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  carImg: {
    marginVertical: 10,
    height: 130,
    width: '90%',
  },
  carPrice: {
    color: '#A90000',
    fontSize: 18,
    fontWeight: '600',
  },
  carName: {
    color: '#4E5F76',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
  },
  hour: {
    color: '#bbb',
  },
  review: {
    color: '#8392A5',
    marginLeft: 5,
  },
  ratingStats: {
    flexDirection: 'row',
    alignItems: 'center',
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
