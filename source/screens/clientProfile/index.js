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

export default function ClientProfile() {
  const [imgUrl, setImgUrl] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const params = useRoute().params;
  const {user, token} = useSelector(state => state.auth);

 
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
      <Header menu title={t('myProfile')} />

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
            </CardView>
          </View>
          <View style={styles.buttonContainer}>
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
          ) : null}
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
