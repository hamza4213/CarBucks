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
import DirectionIcon from '../../assets/svgs/directionicon.svg';
import ImagesInRow from '../../common/components/ServiceComponents/ImagesInRow';
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
          <View style={{height: 15}}></View>
          <ImagesInRow />
          <View style={styles.profile}>
            <View style={styles.reviewCountWrapper}>
              <View style={styles.starWrapper}>
                {/* {stars(params?.item?.score)} */}
                {/* Changing the upper line */}
                <YellowStar style={styles.star} />
                <YellowStar style={styles.star} />
                <YellowStar style={styles.star} />
                <YellowStar style={styles.star} />
              </View>
              <Text style={styles.reviewCount}>(4.2K)</Text>
            </View>
          </View>

          <View style={styles.detailWrapper}>
            <Text style={styles.desHeading}>Description</Text>
            {/* Changing Description for now */}
            <Text style={styles.detailText}>
              {/* {params?.item?.details?.description
                ? params.item.details.description
                : 'N/A'} */}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's
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
          <View style={{height: 15}}></View>
          <TouchableOpacity
            onPress={() => navigation.navigate('SelectServicePackages')}
            style={{
              width: '90%',
              height: 45,
              borderRadius: 10,
              backgroundColor: '#fff',
              alignSelf: 'center',
              flexDirection: 'row',
              paddingHorizontal: 15,
              justifyContent: 'space-between',
              alignItems: 'center',
              shadowOffset: {width: 100, height: 50},
              shadowColor: '#000',
              shadowOpacity: 1,
              elevation: 15,
            }}>
            <Text>Select Service Packages</Text>
            <DirectionIcon />
          </TouchableOpacity>
          <View style={{height: 15}}></View>
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
              // onPress={() => navigation.navigate('Chat')}
            />
          </View>
          <View style={styles.viewProfileContainer}>
            <TouchableOpacity
              // onPress={() =>
              //   navigation.navigate('VendorProfile', {
              //     // vendorData: params.item.vendor,
              //     vendorData: {
              //       firstName: 'Hamza',
              //       lastName: 'Shabbir',
              //     },
              //   })
              // }
              onPress={() => navigation.navigate('ClientProfile')}>
              <Text style={styles.viewProfileText}>View Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text>Hello Video</Text>
    </ScrollView>
  );
}
