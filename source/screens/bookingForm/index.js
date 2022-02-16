import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import moment from 'moment';
import styles from './styles';
import TimePickerComp from './timePicker';
import CalenderStrip from './calenderStrip';
import {useRoute} from '@react-navigation/core';
import Input from '../../common/components/input';
import Header from '../../common/components/header';
import {useNavigation} from '@react-navigation/native';
import CountryPicker from 'react-native-country-picker-modal';
import DateTimePicker from '@react-native-community/datetimepicker';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import {capitalizeFirstLetter} from '../../common/utils/strings';
import {primaryDark, text, primaryLight} from '../../common/constants/colors';
// icons
import Car from '../../assets/svgs/car.svg';
import Files from '../../assets/svgs/files.svg';
import Carts from '../../assets/svgs/carts.svg';
import BigCar from '../../assets/svgs/bigCar.svg';
import PinIcon from '../../assets/svgs/pinIcon.svg';
import ArrowDown from '../../assets/svgs/arrowDown.svg';
import AudioIcon from '../../assets/svgs/audioIcon.svg';
import YellowStar from '../../assets/svgs/yellowStar.svg';
import PersonIcon from '../../assets/svgs/personIcon.svg';
import EditAddress from '../../assets/svgs/editAddress.svg';
import ProfileImage from '../../assets/pngs/profileImage.png';
import mapImage from '../../assets/pngs/map.png';
import RatingButton from '../../common/components/button/ratingButton';
import LinearGradientWrapper from '../../common/components/LinearGradientWrapper';
const audioRecorderPlayer = new AudioRecorderPlayer();

export default function BookingForm() {
  const navigation = useNavigation();
  const {paramData: params} = useRoute().params;

  // states
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);
  const [camera, setCamera] = useState(null);
  const [mode, setMode] = useState('date');
  const [time, setTime] = useState(null);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [activeTime, setActiveTime] = useState(-1);
  const [audioStats, setAudioStats] = useState(null);
  const [country, setCountry] = useState('Pakistan');
  const [countryCode, setCountryCode] = useState('PK');
  const [selected, setSelected] = useState('Online');

  const onSelect = country => {
    setCountry(country.name);
    setCountryCode(country.cca2);
  };

  const onStopRecord = async () => {
    await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setAudioStats({
      recordSecs: 0,
    });
  };

  const selectImage = () => {
    launchImageLibrary({mediaType: 'photo'}, image => {
      setImage(image);
    });
  };

  const selectFile = () => {
    launchCamera({mediaType: 'photo'}, file => {
      setCamera(file);
    });
  };
  const onStartRecord = async () => {
    const result = await audioRecorderPlayer.startRecorder();
    audioRecorderPlayer.addRecordBackListener(e => {
      setAudioStats({
        recordSecs: e.currentPosition,
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
      });
      return;
    });
    setAudio(result);
  };
  var stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<YellowStar key={i} style={styles.star} />);
  }

  const servicesName = [
    'Ac Repairing',
    'Engine Tuning',
    'Pain Car',
    'Car Wash Service',
    'Full Tuning',
  ];

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

  // console.log({service: params});

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header title="Services Detail" />

      <View style={styles.contentContainer}>
        <View style={styles.profileDetailsContainer}>
          <View style={styles.entryWrapper}>
            <Text style={styles.service}>Service</Text>
            <Text style={styles.role}> params?.title || '-'</Text>
          </View>
          <View style={styles.entryWrapper}>
            <Text style={styles.service}>Machanic</Text>
            <Text style={styles.role}>
              params?.vendor?.firstName || '-' params?.vendor?.lastName
            </Text>
          </View>
          <View style={styles.entryWrapper}>
            <Text style={styles.service}>Phone</Text>
            <Text style={styles.role}>params?.vendor?.phone || '-'</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              'Location Picker',
              'Location picker is in development yet.',
            )
          }>
          <View style={styles.imageContainer}>
            <Image source={mapImage} style={styles.mapImages} />
          </View>
        </TouchableOpacity>

        <View>
          <Text style={styles.dAndT}>Date & Time</Text>
          <TouchableOpacity
            style={styles.dAndTContainer}
            onPress={showDatepicker}>
            <Text>{moment(date).format('MMMM YYYY')}</Text>
            <ArrowDown style={styles.arrow} />
          </TouchableOpacity>
        </View>

        <View style={{height: 70}}>
          <CalenderStrip date={date} />
        </View>

        {/* time selector */}
        <TimePickerComp activeTime={activeTime} setActiveTime={setActiveTime} />
        <View style={{height: 15}}></View>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: text, fontWeight: 'bold'}}>
              Pay Online to get
            </Text>
            <Text style={{color: primaryDark, fontWeight: 'bold'}}> 10%</Text>
            <Text style={{color: text, fontWeight: 'bold'}}> Discount</Text>
          </View>
          <View style={{height: 15}}></View>
          <View
            style={{
              width: '100%',
              height: 80,
              // backgroundColor: '#000',
            }}>
            <TouchableOpacity
              onPress={() => setSelected('Online')}
              style={{
                flexDirection: 'row',
                width: '30%',
                // height: '30%',
                // justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 15,
                  width: 15,
                  borderRadius: 60,
                  borderWidth: 2,
                  borderColor: selected === 'Online' ? primaryDark : '#000',

                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: '80%',
                    width: '80%',
                    borderRadius: 60,
                    backgroundColor:
                      selected === 'Online' ? primaryDark : '#000',
                  }}></View>
              </View>
              <View style={{width: 10}}></View>
              <Text style={{color: text, fontWeight: 'bold'}}>Pay Online</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected('Cash')}
              style={{
                flexDirection: 'row',
                // width: '30%',
                height: '30%',
                // justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 15,
                  width: 15,
                  borderRadius: 60,
                  borderWidth: 2,
                  borderColor: selected === 'Cash' ? primaryDark : '#000',

                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: '80%',
                    width: '80%',
                    borderRadius: 60,
                    backgroundColor: selected === 'Cash' ? primaryDark : '#000',
                  }}></View>
              </View>
              <View style={{width: 10}}></View>
              <Text style={{color: text, fontWeight: 'bold'}}>Pay Cash</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailHeading}>Leave Note (if any)</Text>

          <View style={styles.detailInnerContainer}>
            <TextInput
              onChangeText={e => setMessage(e)}
              placeholder="Write a message.."
              placeholderTextColor={'#000'}
              style={styles.detailTitil}
            />
            <View style={styles.notesIconsContiner}>
              <TouchableOpacity onPress={selectImage} style={{marginRight: 5}}>
                <Files height={25} width={25} />
              </TouchableOpacity>
              {/* <TouchableOpacity onPress={selectFile}>
                <Files height={25} width={25} />
              </TouchableOpacity> */}
              <TouchableOpacity
                onLongPress={onStartRecord}
                onPressOut={onStopRecord}>
                <AudioIcon height={25} width={25} />
              </TouchableOpacity>
            </View>
          </View>
          {audioStats && audioStats?.recordSecs > 0 && (
            <Text style={{color: 'red'}}>
              Recording {audioStats?.recordTime}
            </Text>
          )}
        </View>
        <LinearGradientWrapper style={styles.bookNowButton}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Checkout', {
                paramData: {
                  ...params,
                  name: name,
                  model: model,
                  color: color,
                  shipping_address: {city: address, country: 'Pakistan'},
                  date: date,
                  message: message,
                  qty: 1,
                },
                paramType: 'service',
              })
            }>
            <Text style={styles.bookNow}>Proceed Payment</Text>
          </TouchableOpacity>
        </LinearGradientWrapper>
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

      {/* Vendor Card */}
      <View style={styles.userContainer}>
        <View style={{flex: 1.5}}>
          <Image
            style={styles.image}
            source={
              params?.vendor?.image
                ? {uri: params?.vendor?.image}
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
              params.vendor?.firstName params.vendor?.lastName
            </Text>
            <Text style={styles.occupation}>params?.title || 'Vendor'</Text>
            <RatingButton
              type="gradiant"
              title="Chat"
              style={styles.chatWrapper}
              onPress={() =>
                navigation.navigate('ChatHistory', {screen: 'Chat'})
              }
            />
          </View>
          <View style={styles.viewProfileContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('VendorProfile', {
                  vendorData: params?.vendor,
                })
              }>
              <Text style={styles.viewProfileText}>View Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
