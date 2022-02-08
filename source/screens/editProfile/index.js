import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styles from './styles';
import GradiantLogo from '../../assets/svgs/gradiantLogo.svg';
import Input from '../../common/components/input';
import Button from '../../common/components/button';
import {primaryLight, textDark} from '../../common/constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {editProfile} from '../../redux/actions/auth';
import showToast from '../../common/components/toast/simpleToast';
import LeftIcon from '../../assets/svgs/back.svg';
import Header from '../../common/components/header';
import Edit from '../../assets/svgs/edit.svg';
import EditActive from '../../assets/svgs/editActive.svg';
import AuthInput from '../../common/components/input/authInput';
import CountryPicker from 'react-native-country-picker-modal';
import RatingButton from '../../common/components/button/ratingButton';

export default function EditProfile() {
  const navigation = useNavigation();
  const [country, setCountry] = useState('Pakistan');
  const [countryCode, setCountryCode] = useState('PK');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const handleUpdateProfile = () => {
    setLoader(true);
    const data = {
      firstName,
      lastName,
      phone,
    };
    dispatch(editProfile(data, stopLoader));
  };
  const stopLoader = isUpdated => {
    setLoader(false);

    if (isUpdated) {
      showToast('Profile successfuly updated');
    }
  };

  useEffect(() => {
    if (user) {
      setFirstName(user?.firstName);
      setLastName(user?.lastName);
      setPhone(user?.phone);
    }
  }, [user]);

  const onSelect = country => {
    setCountry(country.name);
    setCountryCode(country.cca2);
  };

  return (
    <ScrollView>
      <Header auth>
        <Text style={styles.title}>Edit Profile</Text>
      </Header>
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <GradiantLogo />
        </View>
        <View style={styles.inputContainer}>
          <AuthInput
            placeholder="Email"
            RightIcon={<Edit />}
            RightIconActive={<EditActive />}
            onChangeText={setFirstName}
            value={firstName}
            style={styles.mb20}
            keyboardType="email-address"
          />
          <AuthInput
            placeholder="Email"
            RightIcon={<Edit />}
            RightIconActive={<EditActive />}
            onChangeText={setLastName}
            value={lastName}
            style={styles.mb20}
            keyboardType="email-address"
          />
          <AuthInput
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
          />
          <RatingButton
            textStyle={styles.authTxt}
            title={loader ? <ActivityIndicator color="white" /> : 'Save'}
            onPress={handleUpdateProfile}
            type="gradiant"
            style={styles.authBtn}
          />
        </View>
      </View>
    </ScrollView>
  );
}
