import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  contentContainer: {
    flex: 1,
    marginTop: -18,
    backgroundColor: 'white',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    // paddingHorizontal: 20
  },
  tabContainer: {

    overflow: "hidden",
    marginTop: 20,
  },
  tabWrapper: {
    // width: 110,
    paddingHorizontal: 20,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    color: 'white',
    fontSize: 12,
  },
  jmBtn: {
    height: 30,
    marginRight: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#FFF"
  },
  inputContainer: {
    flexDirection: "row", alignItems: "center", marginVertical: 10,
    paddingHorizontal: 20
  },
  flatList: {
    backgroundColor: "#FFF",
    padding: 20, paddingBottom: 0
  },
});
