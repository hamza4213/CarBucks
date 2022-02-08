import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/core';
import CountryPicker from 'react-native-country-picker-modal';
import Header from '../../common/components/header';
import ProductCartCard from '../../common/components/productCartCard';
import RatingButton from '../../common/components/button/ratingButton';
import {useDispatch} from 'react-redux';
import {
  changeItemQty,
  decreaseItem,
  deleteItemFromCart,
  increaseItem,
} from '../../redux/actions/cart';
import NotFound from '../../common/components/notFound';
import EditAddress from '../../assets/svgs/editAddress.svg';
import {primaryDark} from '../../common/constants/colors';
import RedRadio from '../../assets/svgs/redRadio.svg';
import Radio from '../../assets/svgs/radio.svg';
import {t} from 'i18next';
import showToast from '../../common/components/toast/simpleToast';

export default function Card() {
  const navigation = useNavigation();
  const [count, setCount] = useState(1);
  const [address, setAddress] = useState('');
  const [countryCode, setCountryCode] = useState('PK');
  const [country, setCountry] = useState('Pakistan');
  const [totalAmount, setTotalAmount] = useState(0);
  const [isPickup, setIsPickup] = useState(false);
  const dispatch = useDispatch();

  const cartData = useSelector(state => state.cart);

 

  const dataTopass = cartData.cart.map(item => {
    return {...item, vendor: item?.vendor?._id};
  });

  const totalArr = cartData?.cart?.map(item => {
    return item?.details?.price * item?.qty;
  });

  let sum = 0;
  for (let i = 0; i < totalArr?.length; i++) {
    sum += totalArr[i];
  }

  const changeQty = (id, isAdded) => {
    dispatch(changeItemQty(id, isAdded));
  };

  const onPressDelete = id => {
    dispatch(deleteItemFromCart(id));
  };
  const onSelect = country => {
    setCountry(country.name);
    setCountryCode(country.cca2);
  };

  return (
    <View>
      <Header title={t('cart')} />
      <View style={styles.contentContainer} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        {cartData?.cart?.map(item => (
          <ProductCartCard
            changeQty={changeQty}
            onPressDelete={onPressDelete}
            key={item._id}
            cartItem={item}
          />
        ))}

        {cartData?.cart?.length ? (
          <>
            <View style={styles.border} />
            {isPickup ? null : (
              <View style={styles.deliveryView}>
                <Text style={styles.totalTitle2}>Deivery Charges </Text>
                <Text style={styles.itemPrice2}>5 AED</Text>
              </View>
            )}
            <View style={styles.cartFooter}>
              <View>
                <Text style={styles.totalTitle}>Total Amount</Text>
              </View>
              <View>
                <Text style={styles.itemPrice}>
                  {isPickup ? sum : sum + 5} AED
                </Text>
              </View>
            </View>

            <View style={styles.radioContainer}>
              <TouchableOpacity
                onPress={() => setIsPickup(false)}
                style={styles.radioWrapper}>
                {isPickup ? (
                  <Radio height={25} width={25} />
                ) : (
                  <RedRadio height={25} width={25} />
                )}

                <Text style={styles.deliveryTxt}>Delivery</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsPickup(true)}
                style={styles.radioWrapper}>
                {isPickup ? (
                  <RedRadio height={25} width={25} />
                ) : (
                  <Radio height={25} width={25} />
                )}
                <Text style={styles.deliveryTxt}>Self Pickup</Text>
              </TouchableOpacity>
            </View>

            {isPickup ? null : (
              <View style={styles.detailContainer}>
                <View cornerRadius={15} style={styles.addressInputContainer}>
                  <TextInput
                    onChangeText={e => setAddress(e)}
                    // placeholderTextColor="white"
                    placeholder="Address"
                    style={styles.adressInput}
                  />
                  <EditAddress style={styles.editAddress} />
                </View>
                <View
                  cornerRadius={15}
                  style={[styles.addressInputContainer, {marginTop: 15}]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '50%',
                      paddingVertical: 10.5,
                      alignItems: 'center',
                    }}>
                    <CountryPicker
                      {...{
                        countryCode,
                        withFilter: true,
                        withCallingCode: true,
                        withCallingCodeButton: true,
                        withModal: true,
                        theme: {
                          backgroundColor: primaryDark,
                          onBackgroundTextColor: 'white',
                          fontSize: 13,
                        },

                        onSelect,
                        placeholder: 'pakistan',
                      }}
                    />
                    <Text>{country}</Text>
                  </View>
                </View>
              </View>
            )}

            <RatingButton
              title="Buy Now"
              type="gradiant"
              style={styles.buyBtn}
              textStyle={styles.buyText}
              onPress={() => {
                navigation.navigate('Checkout', {
                  cartData: dataTopass,
                  paramType: 'product',
                  shipping_address: {
                    city: address,
                    country: country,
                  },
                });
              }}
            />
          </>
        ) : (
          <View style={styles.notFound}>
            <NotFound text="No Item found in the cart." />
          </View>
        )}
      </ScrollView>
    </View>
  );
}
