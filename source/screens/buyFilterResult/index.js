import React, {useEffect} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview';
import Header from '../../common/components/header';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import Car from '../../common/components/car';
import CarImage from '../../assets/pngs/CarImage.png';
import CarImage2 from '../../assets/pngs/CarImage2.png';
import {useDispatch, useSelector} from 'react-redux';
import {getCarToBuy, resetBuyCars} from '../../redux/actions/products';
import {useRoute} from '@react-navigation/core';
import {resetCars} from '../../redux/actions/metaData';

export default function BuyFilterResult() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {cars} = useSelector(state => state.products);

  const params = useRoute().params;

  useEffect(() => {
    dispatch(getCarToBuy(params));

    return () => {
      dispatch(resetBuyCars());
    };
  }, []);

  return (
    <ScrollView>
      <Header small title="Search Result" />
      <View style={styles.contentContainer}>
        <View style={styles.resultTop}>
          <Text style={styles.mainHeading}>Nearby You</Text>
          <Text style={styles.filter}>Filter</Text>
        </View>
        {/* {cars.map((car, index) => ( */}
        <TouchableOpacity
          activeOpacity={1}
          onPress={() =>
            navigation.navigate('BuyCarDetail', {
              car: {
                distance: '2km',
                name: 'car.title',
                rentPerHour: 'car.details.price',
                numberOfReviews: 4.8,
                reviewsPercentage: 56,
              },
            })
          }>
          <Car
            // key={index}
            // img={car.details.image}
            distance="2km"
            name={'car.title'}
            rentPerHour={'car.details.price'}
            numberOfReviews={4.8}
            reviewsPercentage={56}
          />
        </TouchableOpacity>
        {/* ))} */}
      </View>
    </ScrollView>
  );
}
