import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import Header from '../../common/components/header';
import styles from './styles';
import Automatic from '../../assets/svgs/automatic.svg';
import Engine from '../../assets/svgs/engine.svg';
import Gasoline from '../../assets/svgs/gasoline.svg';
import Seat from '../../assets/svgs/seat.svg';
import Meter from '../../assets/svgs/meter.svg';
import Bag from '../../assets/svgs/bag.svg';
import Profile from '../../assets/pngs/Ellipse.png';
import PhoneP from '../../assets/svgs/phoneP.svg';
import Message from '../../assets/svgs/message.svg';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {callNumber, sendPhoneMessage} from '../../utils';
import Car from '../../assets/pngs/carHomePage.png';
import {SliderBox} from 'react-native-image-slider-box';
import colors, {primaryDark, primaryLight} from '../../common/constants/colors';
import LinearGradientWrapper from '../../common/components/LinearGradientWrapper';
export default function BuyCarDetail() {
  const navigation = useNavigation();
  const [imgs, setimgs] = useState([{uri: car?.details?.image[0]}]);
  const [paymentmethod, setPaymentmethod] = useState('Online');
  const [readMore, setReadMore] = useState(false);
  const {car} = useRoute().params;
  const {details} = car;

  const gotoChat = () => {
    navigation.navigate('ChatHistory', {
      screen: 'Chat',
    });
  };

  return (
    <ScrollView style={styles.CarDetailContainer}>
      <Header small title="Car Details Page" />
      <View style={styles.contentContainer}>
        <Image
          // source={{uri: car?.details?.image}}
          source={{uri: 'https://i.ibb.co/mcBzrBx/yellowcar.png'}}
          style={{
            height: 100,
            width: '100%',
            marginVertical: 10,
            marginLeft: 'auto',
            marginRight: 'auto',
            resizeMode: 'cover',
          }}
        />
        <SliderBox
          autoplay
          circleLoop
          images={[
            car?.details?.image,
            car?.details?.image,
            car?.details?.image,
          ]}
        />
        <View style={styles.CarBody}>
          <Text style={styles.carTitle}>car?.title</Text>

          <Text style={styles.carPrice}>{`${details?.price} AED`}</Text>
        </View>
        <Text style={styles.review}>
          4.9 <Text style={styles.lightText}>(56 Reviews)</Text>
        </Text>
        <Text style={styles.heading}>Car Specification</Text>
        <View style={styles.CarBody}>
          <View style={styles.carSpecs}>
            <Automatic style={styles.emoji} />
            <Text style={[styles.carName]}>{details?.transmission}</Text>
          </View>
          <View style={styles.carSpecs}>
            <Engine style={styles.emoji} />
            <Text style={[styles.carName]}>4500cc</Text>
          </View>
          <View style={styles.carSpecs}>
            <Gasoline style={styles.emoji} />
            <Text style={[styles.carName]}>{details?.fuelType}</Text>
          </View>
        </View>
        <View style={styles.CarBody}>
          <View style={styles.carSpecs}>
            <Seat style={styles.emoji} />
            <Text style={[styles.carName]}>Seats</Text>
          </View>
          <View style={styles.carSpecs}>
            <Meter style={styles.emoji} />
            <Text style={[styles.carName]}>0-60mph</Text>
          </View>
          <View style={styles.carSpecs}>
            <Bag style={styles.emoji} />
            <Text style={[styles.carName]}>small bag</Text>
          </View>
        </View>
        <Text style={styles.heading}>Overview</Text>

        <View>
          {!readMore ? (
            <Text style={styles.overviewContent}>
              {details?.description.slice(0, 100)}
            </Text>
          ) : (
            <Text style={styles.overviewContent}>{details?.description}</Text>
          )}

          <TouchableOpacity onPress={() => setReadMore(!readMore)}>
            {!readMore ? (
              <Text style={styles.read}>Read more</Text>
            ) : (
              <Text style={styles.read}>Read less</Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.profileContainer}>
          <View style={styles.centeredRow}>
            <View style={styles.ProfilePic}>
              <Image
                source={
                  car?.vendor?.image ? {uri: car?.vendor?.image[0]} : Profile
                }
                height={100}
                width={100}
              />
            </View>
            <View style={styles.ProfileName}>
              <Text style={{textTransform: 'capitalize'}}>
                {car?.vendor?.firstName || '-'} {car?.vendor?.lastName}
              </Text>
              <Text>Owner</Text>
            </View>
          </View>
          <View style={styles.ProfileIconContainer}>
            <TouchableOpacity
              style={styles.ProfileIcon}
              onPress={() => callNumber(car?.vendor?.phone || '')}>
              <PhoneP height={19} width={19} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ProfileIcon} onPress={gotoChat}>
              <Message height={19} width={19} />
            </TouchableOpacity>
          </View>
        </View>
        {/*
        <Text style={[styles.heading, styles.mb2]}>Choose Payment Method</Text>

        <RadioForm>
          {radio_props.map((obj, i) => {
            return (
              <RadioButton labelHorizontal={true} key={i}>
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={label.value === i}
                  onPress={value => {
                    setLabel({value: value});
                  }}
                  borderWidth={2}
                  buttonInnerColor={'#e20001'}
                  buttonOuterColor={label.value === i ? '#e20001' : '#000'}
                  buttonSize={8}
                  buttonOuterSize={18}
                  buttonStyle={{}}
                  buttonWrapStyle={{marginLeft: 10, marginTop: 10}}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={true}
                  onPress={value => {
                    setLabel({value: value});
                  }}
                  labelStyle={{
                    fontSize: 18,
                    color: '#6C6C6C',
                    fontWeight: '500',
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                  labelWrapStyle={{}}
                />
              </RadioButton>
            );
          })}
        </RadioForm>
        <RatingButton
          title="Book Now"
          type="gradiant"
          style={{paddingVertical: 10, marginVertical: 20}}
          onPress={() => navigation.navigate('Checkout')}
        /> */}
        <View style={{height: 15}}></View>
        <Text>Choose Payment Method</Text>
        <View style={{height: 15}}></View>
        <TouchableOpacity
          onPress={() => setPaymentmethod('Online')}
          style={{
            flexDirection: 'row',
            width: '30%',
            justifyContent: 'space-between',
          }}>
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
            {paymentmethod === 'Online' ? (
              <View
                style={{
                  height: 15,
                  width: 15,
                  borderRadius: 20,
                  backgroundColor: primaryLight,
                }}></View>
            ) : null}
          </View>
          <Text>Pay Online</Text>
        </TouchableOpacity>
        <View style={{height: 15}}></View>
        <TouchableOpacity
          onPress={() => setPaymentmethod('Cash')}
          style={{
            flexDirection: 'row',
            width: '30%',
            justifyContent: 'space-between',
          }}>
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
            {paymentmethod === 'Cash' ? (
              <View
                style={{
                  height: 15,
                  width: 15,
                  borderRadius: 20,
                  backgroundColor: primaryLight,
                }}></View>
            ) : null}
          </View>
          <Text>Pay Cash</Text>
        </TouchableOpacity>
        <View style={{height: 15}}></View>
        <LinearGradientWrapper
          style={{width: '100%', height: 50, borderRadius: 10}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Checkout', {
                paramData: {
                  qty: 1,
                },
                paramType: 'service',
              })
            }
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', color: 'white'}}>Book Now</Text>
          </TouchableOpacity>
        </LinearGradientWrapper>
      </View>
    </ScrollView>
  );
}
