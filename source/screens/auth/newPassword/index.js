import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import GradiantLogo from '../../../assets/svgs/whiteLogo.svg';
import Input from '../../../common/components/input';
import styles from './styles';

import Button from '../../../common/components/button';
import ShowToast from '../../../common/components/toast/simpleToast';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import LoginBack from '../../../assets/pngs/loginBack.png';
import {resetPassword} from '../../../redux/actions';

export default function NewPassword() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [token, setToken] = useState('');

  const [loader, setLoader] = useState(false);

  const loginHandler = () => {
    setLoader(true);
    const dataobj = {
      password,
      passwordConfirm,
    };
    if (isVerified(dataobj)) {
      dispatch(resetPassword(dataobj, token, stopLoader));
    } else {
      stopLoader();
    }
  };
  const stopLoader = isSend => {
    setLoader(false);
    if (isSend) {
      ShowToast(`Please Login again`);
      navigation.navigate('Login');
    }
  };

  const isVerified = data => {
    return Object.keys(data).every(key => {
      if (data[key] === '' || data[key] === null) {
        ShowToast(`${key} required!`);
        return false;
      }
      if (key === 'password' && data[key].length < 8) {
        ShowToast(`${key} must be 8 characters!`);
        return false;
      }

      if (
        key === 'email' &&
        data[key].length > 0 &&
        !validateEmail(data[key])
      ) {
        ShowToast(`${key} invalid!`);
        return false;
      }

      return true;
    });
  };
  return (
    <ScrollView style={styles.fullScreen} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <GradiantLogo />
      </View>
      <ImageBackground source={LoginBack} style={styles.backImage} />
      <Text style={styles.heading}>Reset Password</Text>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Input
            type="a"
            onChangeText={setPassword}
            label="New Password"
            style={styles.mb20}
            inputType="password"
            placeholder="Password here"
          />
          <Input
            type="a"
            onChangeText={setPasswordConfirm}
            label="Confirm Password"
            style={styles.mb20}
            inputType="password"
            placeholder="Password here"
          />
          <Input
            type="a"
            onChangeText={setToken}
            label="Verify Code (send to your email)"
            style={styles.mb20}
            placeholder="Code"
          />
          <Button
            title={
              loader ? <ActivityIndicator color="white" /> : 'Reset Password'
            }
            onPress={loginHandler}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={styles.forgotPasswordWrapper}>
            <Text style={styles.forgotPasswordText}>Login?</Text>
          </TouchableOpacity>

          <View style={styles.dontHaveAccountWrapper}>
            <Text style={styles.dontHaveAccount}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.signUpText}> Sign up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}
