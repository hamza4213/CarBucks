import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
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

import {capitalizeFirstLetter} from '../../common/utils/strings';
import {primaryDark} from '../../common/constants/colors';
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

const audioRecorderPlayer = new AudioRecorderPlayer();

export default function BookingForm() {
  const navigation = useNavigation();
  const {paramData} = useRoute().params;
  // console.log('param in bookinForm', paramData);
  // states
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [time, setTime] = useState(null);
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);
  const [camera, setCamera] = useState(null);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [activeTime, setActiveTime] = useState(-1);
  const [audioStats, setAudioStats] = useState(null);
  const [country, setCountry] = useState('Pakistan');
  const [countryCode, setCountryCode] = useState('PK');

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

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header
        small
        title="Service Details"
        rightComponent={
          <Image source={ProfileImage} style={styles.headerImage} />
        }></Header>
      <View style={styles.contentContainer}>
        <View style={styles.addressUserContainer}>
          <View style={{flex: 1.2}}>
            <Image
              style={styles.image}
              source={
                paramData?.details?.image
                  ? {uri: paramData.details.image}
                  : ProfileImage
              }
            />
          </View>

          <View style={styles.addressAboutContainer}>
            <Text style={styles.addressUserName}>
              {paramData.vendor?.firstName ? paramData.vendor.firstName : '-'}{' '}
              {paramData?.vendor?.lastName ? paramData.vendor.lastName : ''}{' '}
            </Text>
            <Text style={styles.addressUserOccupation}>
              {paramData?.title ? paramData.title : 'N/A'}
            </Text>

            <View style={styles.addressReviewCountWrapper}>
              <View style={styles.starWrapper}>{stars}</View>
              <Text style={styles.reviewCount}>(4.2K)</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Text style={styles.userPrice}>
              $ {paramData?.details?.price || '20'}/-
            </Text>
          </View>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.detailHeading}>Car Details</Text>
          <View style={styles.detailInnerContainer}>
            <TextInput
              onChangeText={e => setName(e)}
              placeholder="Name"
              style={styles.detailTitil}
            />
            <Car style={styles.detailIcon} />
          </View>
          <View style={styles.detailInnerContainer}>
            <TextInput
              onChangeText={e => setModel(e)}
              placeholder="Model"
              style={styles.detailTitil}
            />
            <BigCar style={styles.detailIcon} />
          </View>
          <View style={styles.detailInnerContainer}>
            <TextInput
              onChangeText={e => setColor(e)}
              placeholder="Color"
              style={styles.detailTitil}
            />
            <Carts style={styles.detailIcon} />
          </View>
          {/* <Text style={styles.addressInputHeading}>Address</Text> */}
          <View cornerRadius={15} style={styles.addressInputContainer}>
            <TextInput
              onChangeText={e => setAddress(e)}
              // placeholderTextColor="white"
              placeholder="Address"
              style={styles.adressInput}
            />
            <EditAddress style={styles.editAddress} />
          </View>
          <View
            cornerRadius={15}
            style={[styles.addressInputContainer, {marginTop: 15}]}>
            <View
              style={{
                flexDirection: 'row',
                width: '50%',
                alignItems: 'center',
              }}>
              <CountryPicker
                {...{
                  countryCode,
                  withFilter: true,
                  withCallingCode: true,
                  withCallingCodeButton: true,
                  withModal: true,
                  theme: {
                    backgroundColor: primaryDark,
                    onBackgroundTextColor: 'white',
                    fontSize: 13,
                  },

                  onSelect,
                  placeholder: 'pakistan',
                }}
              />
              <Text>{country}</Text>
            </View>

            <EditAddress style={[styles.editAddress, {marginVertical: 11}]} />
          </View>
        </View>

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
        <View style={styles.detailContainer}>
          <Text style={styles.detailHeading}>Leave Note (if any)</Text>

          <View style={styles.detailInnerContainer}>
            <TextInput
              onChangeText={e => setMessage(e)}
              placeholder="Write a message.."
              style={styles.detailTitil}
            />
            <View style={styles.notesIconsContiner}>
              <TouchableOpacity onPress={selectImage}>
                <Files height={25} width={25} />
              </TouchableOpacity>
              <TouchableOpacity onPress={selectFile}>
                <Files height={25} width={25} />
              </TouchableOpacity>
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

        <TouchableOpacity
          style={styles.bookNowButton}
          onPress={() =>
            navigation.navigate('Checkout', {
              paramData: {
                ...paramData,
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
          <Text style={styles.bookNow}>Submit</Text>
        </TouchableOpacity>
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
    </ScrollView>
  );
}
