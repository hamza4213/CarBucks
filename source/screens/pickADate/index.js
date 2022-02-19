import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import RatingButton from '../../common/components/button/ratingButton';
import Header from '../../common/components/header';
import styles from './styles';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/core';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Files from '../../assets/svgs/files.svg';
import AudioIcon from '../../assets/svgs/audioIcon.svg';
import {launchImageLibrary} from 'react-native-image-picker';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import DateTimePicker from '@react-native-community/datetimepicker';
import TimePickerComp from '../bookingForm/timePicker';
import {text} from '../../common/constants/colors';

export default function PickADate() {
  const navigation = useNavigation();
  const [flag, setFlag] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedDates, setSelectedDate] = useState(null);
  const [note, setNote] = useState('');
  const [activeTime, setActiveTime] = useState(-1);
  const [mode, setMode] = useState('date');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);
  const [lisenceImage, setLisenceImage] = useState(null);
  const [passportImage, setPassportImage] = useState(null);
  const [audioStats, setAudioStats] = useState(null);
  const [isStartTime, setIsStartTime] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');

  const audioRecorderPlayer = new AudioRecorderPlayer();

  const {rentCarData} = useRoute().params;

  function getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format('YYYY-MM-DD'));
      currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
  }

  const dayPressHandler = day => {
    if (flag) {
      setSelectedDate({
        [day.dateString]: {
          color: 'red',
          startingDay: true,
          textColor: 'white',
        },
      });
      setStartDate(day.dateString);
      setFlag(false);
    } else {
      let arr = getDates(startDate, day.dateString);
      let obj = {};
      arr.map((date, i) => {
        obj[date] = {
          color: 'red',
          textColor: 'white',
          startingDay: i === 0,
          endingDay: i === arr.length - 1,
        };
      });

      setEndDate(day.dateString);
      setSelectedDate(obj);
      setFlag(true);
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    if (isStartTime) {
      setStartTime(currentDate);
    } else {
      setEndTime(currentDate);
    }

    setShow(false);
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

  const selectImage = type => {
    launchImageLibrary({mediaType: 'photo'}, image => {
      type === 'image'
        ? setImage(image)
        : type === 'licenseImage'
        ? setLisenceImage(image)
        : setPassportImage(image);
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

  const onStopRecord = async () => {
    await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setAudioStats({
      recordSecs: 0,
    });
  };
  return (
    <ScrollView>
      <Header title="Pickup time" />

      <View style={styles.contentContainer}>
        <Calendar
          style={styles.calendar}
          onDayPress={day => dayPressHandler(day)}
          markingType={'period'}
          markedDates={selectedDates}
          monthFormat={'yyyy MMMM'}
          onMonthChange={month => {}}
          hideExtraDays={true}
          disableMonthChange={true}
          firstDay={1}
          onPressArrowLeft={subtractMonth => subtractMonth()}
          onPressArrowRight={addMonth => addMonth()}
          disableAllTouchEventsForDisabledDays={true}
          enableSwipeMonths={true}
        />

        <View style={styles.DateInText}>
          <View style={styles.timeDateFrom}>
            <TouchableOpacity onPress={() => setShowCalendar(true)}>
              <Text style={styles.dateHeading}>From</Text>
              <Text style={styles.textDate}>{startDate || 'yyyy-mm-dd'}</Text>

              {/* <Text style={styles.textDate}>{startDate.toDateString()}</Text> */}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowCalendar(true)}>
              <Text style={styles.dateHeading}>To</Text>
              <Text style={styles.textDate}>{endDate || 'yyyy-mm-dd'}</Text>
              {/* <Text style={styles.textDate}>{endDate.toDateString()}</Text> */}
            </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={() => {
                setIsStartTime(true);
                setShow(true);
              }}
              style={styles.timeFrom}>
              <Text style={styles.dateHeading}>Select Time</Text>
              <Text style={styles.textDate}>
                {startTime ? moment(startTime).format('hh:mm A') : 'hh-mm'}
              </Text>
            </TouchableOpacity> */}
          </View>
          <View style={styles.timeDataTo}>
            <View>
              {/* <Text style={styles.dateHeading}>To</Text>
              <Text style={styles.textDate}>{endDate || 'yyyy-mm-dd'}</Text> */}
            </View>
            {/* <TouchableOpacity
              onPress={() => {
                setIsStartTime(false);
                setShow(true);
              }}
              style={styles.timeFrom}>
              <Text style={styles.dateHeading}>Select Time</Text>
              <Text style={styles.textDate}>
                {endTime ? moment(endTime).format('hh:mm A') : 'hh-mm'}
              </Text>
            </TouchableOpacity> */}
            <TimePickerComp
              activeTime={activeTime}
              setActiveTime={setActiveTime}
            />
          </View>
        </View>
        {/* <View style={styles.detailInnerContainer}>
          <TextInput
            value={pickupLocation}
            onChangeText={setPickupLocation}
            placeholder="Enter Pickup Location"
            style={styles.detailTitil}
          />
        </View> */}
        {/* <View style={styles.detailInnerContainer}>
          <TextInput
            value={dropLocation}
            onChangeText={setDropLocation}
            placeholder="Enter Drop Location"
            style={styles.detailTitil}
          />
        </View> */}

        {/* <View style={styles.detailInnerContainer}>
          <TextInput
            value={note}
            onChangeText={setNote}
            placeholder="Write a note.."
            style={styles.detailTitil}
          />
          <View style={styles.notesIconsContiner}>
            <TouchableOpacity
              onPress={() => selectImage('image')}
              style={{marginRight: 5}}>
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
        </View> */}

        {/* <View style={styles.btnContainer}>
          <RatingButton
            onPress={() => selectImage('passportImage')}
            style={styles.addressBtn}
            textStyle={styles.addressTxt}
            title="Upload Passport"
          />
          <RatingButton
            onPress={() => selectImage('licenseImage')}
            style={styles.addressBtn}
            textStyle={styles.addressTxt}
            title="Upload License"
          />
        </View> */}
        <View style={{height: 15}}></View>
        <Text>Note</Text>
        <TextInput
          style={{
            backgroundColor: 'lightgrey',
            width: '100%',
            height: 50,
            borderRadius: 10,
            opacity: 0.7,
          }}
          placeholder="Type Here"
          placeholderTextColor={text}
        />
        <RatingButton
          title="Next"
          type="gradiant"
          style={{paddingVertical: 10, marginTop: 20}}
          onPress={() =>
            navigation.navigate('Checkout', {
              rentData: {
                ...rentCarData,
                startDate,
                endDate,
                qty: 1,
                note,
              },
              paramType: 'rent',
            })
          }
        />
      </View>
      {/* {show && (
        <DateTimePicker
          mode={'time'}
          is24Hour={false}
          display="default"
          onChange={onChange}
          testID="dateTimePicker"
          value={isStartTime ? startTime || new Date() : endTime || new Date()}
        />
      )} */}
      <View style={{header: 15, marginTop: 30}}></View>
    </ScrollView>
  );
}
