import React from 'react';
import * as constants from '../../../redux/ActionTypes';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview';
import styles from './styles';
import accessoryImage from '../../../assets/pngs/accessoryImage1.png';
import Minus from '../../../assets/svgs/minus.svg';
import Plus from '../../../assets/svgs/plus.svg';
import DelelteIcon from '../../../assets/svgs/delete.svg';
import {useState} from 'react';
import {useEffect} from 'react';

export default function ProductCartCard({cartItem, changeQty, onPressDelete}) {
  const [count, setCount] = useState(1);

  return (
    <CardView
      elevation={2}
      cornerRadius={20}
      cardElevation={2}
      style={styles.imageContainer}>
      <View style={styles.imgView}>
        <Image
          source={
            cartItem?.details?.image
              ? {uri: cartItem?.details?.image[0]}
              : accessoryImage
          }
          style={styles.image}
        />
      </View>
      <View style={styles.descriptionView}>
        <View style={styles.descriptionViewHeader}>
          <View>
            <Text style={styles.title}>{cartItem?.title}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => onPressDelete(cartItem?._id)}>
              <DelelteIcon />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.Description}>{cartItem?.details?.description}</Text>
        <View style={styles.productCartFooter}>
          <View style={styles.countContainer}>
            <View style={styles.minusView}>
              <TouchableOpacity onPress={() => changeQty(cartItem?._id, false)}>
                <Minus height={12} width={12} />
              </TouchableOpacity>
            </View>
            <View style={{marginHorizontal: 4}}>
              <Text style={styles.countText}>
                {cartItem?.qty <= cartItem.inStock
                  ? cartItem?.qty
                  : cartItem.inStock}
              </Text>
              {/* <Text style={styles.countText}>{cartItem?.qty}</Text> */}
            </View>
            <View style={styles.plusView}>
              <TouchableOpacity onPress={() => changeQty(cartItem?._id, true)}>
                <Plus height={12} width={12} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.itemPrice}>{`${
              cartItem?.details?.price * cartItem?.qty
            } AED`}</Text>
          </View>
        </View>
      </View>
    </CardView>
  );
}
