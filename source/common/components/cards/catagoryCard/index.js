import React from 'react';
import styles from './styles';
import CardView from 'react-native-cardview';
import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import RatingButton from '../../button/ratingButton';
import CatagoryStar from '../../../../assets/svgs/catagoryStar.svg';
import CatagoryHart from '../../../../assets/svgs/catagoryHart.svg';

const IMAGE =
  'https://s3.amazonaws.com/cdn.carbucks.com/181b6026-b2a4-43d8-b962-3a6e34abfc88.png';

export default function CatagoryCard({item}) {
  const navigation = useNavigation();

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

  return (
    <CardView
      cardElevation={2}
      cardMaxElevation={2}
      cornerRadius={15}
      style={styles.accessoryContainer}>
      <Image source={{uri: item?.image ?? IMAGE}} style={styles.categoryImg} />

      <View style={styles.detailContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.textContainer}>
            <Text style={styles.catName}>{item?.title}</Text>
            <View style={styles.reviewContainer}>
              <CatagoryStar style={styles.star} />
              <Text style={styles.reviewText}>
                Available: {item?.available || '0'}
              </Text>
            </View>
          </View>
          <CatagoryHart style={styles.hart} />
        </View>
        <RatingButton
          type="gradiant"
          title="More Details"
          style={styles.CTA}
          textStyle={styles.ctaText}
          onPress={() => navigation.navigate(`${getItemScreen(item)}`)}
        />
      </View>
    </CardView>
  );
}
