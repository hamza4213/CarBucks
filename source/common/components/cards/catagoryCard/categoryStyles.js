import {StyleSheet} from 'react-native';
import {primaryDark, text, textDark} from '../../../constants/colors';

export default StyleSheet.create({
  accessoryContainer: {
    flex: 1,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    // marginTop: 25,
  },
  textView: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  titleDesc: {
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  titleHead: {
    fontSize: 24,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  imageView: {
    height: 150,
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
  },
  image: {
    height: 180,
    width: '95%',
    resizeMode: 'cover',
  },
  bottomView: {
    marginBottom: 45,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconView: {
    width: 60,
    height: 60,
    marginRight: 12,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primaryDark,
  },
  smallIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: primaryDark,
    textTransform: 'capitalize',
  },
  button: {
    height: 30,
    borderWidth: 1,
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 14,
    fontWeight: '500',
  },
});
