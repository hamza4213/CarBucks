import { StyleSheet } from 'react-native';
import {
  text,
  completedGreen,
  primaryDark,
  primaryLight,
} from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    height: 94,
    width: '100%',
    elevation: 2,
    shadowRadius: 8,
    shadowOpacity: 0.3,
    shadowColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: { width: 0, height: 0 },
    backgroundColor: "#FFF",
  },
  image: {
    width: 90,
    height: 94,
    borderRadius: 15,
  },
  textView: { 
  },
  service: {
    color: text,
    fontSize: 12,
  },
  name: {
    color: text,
    fontSize: 14,
    marginBottom: 3,
    fontWeight: '500',
  },
  endView: {
    marginLeft: 'auto',
    alignItems: 'flex-end', 
    height: "100%"
  },
  sb: {
    justifyContent: 'space-between',
  },
  centered: {
    justifyContent: 'center',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: primaryDark,
  },
  bookNow: {
    fontSize: 13,
    fontWeight: '500',
    color: primaryDark,
  },
  editWrapper: {
    width: 80,
    borderRadius: 10,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  edit: {
    color: 'white',
  },
  completed: {
    color: 'green',
  },
});
