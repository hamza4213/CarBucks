import Toast from 'react-native-simple-toast';

export default showToast = msg => {
  Toast.showWithGravity(msg, Toast.LONG, Toast.BOTTOM);
};
