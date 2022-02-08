import React from 'react';
import styles from './categoryStyles';
import CardView from 'react-native-cardview';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import RatingButton from '../../button/ratingButton';
import CatagoryStar from '../../../../assets/svgs/catagoryStar.svg';
import CAR_WASH from '../../../../assets/pngs/service2.png';
import ACCESSORYIMAGE from '../../../../assets/pngs/accessoryImage.jpg';
import CAR from '../../../../assets/pngs/CarImage1.png';
import CAR_2 from '../../../../assets/pngs/CarImage2.png';
import BUYCARIMAGE from '../../../../assets/pngs/buyCarImage.jpg';
import CARSERVICEIMAGE from '../../../../assets/pngs/carServiceImage.jpg';
import RENTCARIMAGE from '../../../../assets/pngs/rentCarImage.jpg';

import CAR_SERVICE from '../../../../assets/pngs/wrench.png';
import WHEELS from '../../../../assets/pngs/wheel.png';
import CAR_ICON from '../../../../assets/pngs/car.png';
import CAR_RENT from '../../../../assets/pngs/rent.png';
import {useTranslation} from 'react-i18next';

export default function CatagoryCard({item}) {
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();
  if (
    item?._id === '6192a213b915fe44dca1a4e7' ||
    item?._id === '6192a1bdb915fe44dca1a4e3' ||
    item?._id === '6192a130b915fe44dca1a4db' ||
    item?._id === '6192a0afb915fe44dca1a4d7'
  ) {
  } else return null;

  const getItemTitle = item => {
    switch (item._id) {
      case '6192a213b915fe44dca1a4e7':
        // return 'Car Products';
        return t('carProducts');

      case '6192a1bdb915fe44dca1a4e3':
        // return 'Services';
        return t('buyACar');

      case '6192a130b915fe44dca1a4db':
        // return 'Rent a Car';
        return t('rentACar');

      case '6192a0afb915fe44dca1a4d7':
        // return 'Buy a Car';
        return t('services');

      default:
        return 'Accessories';
    }
  };

  const getItemScreen = item => {
    switch (item._id) {
      case '6192a213b915fe44dca1a4e7':
        return 'ProductsCatagories';

      case '6192a0afb915fe44dca1a4d7':
        return 'ServicesCatagories';

      case '6192a130b915fe44dca1a4db':
        return 'RentCar';

      case '6192a1bdb915fe44dca1a4e3':
        return 'BuyCar';

      default:
        return 'ProductsCatagories';
    }
  };

  const getItemImage = item => {
    switch (item._id) {
      case '6192a213b915fe44dca1a4e7':
        return ACCESSORYIMAGE;

      case '6192a0afb915fe44dca1a4d7':
        return CARSERVICEIMAGE;

      case '6192a130b915fe44dca1a4db':
        return RENTCARIMAGE;

      case '6192a1bdb915fe44dca1a4e3':
        return BUYCARIMAGE;

      default:
        return CAR;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate(`${getItemScreen(item)}`)}>
      <CardView style={styles.accessoryContainer}>
        <View style={styles.imageView}>
          <Image source={getItemImage(item)} style={styles.image} />
          {/* <Image source={item?.image} style={styles.image} /> */}
        </View>
      </CardView>
      <View style={styles.bottomView}>
        <Text style={styles.title}>{getItemTitle(item)}</Text>
        {/* <Text style={styles.title}>{item?.title}</Text> */}
      </View>
    </TouchableOpacity>
  );
}
