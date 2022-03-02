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
  const [loader, setLoader] = useState(null);
  const [country, setCountry] = useState({
    callingCode: ['92'],
    cca2: 'PK',
    currency: ['PKR'],
    flag: 'flag-pk',
    name: 'Pakistan',
    region: 'Asia',
    subregion: 'Southern Asia',
  });
  const [userdata, setUserdata] = useState({});
  const [heared, setHeared] = useState();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [promoCode, setPromoCode] = useState(null);
  const [countryCode, setCountryCode] = useState('PK');
  const onSelect = country => {
    if (userdata.hasOwnProperty('phone')) {
      setUserdata({...userdata, phone: ''});
    }
    console.log('country', country);
    setCountry(country);
    setCountryCode(country.cca2);
  };

  const onSubmit = () => {
    // console.log('userData', userdata);
    // console.log('Heared', heared);
    // console.log('country on submitt', country);
    setLoader(true);
    const data = {...userdata, country: country.name};
    console.log('UserData is ', data);
    if (isVerified(data)) {
      console.log('verified');
      if (isChecked) {
        dispatch(register({...data}, stopLoader));
      } else {
        ShowToast(`Please Confirm Term and Conditions!`);
        stopLoader();
      }
    } else {
      stopLoader();
    }
  };
  const stopLoader = isSend => {
    setLoader(false);

    if (isSend) {
      navigation.navigate('emailVerify', {email: userdata.email});
    }
  };
  const isVerified = data => {
    if (data.hasOwnProperty('firstName')) {
      if (data.hasOwnProperty('lastName')) {
        if (data.hasOwnProperty('email')) {
          let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (data.email.match(regexEmail)) {
            if (data.hasOwnProperty('phone') && data.phone.length > 10) {
              if (heared != undefined) {
                if (data.hasOwnProperty('password')) {
                  if (data.password.length >= 8) {
                    if (data.hasOwnProperty('passwordConfirm')) {
                      if (data.passwordConfirm.length >= 8) {
                        if (data.password != data.passwordConfirm) {
                          ShowToast(
                            `Password and confirm password doesn't match`,
                          );
                        } else {
                          return true;
                        }
                      } else {
                        ShowToast(`Confirm Password must be 8 characters!`);
                      }
                    } else {
                      ShowToast(`Enter Confirm Password!`);
                    }
                  } else {
                    ShowToast(`Password must be 8 characters!`);
                  }
                } else {
                  ShowToast(`Enter Password`);
                  return false;
                }
              } else {
                ShowToast(`Please Choose How did you hear about us!`);
              }
            } else {
              ShowToast(`Enter a valid Phone`);
              return false;
            }
          } else {
            ShowToast(`Enter Valid Email!`);
            return false;
          }
        } else {
          ShowToast(`Email required!`);
          return false;
        }
      } else {
        ShowToast(`Enter last Name!`);
        return false;
      }
    } else {
      ShowToast(`Enter First Name!`);
      return false;
    }
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
          <View style={styles.CountryPicker}>
            <CountryPicker
              {...{
                countryCode,
                withCountryNameButton: true,
                withFilter: true,
                // withCallingCode: true,
                // withCallingCodeButton: true,
                withModal: true,
                theme: {
                  backgroundColor: 'white',
                  onBackgroundTextColor: textDark,
                  fontSize: 15,
                },
                onSelect,
              }}
            />
          </View>
          <TextInputSignup
            maxLength={10}
            // value={usphone}
            callingCode={country.callingCode}
            onChangeText={setUserdata}
            state={userdata}
            name="phone"
            style={styles.inputStyle}
            keyboardType="phone-pad"
            placeholder="Phone here"
            RightIconActive={<PhoneRed />}
            RightIcon={<Phone />}
            LeftIcon={
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
          <HearInput heared={heared} setHeared={setHeared} />
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
          <TextInputSignup
            placeholder="Confirm Password"
            // value={password}
            style={styles.inputStyle}
            onChangeText={setUserdata}
            state={userdata}
            name="passwordConfirm"
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
        <View style={styles.termsAndConditionsTextWrapper}>
          <Checkbox isChecked={isChecked} setChecked={setChecked} />

          <Text style={styles.yesIAgree}>Yes ! Agree all </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('TermsAndConditions')}>
            <Text style={styles.termsAndConditions}>Terms & Conditions</Text>
          </TouchableOpacity>
        </View>
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
