import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import Header from '../../common/components/header';
import styles from './styles';
import {SliderBox} from 'react-native-image-slider-box';
import CarImage from '../../assets/pngs/CarImage.png';
import CarImage1 from '../../assets/pngs/CarImage1.png';
import CarImage2 from '../../assets/pngs/CarImage2.png';
import RatingButton from '../../common/components/button/ratingButton';
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
import UserCard from '../../common/components/header/userCard';
import {useRoute} from '@react-navigation/core';
import {capitalizeFirstLetter} from '../../common/utils/strings';
import {useSelector} from 'react-redux';
import {callNumber, sendPhoneMessage} from '../../utils';

export default function RentCarDetail() {
  const [imgs, setimgs] = useState([carData?.details?.image]);
  const [readMore, setReadMore] = useState(false);
  const navigation = useNavigation();
  const {carData} = useRoute().params;

  useEffect(() => {
    setimgs([carData?.details?.image]);
  }, [carData]);

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
          // source={{uri: carData?.details?.image[0]}}
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
        <View style={styles.CarBody}>
          <Text style={styles.carTitle}>
            {`${carData?.details?.make} ${carData?.details?.model}`}
          </Text>

          <Text style={styles.carPrice}>
            {`${carData?.details?.price} AED`}
            <Text style={styles.hour}>/hour</Text>
          </Text>
        </View>
        <Text style={styles.review}>
          <Text style={styles.lightText}>{carData?.score} (56 Reviews)</Text>
        </Text>
        <Text style={styles.heading}>Car Specification</Text>
        <View style={styles.CarBody}>
          <View style={styles.carSpecs}>
            <Automatic style={styles.emoji} />
            <Text style={[styles.carName]}>
              {carData?.details?.transmission}
            </Text>
          </View>
          <View style={styles.carSpecs}>
            <Engine style={styles.emoji} />
            <Text style={[styles.carName]}>4500cc</Text>
          </View>
          <View style={styles.carSpecs}>
            <Gasoline style={styles.emoji} />
            <Text style={[styles.carName]}>{carData?.details?.fuelType}</Text>
          </View>
        </View>
        <View style={styles.CarBody}>
          <View style={styles.carSpecs}>
            <Seat style={styles.emoji} />
            <Text style={[styles.carName]}>Seats</Text>
          </View>
          <View style={styles.carSpecs}>
            <Meter style={styles.emoji} />
            <Text style={[styles.carName]}>0-30mph</Text>
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
              {carData?.details?.description.slice(0, 100)}
            </Text>
          ) : (
            <Text style={styles.overviewContent}>
              {carData?.details?.description}
            </Text>
          )}

          <TouchableOpacity onPress={() => setReadMore(!readMore)}>
            {!readMore ? (
              <Text style={styles.read}>Read more</Text>
            ) : (
              <Text style={styles.read}>Read less</Text>
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.furtherDiscussion}>
          Contact the owner for further discussion
        </Text>
        <View style={styles.profileContainer}>
          <View style={styles.centeredRow}>
            <View style={styles.ProfilePic}>
              <Image
                source={
                  Profile
                  // carData?.vendor?.image
                  // ? {uri: carData?.vendor?.image[0]}
                  // : Profile
                }
                height={100}
                width={100}
              />
            </View>
            <View style={styles.ProfileName}>
              <Text style={{textTransform: 'capitalize'}}>
                {carData?.vendor?.firstName || '-'} {carData?.vendor?.lastName}
              </Text>
              <Text>Owner</Text>
            </View>
          </View>
          <View style={styles.ProfileIconContainer}>
            <TouchableOpacity
              style={styles.ProfileIcon}
              onPress={() => callNumber(carData?.vendor?.phone || '')}>
              <PhoneP height={19} width={19} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ProfileIcon}
              //  onPress={gotoChat}
            >
              <Message height={19} width={19} />
            </TouchableOpacity>
          </View>
        </View>
        <RatingButton
          title="Book Now"
          type="gradiant"
          style={{paddingVertical: 10, marginVertical: 20}}
          onPress={() =>
            navigation.navigate('PickADate', {
              rentCarData: carData,
            })
          }
        />
      </View>
    </ScrollView>
  );
}
