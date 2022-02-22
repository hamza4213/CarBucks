import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import GradiantLogo from '../../../assets/svgs/gradiantLogo.svg';
import Input from '../../../common/components/input';
import styles from './styles';
import Button from '../../../common/components/button';
import {primaryDark, text, textDark} from '../../../common/constants/colors';
import Checkbox from '../../../common/components/checkbox';
import {useState} from 'react';
import {ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import authBackground from '../../../assets/pngs/authBackground.png';
import {useDispatch} from 'react-redux';
import {register} from '../../../redux/actions';
import ShowToast from '../../../common/components/toast/simpleToast';
import {validateEmail} from '../../../utils/register';
import Email from '../../../assets/svgs/email.svg';
import EmailActive from '../../../assets/svgs/emailGrad.svg';
import SeePassword from '../../../assets/svgs/seePassword.svg';
import SeePasswordActive from '../../../assets/svgs/seePasswordGrad.svg';
import HidePassword from '../../../assets/svgs/hidePasswordWhite.svg';
import HidePasswordActive from '../../../assets/svgs/hidePasswordGrad.svg';
import PhoneRed from '../../../assets/svgs/PhoneInputSvg.svg';
import Phone from '../../../assets/svgs/phone.svg';
import Eidt from '../../../assets/svgs/edit.svg';
import EidtActive from '../../../assets/svgs/editActive.svg';
import CountryPicker from 'react-native-country-picker-modal';
import Header from '../../../common/components/header';
import AuthInput from '../../../common/components/input/authInput';
import RatingButton from '../../../common/components/button/ratingButton';
import TextInputSignup from '../../../common/components/input/TextInputSignup';
import HearInput from '../../../common/components/input/HearInput';

export default function Signup() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isChecked, setChecked] = useState(false);
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  const [loader, setLoader] = useState(null);
  // const [country, setCountry] = useState('Pakistan');
  // const [password, setPassword] = useState('');
  const [userdata, setUserdata] = useState({});
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [promoCode, setPromoCode] = useState(null);

  const [countryCode, setCountryCode] = useState('PK');

  const onSelect = country => {
    setCountry(country.name);
    setCountryCode(country.cca2);
  };

  const onSubmit = () => {
    console.log('userData', userdata);
    // setLoader(true);
    // const data = {
    //   firstName,
    //   lastName,
    //   email,
    //   phone,
    //   password,
    //   passwordConfirm,
    //   country,
    // };

    // if (isVerified(data)) {
    //   if (isChecked) {
    //     dispatch(register({...data, promoCode}, stopLoader));
    //   } else {
    //     ShowToast(`Please Confirm Term and Conditions!`);
    //     stopLoader();
    //   }
    // } else {
    //   stopLoader();
    // }
  };
  const stopLoader = isSend => {
    setLoader(false);

    if (isSend) {
      navigation.navigate('emailVerify', {email});
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
    <ScrollView>
      <Header auth>
        <Text style={styles.authTitle}>signup</Text>
      </Header>
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <GradiantLogo />
        </View>
        <View style={styles.inputContainer}>
          <TextInputSignup
            placeholder="First Name"
            RightIcon={<Eidt />}
            RightIconActive={<EidtActive />}
            // value={firstName}
            onChangeText={setUserdata}
            state={userdata}
            name="firstName"
            style={styles.inputStyle}
            keyboardType="default"
          />
          {/* <AuthInput
            placeholder="First Name"
            RightIcon={<Eidt />}
            RightIconActive={<EidtActive />}
            value={firstName}
            onChangeText={setFirstName}
            style={styles.inputStyle}
            keyboardType="default"
          /> */}
          <TextInputSignup
            placeholder="Last Name"
            RightIcon={<Eidt />}
            RightIconActive={<EidtActive />}
            // value={lastName}
            onChangeText={setUserdata}
            state={userdata}
            name="lastName"
            style={styles.inputStyle}
            keyboardType="default"
          />
          {/* <AuthInput
            placeholder="Last Name"
            RightIcon={<Eidt />}
            RightIconActive={<EidtActive />}
            value={lastName}
            onChangeText={setLastName}
            style={styles.inputStyle}
            keyboardType="default"
          /> */}
          <TextInputSignup
            placeholder="Email"
            // value={email}
            RightIcon={<Email />}
            RightIconActive={<EmailActive />}
            onChangeText={setUserdata}
            state={userdata}
            name="email"
            style={styles.inputStyle}
            keyboardType="email-address"
          />
          {/* <AuthInput
            placeholder="Email"
            value={email}
            RightIcon={<Email />}
            RightIconActive={<EmailActive />}
            onChangeText={setEmail}
            style={styles.inputStyle}
            keyboardType="email-address"
          /> */}
          <TextInputSignup
            placeholder="Phone"
            maxLength={15}
            // value={phone}
            onChangeText={setUserdata}
            state={userdata}
            name="phone"
            style={styles.inputStyle}
            keyboardType="phone-pad"
            placeholder="Phone here"
            RightIconActive={<PhoneRed />}
            RightIcon={<Phone />}
          />
          {/* <AuthInput
            placeholder="Phone"
            phone
            maxLength={10}
            RightIcon={
              <CountryPicker
                {...{
                  countryCode,
                  withFilter: true,
                  withCallingCode: true,
                  withCallingCodeButton: true,
                  withModal: true,
                  theme: {
                    backgroundColor: 'white',
                    onBackgroundTextColor: textDark,
                    fontSize: 15,
                  },

                  onSelect,
                }}
              />
            }
            value={phone}
            onChangeText={setPhone}
            style={styles.inputStyle}
            keyboardType="phone-pad"
            placeholder="Phone here"
          /> */}
          <HearInput />
          <TextInputSignup
            placeholder="Password"
            // value={password}
            style={styles.inputStyle}
            onChangeText={setUserdata}
            state={userdata}
            name="password"
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
          {/* <AuthInput
            placeholder="Confirm Password"
            style={styles.inputStyle}
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            inputType={show2 ? 'text' : 'password'}
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
          /> */}
          {/* <AuthInput
            placeholder="Promo Code"
            RightIcon={<Eidt />}
            RightIconActive={<EidtActive />}
            value={promoCode}
            onChangeText={setPromoCode}
            style={styles.inputStyle}
            keyboardType="default"
          /> */}
        </View>
        {/* <View style={styles.termsAndConditionsTextWrapper}>
          <Checkbox isChecked={isChecked} setChecked={setChecked} />

          <Text style={styles.yesIAgree}>Yes ! Agree all </Text>
          <TouchableOpacity>
            <Text style={styles.termsAndConditions}>Terms & Conditions</Text>
          </TouchableOpacity>
        </View> */}
        <RatingButton
          textStyle={styles.authTxt}
          title={loader ? <ActivityIndicator color="white" /> : 'Register'}
          onPress={onSubmit}
          type="gradiant"
          style={styles.authBtn}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.createAccountTxt}>
            Already have account? Login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
