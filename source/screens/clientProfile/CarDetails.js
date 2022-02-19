import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CardView from 'react-native-cardview';
import ImagePicker from 'react-native-image-crop-picker';
import Header from '../../common/components/header';

import styles from './styles';
import profilePic from '../../assets/pngs/profilePic.png';
import YellowStar from '../../assets/svgs/yellowStar.svg';
// 'd0d861bb-027b-46d0-b4d5-f70d24735659.jpg'
import RatingButton from '../../common/components/button/ratingButton';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {editProfile} from '../../redux/actions/auth';
import {client, s3Client} from '../../../App';
import axios from 'axios';
import {useRoute} from '@react-navigation/core';
import {PutObjectCommand} from '@aws-sdk/client-s3';
import {
  TextractClient,
  DetectDocumentTextCommand,
  AnalyzeDocumentCommand,
} from '@aws-sdk/client-textract';
import {t} from 'i18next';
import colors, {
  text,
  primaryDark,
  primaryLight,
} from '../../common/constants/colors';
import RedCarFirst from '../../assets/svgs/redcarfirst.svg';
import RedCarSecond from '../../assets/svgs/redcarsecond.svg';
import Petrol from '../../assets/svgs/petrolsvg.svg';
import RedColor from '../../assets/svgs/redcolorsvg.svg';
import BellIcon from '../../assets/svgs/WhiteBell.svg';

import LinearGradientWrapper from '../../common/components/LinearGradientWrapper';
import TextInputComponent from './TextInputComponent';
import ImagePickerForCar from './ImagePickerForCar';

const CarDetails = ({navigation}) => {
  const {user, token} = useSelector(state => state.auth);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header
        title={'Profile'}
        rightComponent={
          <TouchableOpacity style={{marginTop: 10}}>
            <BellIcon />
          </TouchableOpacity>
        }
      />
      <View style={styles.contentContainer}>
        <View style={{marginTop: -120}}>
          <View style={styles.imageContainer}>
            <Image
              source={
                user?.image && user?.image !== ''
                  ? {uri: user?.image}
                  : profilePic
              }
              style={styles.image}
            />
          </View>
          <View style={styles.profileRatingContainer}>
            <CardView
              elevation={2}
              cornerRadius={50}
              cardElevation={2}
              style={styles.profile}>
              <Text
                style={
                  styles.profileName
                }>{`${user?.firstName} ${user?.lastName}`}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: text}}>Car owner</Text>
              </View>
            </CardView>
          </View>
          <View style={{height: 15}}></View>
          <View
            style={{
              width: '100%',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={{fontWeight: '600'}}>Car Details</Text>
            <Text style={{fontWeight: '600'}}>Add Car Details Manually </Text>
          </View>
          <View style={{height: 15}}></View>
          <TextInputComponent
            title={'Car Brand'}
            icon={<RedCarFirst />}
            placeholder={'Enter Car Brand'}
          />
          <TextInputComponent
            title={'Car Model Year'}
            icon={<RedCarSecond />}
            placeholder={'Enter Car Model Year'}
          />
          <TextInputComponent
            title={'Milage Of Car has Gone'}
            placeholder={'Enter Milage of Car'}
            icon={<Petrol />}
          />
          <TextInputComponent
            title={'Car Color'}
            placeholder={'Enter Car Color'}
            icon={<RedColor />}
          />
          <View style={{height: 15}}></View>
          <View
            style={{
              width: '100%',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <ImagePickerForCar text={'Add/Scan Mulkia'} />
            <ImagePickerForCar text={'Add/Scan Driving Licence'} />
            <ImagePickerForCar text={'Add/Scan Emirates id'} />
          </View>
          <View style={{height: 15, marginTop: 30}}></View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CarDetails;
