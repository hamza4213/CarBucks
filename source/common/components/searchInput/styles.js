import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { 
    width: "100%",
    elevation: 2,
    shadowRadius: 8,
    shadowOpacity: 0.2,
    shadowColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 0 },
    marginTop:10

  },
  smallContainer: {
    height: 40,
  },
  searchIcon: {
    width: 10,
    height: 10,
    position: "absolute", right: 20
  },
  input: {
    width: '100%',
    backgroundColor: "#FFF",
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
