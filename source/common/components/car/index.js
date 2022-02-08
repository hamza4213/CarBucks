import React from 'react';
import {View, Text, Image} from 'react-native';
import CardView from 'react-native-cardview';
import styles from './styles';
import Start from '../../../assets/svgs/ratingStar.svg';
import {useNavigation} from '@react-navigation/core';
export default function Car({
  img,
  distance,
  name,
  rentPerHour,
  numberOfReviews,
  reviewsPercentage,
}) {
  const navigation = useNavigation();
  return (
    <CardView cornerRadius={16} style={styles.carContainer}>
      <Text style={styles.carTag}>near {distance}</Text>
      <View style={styles.ImgContainter}>
        <Image
          height={100}
          width="100%"
          source={{uri: img}}
          // source={img}
          style={styles.carImg}
        />
      </View>
      <View style={styles.Carfooter}>
        <Text style={styles.carName}>{name}</Text>

        <Text style={styles.carPrice}>
          {/* ${rentPerHour} <Text style={styles.hour}>/hour</Text> */}
          {rentPerHour} AED
        </Text>
      </View>
      <View style={styles.ratingStats}>
        <Start width={17} height={17} />
        <Text style={styles.review}>
          {reviewsPercentage}{' '}
          <Text style={styles.lightText}>({numberOfReviews} Reviews)</Text>
        </Text>
      </View>
    </CardView>
  );
}
