import {Linking, Alert, Platform} from 'react-native';

export const callNumber = phone => {
  let phoneNumber = phone;
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${phone}`;
  } else {
    phoneNumber = `tel:${phone}`;
  }
  Linking.canOpenURL(phoneNumber)
    .then(supported => {
      if (!supported) {
        Alert.alert('Phone number is not available');
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch(err => console.log(err));
};

export const sendPhoneMessage = phone => {
  const url =
    Platform.OS === 'android' ? `sms:${phone}?body=` : `sms:${phone}&body=`;

  try {
    Linking.openURL(url);
  } catch (error) {
    Alert.alert('Not Supported', 'Can not send message from your device.');
  }
};

export const getUID = (length = 10) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return Date.now() + result;
};
