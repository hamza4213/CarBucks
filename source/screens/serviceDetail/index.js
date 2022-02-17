import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Header from '../../common/components/header';
import styles from './style';
import ProfileImage from '../../assets/pngs/profileImage.png';
import mapImage from '../../assets/pngs/map.png';
import LinearGradient from 'react-native-linear-gradient';
import {primaryDark, primaryLight} from '../../common/constants/colors';
import PersonIcon from '../../assets/svgs/personIcon.svg';
import PinIcon from '../../assets/svgs/pinIcon.svg';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/core';

import style from '../home/style';
import YellowStar from '../../assets/svgs/yellowStar.svg';
import AvailableCheck from '../../assets/svgs/availableCheck.svg';
import RatingButton from '../../common/components/button/ratingButton';
import {capitalizeFirstLetter} from '../../common/utils/strings';
import {ChatApi} from '../../redux/apis';
import Video from 'react-native-video';
import SplashFile from '../../assets/splash.mp4';
const chatApi = new ChatApi();

export default function ServiceDetails({}) {
  const navigation = useNavigation();
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState('Basic');
  const stars = rating => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<YellowStar key={i} style={styles.star} />);
    }

    return stars;
  };

  const servicesName = [
    'Ac Repairing',
    'Engine Tuning',
    'Pain Car',
    'Car Wash Service',
    'Full Tuning',
  ];

  const params = useRoute().params;

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setShow(Platform.OS === 'ios');
    if (mode === 'date') setDate(currentDate);
    else setTime(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const goToChat = async () => {
    try {
      setLoading(true);

      let res = await chatApi.fetchRoomId(params?.item?.vendor?._id);
      const {
        data: {status, result},
      } = res;

      navigation.navigate('ChatHistory', {
        screen: 'Chat',
        params: {
          roomId: result?.id,
        },
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Header title="Services Detail" />
      <View style={styles.contentContainer}>
        <View style={styles.contentWrapper}>
          <View style={{height: 15}}></View>
          <Video
            repeat
            resizeMode="cover"
            fullscreen
            source={SplashFile}
            style={{height: 150, width: '100%', borderRadius: 10}}
          />
          <View style={styles.profile}>
            <View style={styles.reviewCountWrapper}>
              <View style={styles.starWrapper}>
                {stars(params?.item?.score)}
              </View>
              <Text style={styles.reviewCount}>(4.2K)</Text>
            </View>
          </View>

          <View style={styles.detailWrapper}>
            <Text style={styles.desHeading}>Description</Text>
            <Text style={styles.detailText}>
              {params?.item?.details?.description
                ? params.item.details.description
                : 'N/A'}
            </Text>
          </View>

          <View style={styles.availableServices}>
            <Text style={styles.desHeading}>Available Service</Text>
            <View style={styles.servicesContainer}>
              {servicesName.map((item, index) => (
                <View key={index} style={styles.serviceWrapper}>
                  <AvailableCheck />
                  <Text style={{marginLeft: 8}}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.availableServices}>
            <Text style={styles.desHeading}>Select Service Packages</Text>
            <View style={{height: 15}}></View>
            <View style={{width: '100%', height: 110, backgroundColor: '#fff'}}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <View style={{width: '60%', flexDirection: 'row'}}>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 60,
                      borderWidth: 1,
                      borderColor: primaryLight,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => setSelected('Basic')}
                      style={{
                        height: 15,
                        width: 15,
                        borderRadius: 20,
                        backgroundColor:
                          selected === 'Basic' ? primaryLight : null,
                      }}></TouchableOpacity>
                  </View>
                  <Text style={{marginLeft: 5}}>Basic Service</Text>
                </View>
                <View
                  style={{
                    width: '40%',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: primaryLight}}>$ 100</Text>
                </View>
              </View>
              <View style={{height: 5}}></View>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <View style={{width: '60%', flexDirection: 'row'}}>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 60,
                      borderWidth: 1,
                      borderColor: primaryLight,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => setSelected('Premium')}
                      style={{
                        height: 15,
                        width: 15,
                        borderRadius: 20,
                        backgroundColor:
                          selected === 'Premium' ? primaryLight : null,
                      }}></TouchableOpacity>
                  </View>
                  <Text style={{marginLeft: 5}}>Premium Service</Text>
                </View>
                <View style={{width: '40%', alignItems: 'center'}}>
                  <Text style={{color: primaryLight}}>$ 100</Text>
                </View>
              </View>
            </View>
          </View>
          <RatingButton
            type="gradiant"
            title="Book Now"
            style={styles.nextBtn}
            textStyle={styles.textStyle}
            onPress={() =>
              navigation.navigate('BookingForm', {
                paramData: params?.item,
              })
            }
          />
        </View>
      </View>
      {show && (
        <DateTimePicker
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={onChange}
          testID="dateTimePicker"
          value={(mode === 'date' ? date : time) || new Date()}
        />
      )}

      <View style={styles.userContainer}>
        <View style={{flex: 1.5}}>
          <Image
            style={styles.image}
            source={
              params?.item?.details?.image
                ? {uri: params?.item?.details?.image[0]}
                : ProfileImage
            }
          />
        </View>
        <View
          style={{
            flex: 3,
            paddingLeft: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 2}}>
            <Text style={styles.name} numberOfLines={1}>
              params?.item?.vendor?.firstName params?.item?.vendor?.lastName
            </Text>
            <Text style={styles.occupation}>{params?.item?.title}</Text>
            <RatingButton
              isLoading={loading}
              type="gradiant"
              title="Chat"
              style={styles.chatWrapper}
              onPress={goToChat}
            />
          </View>
          <View style={styles.viewProfileContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('VendorProfile', {
                  vendorData: params.item.vendor,
                })
              }>
              <Text style={styles.viewProfileText}>View Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text>Hello Video</Text>
    </ScrollView>
  );
}
