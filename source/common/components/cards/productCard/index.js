import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import CardView from 'react-native-cardview';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';
import { t } from 'i18next';
import { currencySymbol, wp } from '../../../../utils/helper';
import colors, { primaryDark, primaryLight } from '../../../constants/colors';
import LatoText from '../../LatoText'

export default function ProductCard({ product, isProductCategory }) {

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        if (product.type === "product") {
          navigation.navigate('Accessories', {
            name: product.title,
            type: product.type,
            slug: product.slug,
          });
        } else {
          navigation.navigate('Services', {
            name: product.title,
            type: product.type,
            slug: product.slug,
          });
        }
      }}
      style={styles.cardContainer}
    >
      <CardView
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}
        style={styles.productContainer}>

        <Image
          style={styles.image}
          source={{ uri: product.image }}
          height={90}
          width={120}
        />
        <View style={{ marginVertical: 10 }}  >
          <LatoText text={product.title} color="#000" fontWeight="600" />
          <LatoText text={product.description} fontSize={wp(2.6)} />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
          <Text style={[styles.bookNow, { color: primaryDark }]}>{t('View More')}</Text>
        </View>

      </CardView>
    </TouchableOpacity>
  );
}
