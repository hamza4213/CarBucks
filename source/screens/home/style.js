import { Dimensions, StyleSheet } from 'react-native';
import {
  primaryDark, text
} from '../../common/constants/colors';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  header: {
    height: height * 0.3,
    paddingTop: 20,
    paddingHorizontal: 20
  },
  headerContent: {
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emergencyContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  notificationWrapper: {
    flexDirection: 'row',
    marginLeft: 8,
    padding: 2,
  },
  notificationIcon: {
    alignSelf: 'center',
  },
  badge: {
    backgroundColor: text,
    height: 15,
    width: 15,
    borderRadius: 15 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -8,
    marginTop: 5,
    zIndex: 99,
  },
  badgeTxt: {
    color: 'white',
    fontSize: 9,
  },
  contentContainer: {
    // marginTop: -10,
    height: '100%',
    paddingTop: height * 0.15,
    // height: height * 0.66,
    marginTop: -20,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingHorizontal: 20,
    height: '100%',
    // paddingBottom: 210,
  },
  serviceContentContainer: {
    backgroundColor: 'white',
    height: '100%',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: -20,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  flatList: {
    // marginTop: -30,
  },
  buttonsView: {
    marginTop: 20,
    flexDirection: 'row',
  },
  mr10: {
    marginRight: 10,
  },
  imageView: {
    width: "100%",
    alignSelf: "center",
    top: height * 0.12,
    position: 'absolute',
    height: height * 0.30,
    paddingHorizontal: 20,

    overflow: "hidden",
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    resizeMode: 'cover',
  },
  productsContainer: {
    // backgroundColor: 'green',
    // marginTop: 10,
    // marginBottom: 150,
    // flex: 1
    width: "100%"
  },
  accessoryContainer: {
    // backgroundColor: 'tomato',
    // width: '100%',
    // marginBottom: 10,
    // paddingBottom: 20,
    // padding: 20,
  },
  tabs: {
    flexDirection: 'row',
    padding: 5,
    // width: '100%',
    // backgroundColor: primaryDark,
    height: 40,

    // height: 55,
    // elevation: 2,
    // shadowRadius: 8,
    // shadowOpacity: 1,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 0},
  },
  tab: {
    paddingHorizontal: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  focusedTab: {
    backgroundColor: 'white',
    color: 'white',
  },

  tabText: {
    color: 'white',
    fontSize: 12,
  },
  ActiveTabText: {
    color: primaryDark,
    fontWeight: '600',
    fontSize: 12,
  },
  emergencyButton: {
    width: 120,
  },
  emergencyModal: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#333',
    padding: 20,
  },
  modalView: {
    marginTop: 'auto',
    marginBottom: 'auto',
    zIndex: 1000,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeading: {
    fontSize: 20,
    color: '#333',
    fontWeight: '500',
    textAlign: 'left',

    width: '100%',
  },
  modalClose: {
    position: 'absolute',
    top: 12,
    right: 20,
  },
  modalInput: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
    padding: 20,
    width: '100%',
    borderRadius: 10,
  },
  modalInputSelector: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#333',
  },
  modalSelectContainer: {
    marginVertical: 20,
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  modalBtnContainer: {
    // marginTop: 20,
    flexDirection: 'row',
    // backgroundColor: 'green',
    paddingTop: 20,
    width: '100%',
    justifyContent: 'flex-end',
  },
  modalActionBtn: {
    width: 100,
    marginHorizontal: 10,
  },
  insightBox: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    marginBottom: 3,
  },
  bigTitle: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  smallText: {
    color: '#F5F5F5',
  },
  insightView: {
    flex: 1,
    borderRadius: 10,
    // paddingVertical: 20,
    flexDirection: 'row',
    paddingHorizontal: 15,
    backgroundColor: primaryDark,
  },
  availableCats: {
    display: 'flex',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    color: primaryDark,
    marginBottom: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  catagoryContainer: {
    marginTop: 15,
  },
});
