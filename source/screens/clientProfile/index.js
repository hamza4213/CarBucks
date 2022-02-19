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
import LocationIcon from '../../assets/svgs/LocationIconshort.svg';
import Editicon from '../../assets/svgs/Editiconshort.svg';
import CalIcon from '../../assets/svgs/calshorticon.svg';
import BellIcon from '../../assets/svgs/WhiteBell.svg';
import RedEditIcon from '../../assets/svgs/RedEditIcon.svg';
import LinearGradientWrapper from '../../common/components/LinearGradientWrapper';
export default function ClientProfile() {
  const [imgUrl, setImgUrl] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const params = useRoute().params;
  const {user, token} = useSelector(state => state.auth);
  const [profileinfo, setProfileinfo] = useState('Profile');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    params?.tabIndex ? setActiveTab(params?.tabIndex) : null;
  }, []);

  var stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<YellowStar key={i} style={styles.star} />);
  }

  const onPickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        const formData = new FormData();
        formData.append('image', {
          type: image.mime,
          name: image.path.split('/').pop(),
          uri: image.path,
        });

        dispatch(editProfile(formData));
      })
      .catch(error => {
        console.log('Picking Image Failed: ', error);
      });
  };

  const scanHandler = async () => {
    try {
      const image = await ImagePicker.openCamera({
        // const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });

      let imageName = image.path.split('/').pop();
      let file = {
        type: image.mime,
        name: imageName,
        uri: image.path,
      };

      const options = {
        Key: imageName,
        Bucket: process.env.S3_BUCKET,
        Body: file,
      };

      setLoading(true);
      const res = await s3Client.send(new PutObjectCommand(options));

      const params = {
        Document: {
          S3Object: {
            Bucket: 'cdn.carbucks.com',
            Name: imageName,
          },
        },
        FeatureTypes: ['TABLES'],
      };

      const detectDocumentTextCommand = new DetectDocumentTextCommand(params);
      const data = await client.send(detectDocumentTextCommand);

      let text = '';
      data?.Blocks?.map(block => {
        if (block.BlockType === 'LINE') {
          if (text !== '') text = `${text}\n${block.Text}`;
          else text = `${block.Text}`;
        }
      });

      let s3ImageLink = `https://s3.amazonaws.com/cdn.carbucks.com/${imageName}`;

      let dataTopass = {};

      if (activeTab === 0) {
        dataTopass = {
          DrivingLicence: {
            image: s3ImageLink,
            text,
          },
        };
      }
      if (activeTab === 1) {
        dataTopass = {
          EmiratesID: {
            image: s3ImageLink,
            text,
          },
        };
      }
      if (activeTab === 2) {
        dataTopass = {
          mulkiya: {
            image: s3ImageLink,
            text,
          },
        };
      }

      dispatch(editProfile(dataTopass));

      Alert.alert('SUCCESS', text);

      setLoading(false);
    } catch (error) {
      setLoading(false);

      Alert.alert(
        'ERROR',
        error?.message || 'Error occured scanning document.',
      );
    }
  };

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
          <TouchableOpacity onPress={onPickImage} style={styles.imageContainer}>
            <Image
              source={
                user?.image && user?.image !== ''
                  ? {uri: user?.image}
                  : profilePic
              }
              style={styles.image}
            />
            <View
              style={{
                position: 'absolute',
                backgroundColor: '#fff',
                alignSelf: 'flex-end',
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                bottom: 0,
                right: -10,
              }}>
              <RedEditIcon />
            </View>
          </TouchableOpacity>
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
                <YellowStar style={styles.star} />
                <YellowStar style={styles.star} />
                <YellowStar style={styles.star} />
                <Text>(4.2k)</Text>
              </View>
            </CardView>
          </View>
          <Text style={{alignSelf: 'center', color: text}}>
            Car Mechanic / Engine Specialist
          </Text>
          <View
            style={{
              width: '100%',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '30%',
                // justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: 'bold'}}>1000+</Text>
              <Text>Projects Done</Text>
            </View>
            <View
              style={{
                width: '30%',
                // justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: 'bold'}}>5000+</Text>
              <Text>Working Hours</Text>
            </View>
            <View
              style={{
                width: '30%',
                // justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: 'bold'}}>300+</Text>
              <Text>Reviews</Text>
            </View>
          </View>
          <View style={{height: 15}}></View>
          <View
            style={{
              width: '100%',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              height: 60,
              borderRadius: 10,
              shadowOffset: {width: 100, height: 50},
              shadowColor: '#000',
              shadowOpacity: 1,
              elevation: 15,
              backgroundColor: '#fff',
            }}>
            <TouchableOpacity
              onPress={() => setProfileinfo('Profile')}
              style={{
                width: '30%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:
                  profileinfo === 'Profile' ? primaryLight : null,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontWeight: profileinfo === 'Profile' ? 'bold' : 'normal',
                  color: profileinfo === 'Profile' ? 'white' : 'black',
                }}>
                Profile Info
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setProfileinfo('Reviews')}
              style={{
                width: '30%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:
                  profileinfo === 'Reviews' ? primaryLight : null,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontWeight: profileinfo === 'Reviews' ? 'bold' : 'normal',
                  color: profileinfo === 'Reviews' ? 'white' : 'black',
                }}>
                Reviews
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setProfileinfo('Others')}
              style={{
                width: '30%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: profileinfo === 'Others' ? primaryLight : null,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontWeight: profileinfo === 'Others' ? 'bold' : 'normal',
                  color: profileinfo === 'Others' ? 'white' : 'black',
                }}>
                Others
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 15}}></View>
          <Text style={{alignSelf: 'center', color: text}}>
            This is Dominic Charles, I have 12 years Experience, Lorem Ipsum is
            simply dummy text of the printing and typesetting industry
          </Text>
          <View style={{height: 15}}></View>
          <View
            style={{
              width: '100%',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              alignItems: 'center',
              // height: 60,
              // backgroundColor: 'teal',
            }}>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 30,
                shadowOffset: {width: 100, height: 50},
                shadowColor: '#000',
                shadowOpacity: 1,
                elevation: 15,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <LocationIcon />
            </View>
            <Text> 4152 Cessna Drive, United States</Text>
            <TouchableOpacity>
              <Editicon />
            </TouchableOpacity>
          </View>
          <View style={{height: 15}}></View>
          <View
            style={{
              width: '100%',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              alignItems: 'center',
              // height: 60,
              // backgroundColor: 'teal',
            }}>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 30,
                shadowOffset: {width: 100, height: 50},
                shadowColor: '#000',
                shadowOpacity: 1,
                elevation: 15,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <CalIcon />
            </View>
            <Text> +1 XXXXX YYYYY, +1 XXXXX YYYYY</Text>
            <TouchableOpacity>
              <Editicon />
            </TouchableOpacity>
          </View>
          <View style={{height: 15}}></View>
          <LinearGradientWrapper
            style={{
              width: '60%',
              height: 40,
              borderRadius: 15,
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CarDetails')}
              style={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Enter Your Car Details</Text>
            </TouchableOpacity>
          </LinearGradientWrapper>
          <View style={{height: 15, marginTop: 30}}></View>
          {/* <View style={styles.buttonContainer}>
            <RatingButton
              onPress={() => navigation.navigate('EditProfile')}
              title={t('edit')}
              type="gradiant"
              style={styles.editBtn}
            />
            <RatingButton
              onPress={() => navigation.navigate('ResetPassword')}
              title={t('resetPassword')}
              type="gradiant"
              style={styles.editBtn}
            />
          </View>

          <CardView
            elevation={2}
            cornerRadius={20}
            cardElevation={2}
            style={styles.tabs}>
            <TouchableOpacity
              onPress={() => setActiveTab(0)}
              style={activeTab === 0 ? styles.focusedTab : styles.tab}>
              <Text
                style={activeTab === 0 ? styles.ActiveTabText : styles.tabText}>
                {t('drivingLicence')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActiveTab(1)}
              style={activeTab === 1 ? styles.focusedTab : styles.tab}>
              <Text
                style={activeTab === 1 ? styles.ActiveTabText : styles.tabText}>
                {t('emiratesId')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActiveTab(2)}
              style={activeTab === 2 ? styles.focusedTab : styles.tab}>
              <Text
                style={activeTab === 2 ? styles.ActiveTabText : styles.tabText}>
                {t('mulkiya')}
              </Text>
            </TouchableOpacity>
          </CardView>

          {activeTab === 0 ? (
            <Text style={styles.profileDescription}>
              {user?.customer?.DrivingLicence?.text !== ''
                ? user?.customer?.DrivingLicence?.text
                : 'No Driving Licence id found'}
            </Text>
          ) : activeTab === 1 ? (
            <View style={styles.addressWrapper}>
              <Text style={styles.addressText}>
                {user?.customer?.EmiratesID?.text !== ''
                  ? user?.customer?.EmiratesID?.text
                  : 'No Emirates  id found'}
              </Text>
            </View>
          ) : activeTab === 2 ? (
            <View style={styles.addressWrapper}>
              <Text style={styles.addressText}>
                {user?.customer.mulkiya.text !== ''
                  ? user?.customer?.mulkiya?.text
                  : 'No Mulkiya id found'}
              </Text>
            </View>
          ) : null} */}
          {/* {loading ? (
            <RatingButton
              type="gradiant"
              title={t('scanning')}
              onPress={() => {}}
              style={styles.scaneButton}
              textStyle={styles.btnText}
            />
          ) : (
            <RatingButton
              type="gradiant"
              title={t('scaneDocument')}
              onPress={scanHandler}
              style={styles.scaneButton}
              textStyle={styles.btnText}
            />
          )} */}
        </View>
      </View>
    </ScrollView>
  );
}
