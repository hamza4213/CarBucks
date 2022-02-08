import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import GradiantLogo from '../../../assets/svgs/gradiantLogo.svg';
import Input from '../../../common/components/input';
import styles from './styles';
import Email from '../../../assets/svgs/email.svg';
import EmailActive from '../../../assets/svgs/emailGrad.svg';
import Button from '../../../common/components/button';
import ShowToast from '../../../common/components/toast/simpleToast';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {forgetPassword} from '../../../redux/actions';
import LoginBack from '../../../assets/pngs/loginBack.png';
import {validateEmail} from '../../../utils/register';
import Header from '../../../common/components/header';
import AuthInput from '../../../common/components/input/authInput';
import RatingButton from '../../../common/components/button/ratingButton';

export default function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const [loader, setLoader] = useState(false);

  const loginHandler = () => {
    setLoader(true);
    const dataobj = {
      email,
    };
    if (isVerified(dataobj)) {
      dispatch(forgetPassword(dataobj.email, stopLoader));
    } else {
      stopLoader();
    }
  };
  const stopLoader = isSend => {
    setLoader(false);
    if (isSend) {
      ShowToast(`Reset Email Successfully Send!`);
      navigation.navigate('newPassword');
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
    <ScrollView style={styles.fullScreen}>
      <Header auth>
        <Text style={styles.authTitle}>reset</Text>
      </Header>
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <GradiantLogo />
        </View>

        <View style={styles.inputContainer}>
          <AuthInput
            placeholder="Email"
            value={email}
            RightIcon={<Email />}
            onChangeText={setEmail}
            style={styles.inputStyle}
            keyboardType="email-address"
            RightIconActive={<EmailActive />}
          />
        </View>
        <RatingButton
          textStyle={styles.authTxt}
          title={loader ? <ActivityIndicator color="white" /> : 'Send Email'}
          onPress={loginHandler}
          type="gradiant"
          style={styles.authBtn}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          // style={styles.forgotPasswordWrapper}
        >
          <Text style={styles.loginTxt}>Login?</Text>
        </TouchableOpacity>

        <View style={styles.dontHaveAccountWrapper}>
          <Text style={styles.dontHaveAccount}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signUpText}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>

    // <ScrollView style={styles.fullScreen} showsVerticalScrollIndicator={false}>
    //   <View style={styles.header}>
    //     <GradiantLogo />
    //   </View>
    //   <ImageBackground source={LoginBack} style={styles.backImage} />
    //   <Text style={styles.heading}>Forget Password</Text>
    //   <View style={styles.container}>
    //     <ScrollView contentContainerStyle={styles.contentContainer2}>
    //       <Input
    //         type="a"
    //         onChangeText={setEmail}
    //         label="Email"
    //         LeftIcon={<Email style={{marginRight: 5}} />}
    //         style={styles.mb20}
    //         keyboardType="email-address"
    //         placeholder="your email@gmail.com"
    //       />

    //       <Button
    //         title={loader ? <ActivityIndicator color="white" /> : 'Send Email'}
    //         onPress={loginHandler}
    //       />
    //       <TouchableOpacity
    //         onPress={() => {
    //           navigation.navigate('Login');
    //         }}
    //         style={styles.forgotPasswordWrapper}>
    //         <Text style={styles.forgotPasswordText}>Login?</Text>
    //       </TouchableOpacity>

    //       <View style={styles.dontHaveAccountWrapper}>
    //         <Text style={styles.dontHaveAccount}>Don't have an account?</Text>
    //         <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
    //           <Text style={styles.signUpText}> Sign up</Text>
    //         </TouchableOpacity>
    //       </View>
    //     </ScrollView>
    //   </View>
    // </ScrollView>
  );
}
