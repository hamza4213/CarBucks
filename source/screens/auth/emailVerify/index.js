import React from 'react';
import {View, ScrollView, Text, ActivityIndicator} from 'react-native';
import GradiantLogo from '../../../assets/svgs/gradiantLogo.svg';

import {useState} from 'react';
import {ImageBackground} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import authBackground from '../../../assets/pngs/authBackground.png';
import {useDispatch} from 'react-redux';
import styles from './styles';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {primaryDark, text} from '../../../common/constants/colors';
import Button from '../../../common/components/button';
import {verifyEmail} from '../../../redux/actions';
import ShowToast from '../../../common/components/toast/simpleToast';
import RatingButton from '../../../common/components/button/ratingButton';
import Header from '../../../common/components/header';
import VerifyEmailIcon from '../../../assets/svgs/VerifyEmailSvg.svg';
const CELL_COUNT = 6;
export default function EmailVerify() {
  const params = useRoute().params;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [codeInputProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [loader, setLoader] = useState(null);

  const onSubmit = () => {
    setLoader(true);

    dispatch(verifyEmail(params?.email, value, stopLoader));
  };
  const stopLoader = data => {
    setLoader(false);

    if (data?.status === 'success') {
      ShowToast(data?.message);
      navigation.navigate('Login');
    }
  };
  return (
    <ScrollView style={styles.fullScreen}>
      <Header>
        <Text style={styles.authTitle}>One Time Password</Text>
      </Header>
      {/* <ImageBackground source={authBackground} style={styles.container}> */}
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <VerifyEmailIcon />
        </View>
        {/* <Text style={styles.heading}>Verify Email</Text> */}
        <Text style={{alignSelf: 'center', fontSize: 18, color: text}}>
          Please enter the verification code we sent to your email address
        </Text>
        <Text style={{fontWeight: '600', alignSelf: 'center'}}>
          davidanderson@gmail.com
        </Text>
        <View style={styles.codeInputWrapper}>
          <CodeField
            {...codeInputProps}
            ref={ref}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
        <RatingButton
          title={loader ? <ActivityIndicator color="red" /> : 'SUBMIT'}
          onPress={onSubmit}
          type="gradiant"
          style={styles.authBtn}
          textStyle={styles.authTxt}
        />

        {/* <Button
            disabled={value.length < 6}
            title={loader ? <ActivityIndicator color="red" /> : 'Verify'}
            onPress={onSubmit}
            bgColor={value.length < 6 ? 'gray' : 'white'}
            color={primaryDark}
            style={styles.signupButton}
          /> */}
      </View>
      {/* </ImageBackground> */}
    </ScrollView>
  );
}
