import React, {useEffect} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview';
import Header from '../../common/components/header';
import styles from './styles';
import {useNavigation, useRoute} from '@react-navigation/core';
import Car from '../../common/components/car';
import CarImage from '../../assets/pngs/CarImage.png';
import CarImage2 from '../../assets/pngs/CarImage2.png';
import {useDispatch, useSelector} from 'react-redux';
import {getCarsbyFilters, resetCars} from '../../redux/actions/metaData';

export default function RentFilterResult() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {lowPrice, highPrice} = useRoute().params;
  const params = useRoute().params;
  // console.log('params', params);

  useEffect(() => {
    dispatch(getCarsbyFilters(params));

    return () => {
      dispatch(resetCars());
    };
  }, []);

  const {filteredCars} = useSelector(state => state.metaData);
  // console.log('filteredCars', filteredCars);

  // const carsArray = [
  //   {
  //     img: CarImage,
  //     distance: '2km',
  //     name: 'Range Sport',
  //     rentPerHour: 130,
  //     numberOfReviews: 56,
  //     reviewsPercentage: 4.8,
  //   },

  // ];

  return (
    <ScrollView style={{height: '100%', backgroundColor: 'white'}}>
      <Header small title="Search Result" />
      <View style={styles.contentContainer}>
        <View style={styles.resultTop}>
          <Text style={styles.mainHeading}>Nearby You</Text>
          <Text style={styles.filter}>Filter</Text>
        </View>
        {filteredCars.map((item, index) => (
          <TouchableOpacity
            activeOpacity={1}
            key={index}
            onPress={() =>
              navigation.navigate('RentCarDetail', {carData: item})
            }>
            <Car
              img={item?.details?.image[0]}
              distance="2km"
              name={item.title}
              rentPerHour={item.details.price}
              numberOfReviews={56}
              reviewsPercentage={item.score}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
