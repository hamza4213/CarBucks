import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import GradiantLogo from '../../assets/svgs/gradiantLogo.svg';
import Input from '../../common/components/input';
import Button from '../../common/components/button';
import {primaryDark} from '../../common/constants/colors';
import LeftIcon from '../../assets/svgs/back.svg';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ImageBackground} from 'react-native';
import authBackground from '../../assets/pngs/authBackground.png';
import {useDispatch} from 'react-redux';
import {updatePassword} from '../../redux/actions/auth';
import showToast from '../../common/components/toast/simpleToast';
import {styles} from './styles';
import Header from '../../common/components/header';
import AuthInput from '../../common/components/input/authInput';
import SeePassword from '../../assets/svgs/seePassword.svg';
import SeePasswordActive from '../../assets/svgs/seePasswordGrad.svg';
import HidePassword from '../../assets/svgs/hidePasswordWhite.svg';
import HidePasswordActive from '../../assets/svgs/hidePasswordGrad.svg';

export default function ResetPassword() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [passwordCurrent, setPasswordCurrent] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const navigation = useNavigation();
  const handleUpdatePassword = () => {
    setLoader(true);
    const data = {
      passwordCurrent,
      password,
      passwordConfirm,
    };
    dispatch(updatePassword(data, stopLoader));
  };
  const stopLoader = isUpdated => {
    setLoader(false);
    if (isUpdated) {
      showToast('your Password Successfuly Updated');
    }
  };
  return (
    <ScrollView>
      <Header auth>
        <Text style={styles.authTitle}>Reset Password</Text>
      </Header>
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <GradiantLogo />
        </View>
        <View style={styles.mt40}>
          <AuthInput
            placeholder="Current Password"
            value={passwordCurrent}
            onChangeText={setPasswordCurrent}
            style={styles.mb20}
            keyboardType="default"
            inputType={show ? 'text' : 'password'}
            RightIcon={
              show ? (
                <TouchableOpacity onPress={() => setShow(prev => !prev)}>
                  <HidePassword />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setShow(prev => !prev)}>
                  <SeePassword />
                </TouchableOpacity>
              )
            }
            RightIconActive={
              show ? (
                <TouchableOpacity onPress={() => setShow(prev => !prev)}>
                  <HidePasswordActive />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setShow(prev => !prev)}>
                  <SeePasswordActive />
                </TouchableOpacity>
              )
            }
          />
          <AuthInput
            placeholder="New Password"
            value={password}
            onChangeText={setPassword}
            style={styles.mb20}
            inputType={show2 ? 'text' : 'password'}
            keyboardType="default"
            RightIcon={
              show2 ? (
                <TouchableOpacity onPress={() => setShow2(prev => !prev)}>
                  <HidePassword />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setShow2(prev => !prev)}>
                  <SeePassword />
                </TouchableOpacity>
              )
            }
            RightIconActive={
              show2 ? (
                <TouchableOpacity onPress={() => setShow2(prev => !prev)}>
                  <HidePasswordActive />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setShow2(prev => !prev)}>
                  <SeePasswordActive />
                </TouchableOpacity>
              )
            }
          />
          <AuthInput
            placeholder="Re-Type Password"
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            style={styles.mb20}
            inputType={show3 ? 'text' : 'password'}
            keyboardType="email-address"
            RightIcon={
              show3 ? (
                <TouchableOpacity onPress={() => setShow3(prev => !prev)}>
                  <HidePassword />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setShow3(prev => !prev)}>
                  <SeePassword />
                </TouchableOpacity>
              )
            }
            RightIconActive={
              show3 ? (
                <TouchableOpacity onPress={() => setShow3(prev => !prev)}>
                  <HidePasswordActive />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setShow3(prev => !prev)}>
                  <SeePasswordActive />
                </TouchableOpacity>
              )
            }
          />
        </View>
      </View>
    </ScrollView>
  );
}
