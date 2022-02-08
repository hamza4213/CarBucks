import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import Header from '../../../common/components/header';
import styles from './styles';
import AuthInput from '../../../common/components/input/authInput';
import RatingButton from '../../../common/components/button/ratingButton';
import ShowToast from '../../../common/components/toast/simpleToast';
import { login } from '../../../redux/actions';
import { validateEmail } from '../../../utils/register';

import GradiantLogo from '../../../assets/svgs/gradiantLogo.svg';
import Email from '../../../assets/svgs/email.svg';
import EmailActive from '../../../assets/svgs/emailGrad.svg';
import SeePassword from '../../../assets/svgs/seePassword.svg';
import SeePasswordActive from '../../../assets/svgs/seePasswordGrad.svg';
import HidePassword from '../../../assets/svgs/hidePasswordWhite.svg';
import HidePasswordActive from '../../../assets/svgs/hidePasswordGrad.svg';
import Facebook from '../../../assets/svgs/facebook.svg';
import Google from '../../../assets/svgs/google.svg';

import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

export default function index() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState(__DEV__ ? 'hamza@mailinator.com' : '');
  const [password, setPassword] = useState(__DEV__ ? '12345678' : '');
  const [loader, setLoader] = useState(false);
  const [show, setShow] = useState(false);

  const loginHandler = () => {
    setLoader(true);
    const data = {
      email,
      password,
    };
    if (isVerified(data)) {
      dispatch(login(data, stopLoader));

    } else {
      stopLoader();

    }
  };

  const stopLoader = async (error, email) => {
    if (error === 'Please verify your email address first') {
      dispatch(sendVerficationCode(email, () => setLoader(false)));
      navigation.navigate('emailVerify', { email });
    }
    setLoader(false);
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
    <ScrollView>
      <Header auth>
        <Text style={styles.authTitle}>Login</Text>
      </Header>
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <GradiantLogo />
        </View>
        <View style={styles.inputContainer}>
          <AuthInput
            placeholder="Email"
            RightIcon={<Email />}
            RightIconActive={<EmailActive />}
            onChangeText={setEmail}
            style={styles.inputStyle}
            keyboardType="email-address"
          />
          <AuthInput
            placeholder="Password"
            style={styles.inputStyle}
            onChangeText={setPassword}
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
        </View>
        <RatingButton
          textStyle={styles.authTxt}
          title={loader ? <ActivityIndicator color="white" /> : 'Login'}
          onPress={loginHandler}
          type="gradiant"
          style={styles.authBtn}
        />
        <TouchableOpacity onPress={() => navigation.navigate('forgetPassword')}>
          <Text style={styles.forgotTxt}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.socialContainer}>
          <Text>Login with</Text>
          <Facebook style={styles.facebook} />
        </View>
        <View style={styles.socialContainer}>
          <Text>Login with</Text>
          <Google style={styles.facebook} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.createAccountTxt}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// import React, {useState} from 'react';
// import {
//   View,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   ImageBackground,
//   ActivityIndicator,
// } from 'react-native';
// import GradiantLogo from '../../../assets/svgs/whiteLogo.svg';
// import Input from '../../../common/components/input';
// import styles from './styles';
// import Email from '../../../assets/svgs/email.svg';
// import Button from '../../../common/components/button';
// import ShowToast from '../../../common/components/toast/simpleToast';
// import {useNavigation} from '@react-navigation/native';
// import {useDispatch} from 'react-redux';
// import {login} from '../../../redux/actions';
// import LoginBack from '../../../assets/pngs/loginBack.png';
// import {validateEmail} from '../../../utils/register';
// import {sendVerficationCode} from '../../../redux/actions/auth';

// export default function Login() {
//   const dispatch = useDispatch();
//   const navigation = useNavigation();
//   const [email, setEmail] = useState(__DEV__ ? 'hamza@mailinator.com' : '');
//   const [password, setPassword] = useState(__DEV__ ? '12345678' : '');
//   const [loader, setLoader] = useState(false);

//   const loginHandler = () => {
//     setLoader(true);
//     const data = {
//       email,
//       password,
//     };
//     if (isVerified(data)) {
//       dispatch(login(data, stopLoader));
//     } else {
//       stopLoader();
//     }
//   };
//   const stopLoader = async (error, email) => {
//     if (error === 'Please verify your email address first') {
//       dispatch(sendVerficationCode(email, () => setLoader(false)));
//       navigation.navigate('emailVerify', {email});
//     }
//     setLoader(false);
//   };

//   const isVerified = data => {
//     return Object.keys(data).every(key => {
//       if (data[key] === '' || data[key] === null) {
//         ShowToast(`${key} required!`);
//         return false;
//       }
//       if (key === 'password' && data[key].length < 8) {
//         ShowToast(`${key} must be 8 characters!`);
//         return false;
//       }
//       if (
//         key === 'email' &&
//         data[key].length > 0 &&
//         !validateEmail(data[key])
//       ) {
//         ShowToast(`${key} invalid!`);
//         return false;
//       }

//       return true;
//     });
//   };
//   return (
//     <ScrollView style={styles.fullScreen} showsVerticalScrollIndicator={false}>
//       <View style={styles.header}>
//         <GradiantLogo />
//       </View>
//       <ImageBackground source={LoginBack} style={styles.backImage} />
//       <Text style={styles.heading}>Login</Text>
//       <View style={styles.container}>
//         <ScrollView contentContainerStyle={styles.contentContainer}>
//           <Input
//             type="a"
//             onChangeText={setEmail}
//             label="Email"
//             LeftIcon={<Email style={styles.leftIcon} />}
//             style={styles.mb20}
//             inputStyle={{color: 'black'}}
//             keyboardType="email-address"
//             placeholder="your email@gmail.com"
//           />

//           <Input
//             type="a"
//             onChangeText={setPassword}
//             label="Password"
//             style={styles.mb20}
//             inputType="password"
//             inputStyle={{color: 'black'}}
//             placeholder="your password here"
//           />
//           <Button
//             title={loader ? <ActivityIndicator color="white" /> : 'Login'}
//             onPress={loginHandler}
//           />
//           <TouchableOpacity
//             onPress={() => navigation.navigate('forgetPassword')}
//             style={styles.forgotPasswordWrapper}>
//             <Text style={styles.forgotPasswordText}>Forgot Your password?</Text>
//           </TouchableOpacity>

//           <View style={styles.dontHaveAccountWrapper}>
//             <Text style={styles.dontHaveAccount}>Don't have an account?</Text>
//             <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
//               <Text style={styles.signUpText}> Sign up</Text>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </View>
//     </ScrollView>
//   );
// }
