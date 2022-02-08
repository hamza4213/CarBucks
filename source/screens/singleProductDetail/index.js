import React, {useEffect, useState} from 'react';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import CardView from 'react-native-cardview';
import Plus from '../../assets/svgs/plus.svg';
import Minus from '../../assets/svgs/minus.svg';
import Header from '../../common/components/header';
import {addToCart, changeItemQty} from '../../redux/actions/cart';
import NoImage from '../../assets/pngs/no-image.png';
import {View, Text, Image, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/core';
import RatingButton from '../../common/components/button/ratingButton';
import showToast from '../../common/components/toast/simpleToast';
import {primaryDark} from '../../common/constants/colors';

export default function SingleProductDetail() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [matchedItem, setMatchedItem] = useState(null);
  const [counter, setCounter] = useState(0);
  const {itemData, promotion} = useRoute().params;
  const cartData = useSelector(state => state.cart);

  // console.log('itemData', itemData ? itemData : promotion);
  // console.log('counter:', counter);
  // console.log('matchedItem', matchedItem);
 

  useEffect(() => {
    const foundItem = cartData.cart.find(item => item._id === itemData._id);
    // console.log('foundItem', foundItem);
    if (foundItem) {
      setMatchedItem(foundItem);
    }
  }, [cartData]);

  const changeQty = (id, isAdded) => {
 
    dispatch(changeItemQty(id, isAdded));
  };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Header title="Details" />
      <View style={styles.contentContainer}>
        <CardView
          elevation={2}
          cornerRadius={20}
          cardElevation={2}
          style={styles.imageContainer}>
          <Image
            source={
              itemData
                ? {uri: itemData?.details?.image[0]}
                : {uri: promotion?.promoImg}
            }
            style={styles.image}
            height={160}
            width={180}
          />
          <View>
            <Text style={styles.title}>
              {itemData ? itemData?.title : promotion?.title}
            </Text>
            <Text>
              {itemData
                ? itemData?.details?.description
                : promotion.description}
            </Text>
            {promotion ? (
              <View style={styles.priceContainer}>
                <View style={styles.oldPrice}>
                  <Text>Old Price :</Text>
                  <Text style={styles.price}>
                    {promotion?.previousPrice} AED
                  </Text>
                </View>

                <View style={styles.divider} />
                <View style={styles.oldPrice}>
                  <Text>Old Price :</Text>
                  <Text style={styles.newPrice}>
                    {promotion?.priceAfterDiscount} AED
                  </Text>
                </View>
              </View>
            ) : null}
          </View>

          <RatingButton
            type="gradiant"
            title={`${
              itemData
                ? itemData?.details?.price
                : `${promotion.priceAfterDiscount}` + ' AED' || 0
            }`}
            style={styles.priceBtn}
            textStyle={styles.priceText}
          />
        </CardView>
        <Text style={styles.descText}>
          {itemData ? itemData?.details?.description : promotion.description}
        </Text>
        <View style={styles.itemsCountContainer}>
          <View style={styles.product}>
            <Text style={styles.itemName}>Total</Text>
            <Text style={styles.itemPrice}>
              {(itemData
                ? itemData?.details?.price
                : promotion.priceAfterDiscount) *
                counter +
                ' AED' || 0}
            </Text>
          </View>
          <View style={styles.countContainer}>
            {!matchedItem ? (
              <TouchableOpacity
                onPress={() => {
                  counter <= 0 ? setCounter(0) : setCounter(counter - 1);
                }}
                style={styles.minusView}>
                <Minus />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  changeQty(matchedItem?.id);
                }}
                style={styles.minusView}>
                <Minus />
              </TouchableOpacity>
            )}

            {/* <Text style={styles.countText}>{counter}</Text> */}
            <Text style={styles.countText}>
              {matchedItem ? matchedItem?.qty : counter}
            </Text>

            {!matchedItem ? (
              <TouchableOpacity
                onPress={() => {
                  counter < 0 ? setCounter(0) : setCounter(counter + 1);
                }}
                style={styles.minusView}>
                <Plus />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  changeQty(matchedItem?.id, true);
                }}
                style={styles.minusView}>
                <Plus />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {!(itemData ? itemData?.inStock : promotion?.inStock) ||
        (itemData ? itemData?.inStock : promotion?.inStock) === 0 ? (
          <Text style={styles.outOfStock}>(Out of Stock)</Text>
        ) : null}

        {!matchedItem ? (
          <RatingButton
            title="Add to cart"
            type={counter === 0 ? null : 'gradiant'}
            style={styles.buyBtn}
            textStyle={counter === 0 ? styles.disableBtn : styles.buyText}
            onPress={() => {
              counter === 0
                ? showToast('Please Add Some Products')
                : itemData
                ? dispatch(addToCart({...itemData, qty: counter}))
                : dispatch(addToCart({...promotion, qty: counter}));
              counter === 0
                ? null
                : navigation.navigate('Cart', {counter: counter});
            }}
          />
        ) : (
          <RatingButton
            title="Go to cart"
            type={matchedItem.qty === 0 ? null : 'gradiant'}
            style={styles.buyBtn}
            textStyle={
              matchedItem.qty === 0 ? styles.disableBtn : styles.buyText
            }
            onPress={() => {
              matchedItem.qty === 0
                ? showToast('Product number cannot be 0')
                : navigation.navigate('Cart', {counter: counter});
              // navigation.navigate('Cart');
            }}
          />
        )}
      </View>
    </ScrollView>
  );
}
