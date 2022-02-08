import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Header from '../../common/components/header';
import CardView from 'react-native-cardview';
import profilePic from '../../assets/pngs/profilePic.png';
import RatingButton from '../../common/components/button/ratingButton';
import CalenderIcon from '../../assets/svgs/calenderIcon.svg';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import { cancelOrder, completeService } from '../../redux/actions/services';
import { t } from 'i18next';
import DatePicker from 'react-native-date-picker'
import { currencySymbol } from '../../utils/helper';

export default function JobProgress() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { params } = useRoute();


  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [cancelView, setCancelView] = useState(false);
  const [reason, setReason] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    // setShow(Platform.OS === 'ios');
    setShow(false);
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

  const onPressCompleted = () => {
    dispatch(completeService(params.id));
  };

  const sendOrderCancelRequest = () => {
    dispatch(cancelOrder({ orderId: params.id, reason }));
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ height: '100%', backgroundColor: 'white' }}>
      <Header title={t('jobProgress')} />
      <View style={styles.container}>
        <View style={{ marginTop: -120 }}>
          <CardView cardElevation={5} cornerRadius={15} style={styles.card}>
            <View style={styles.cardTopView}>
              <Image style={styles.image} source={profilePic} />

              <View style={styles.textWrapper}>
                <Text style={styles.service}>Car Machanic</Text>
                <Text style={styles.name}>Jhon Doe</Text>
              </View>
              <View style={styles.rateWrapper}>
                <Text style={styles.rate}>{currencySymbol}20/-</Text>
              </View>
            </View>

            <View style={styles.cardCenterView}>
              <View>
                <Text style={styles.serviceDetials}>{t('serviceDetails')}</Text>
                <Text style={styles.carRepair}>Car Repair</Text>
              </View>

              <View>
                <TouchableOpacity
                  onPress={showDatepicker}
                  style={styles.calenderWrapper}>
                  <Text style={styles.reschedule}>
                    {date ? moment(date).format('DD MMMM, YYYY') : 'Reschedule'}
                  </Text>
                  <CalenderIcon style={styles.calenderIncon} />
                </TouchableOpacity>
                <RatingButton
                  type="gradient"
                  style={[styles.cancelBtn, { alignSelf: "flex-end" }]}
                  textStyle={styles.textStyle}
                  title={t('cancelService')}
                  onPress={() => setCancelView(!cancelView)}
                />
              </View>
            </View>

            <Text style={styles.bottomText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </Text>
          </CardView>

          <RatingButton
            title={t('markAsCompleted')}
            type="gradient"
            style={styles.sendButton}
            onPress={onPressCompleted}
          />

          {cancelView ? (
            <>
              <Text style={styles.wantToCancel}>{t('reasonTitle')}</Text>
              {/* <View> */}
              <TextInput
                placeholder={t('typeAReason')}
                multiline
                numberOfLines={6}
                style={styles.textArea}
                onChangeText={setReason}
              />
              <RatingButton
                title={t('send')}
                type="gradient"
                style={styles.sendButton}
                onPress={sendOrderCancelRequest}
              />
            </>
          ) : null}

          {/* {show && (
            <DateTimePicker
              mode={mode}
              is24Hour={false}
              display="default"
              onChange={onChange}
              testID="dateTimePicker"
              value={(mode === 'date' ? date : time) || new Date()}
            />
          )} */}
          <DatePicker
            modal
            open={show}
            date={(mode === 'date' ? date : time) || new Date()}
            onConfirm={(date) => {
              onChange("", date)
            }}
            mode="datetime"
            // onChange={() =>  }
            onCancel={() => {
              setShow(false)
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}
