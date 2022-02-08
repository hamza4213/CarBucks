import React from 'react';
import styles from './styles';
import CardView from 'react-native-cardview';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import RatingButton from '../../button/ratingButton';
import NoImage from '../../../../assets/pngs/no-image.png';

export default function AccessoryCard({accessory, isMain}) {
  const navigation = useNavigation();

  return (
    <CardView
      cardElevation={2}
      cardMaxElevation={2}
      cornerRadius={15}
      style={styles.accessoryContainer}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.touchable}
        onPress={() =>
          navigation.navigate(
            isMain ? 'AccessoriesProducts' : 'SingleProductDetail',
            {itemData: accessory},
          )
        }>
        <View style={styles.imageContainer}>
          <View style={{flex: 1}}>
            <Image
              style={styles.image}
              source={
                accessory?.details?.image
                  ? {uri: accessory?.details?.image[0]}
                  : NoImage
              }
              height={60}
            />
          </View>
          <View style={{flex: 1.5}}>
            <Text style={styles.price}>{accessory?.details?.price} AED</Text>
            <Text style={styles.productName}>{accessory.title || '-'}</Text>
          </View>
        </View>
        <Text numberOfLines={2} style={styles.companyName}>
          {accessory?.details?.description}
        </Text>
        <RatingButton
          type="gradiant"
          title="Buy Now"
          style={styles.exploreBtn}
          textStyle={styles.exploreText}
          onPress={() =>
            navigation.navigate(
              isMain ? 'AccessoriesProducts' : 'SingleProductDetail',
              {itemData: accessory},
            )
          }
        />
      </TouchableOpacity>
    </CardView>
  );
}
