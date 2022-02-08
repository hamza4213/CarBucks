import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../../common/components/header';
import styles from './styles';
import CardView from 'react-native-cardview';
import PlusIcon from '../../assets/svgs/plusIcon.svg';
import RatingButton from '../../common/components/button/ratingButton';
import CreditCard from './creditCard';
import stripe from 'tipsi-stripe';
import {useNavigation, useRoute} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {serviceCheckout} from '../../redux/actions/services';
import {
  productChakout,
  productServiceRentChakout,
} from '../../redux/actions/products';
import {baseURL} from '../../utils/endPoint';
import showToast from '../../common/components/toast/simpleToast';
import axios from 'axios';

export default function Checkout() {
  const [card, setCard] = useState({
    type: 'visa',
    focused: 'name',
    number: '4242424242424242',
    name: 'Hamza Khursheed',
    expYear: 22,
    expMonth: 11,
    cvc: '143',
    index: 0,
  });
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {token: jwtToken} = useSelector(({auth}) => auth);
  const {paramType, paramData, cartData, shipping_address, rentData} =
    useRoute().params;
  const [loading, setLoading] = useState(false);

  paramType === 'product'
    ? console.log('cartData in cart', {cartData, shipping_address})
    : paramType === 'service'
    ? console.log('service data in checkout', paramData)
    : console.log('rentdata in cart', rentData);

  const handleChange = (name, value) => {
    setCard(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateFields = () => {
    if (card?.number?.length !== 16) {
      console.log('please enter a 16 digits card number');
      return false;
    }
    return true;
  };

  const onCheckoutPressed = async () => {
    try {
      if (!validateFields) {
        // set loaidng false
      }
      setLoading(true);
      const token = await stripe.createTokenWithCard(card);
      // console.log('token', token.tokenId);

      const data = {
        source: token?.tokenId,
        type: paramType === 'product' ? 'product' : 'service',
        paymentType: 'card',
        bookingDetails: {},
        items:
          paramType === 'product'
            ? cartData
            : paramType === 'service'
            ? [{...paramData, vendor: paramData?.vendor?.id}]
            : [{...rentData, vendor: rentData?.vendor?.id}],
        shipping_address:
          paramType === 'rent'
            ? {
                city: 'Garden town, Lahore',
                country: 'PK',
              }
            : paramType === 'product'
            ? shipping_address
            : paramData?.shipping_address,
      };

      let headersList = {
        Accept: '*/*',
        Authorization: `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
      };

      let reqOptions = {
        url: `${baseURL}orders/placeOrder`,
        method: 'POST',
        headers: headersList,
        data,
      };
     

      const response = await axios.request(reqOptions);
      showToast(response?.data?.status);
      navigation.navigate('ThankYou');
      setLoading(false);

      // paramType === 'product'
      //   ? await dispatch(productChakout(data))
      //   : await dispatch(serviceCheckout(data));
    } catch (error) {
      setLoading(false);
      console.log('Error while checkout', error);
      // console.log('===>', JSON.stringify(error));
      // setloading false
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header small title="Checkout" />
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.addCardWrapper}>
          <PlusIcon style={styles.icon} />
          <Text>Add New Card</Text>
        </TouchableOpacity>

        <CreditCard card={card} />

        <CardView cornerRadius={20} elevation={5} style={styles.cardView}>
          <View style={styles.inputView}>
            <Text style={styles.label}>Cradit Card Number</Text>
            <TextInput
              maxLength={16}
              secureTextEntry
              value={card.number}
              keyboardType="numeric"
              style={[styles.input, styles.centeredInput]}
              onChangeText={val => handleChange('number', val)}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.label}>Card Card Name</Text>
            <TextInput
              maxLength={48}
              value={card.name}
              style={styles.input}
              keyboardType="default"
              onChangeText={val => handleChange('name', val)}
            />
          </View>
          <View style={styles.expiryContainer}>
            <View style={styles.expiry}>
              <View style={styles.inputView}>
                <Text style={styles.label}>Expiry Date</Text>
                <TextInput
                  maxLength={4}
                  style={styles.input}
                  keyboardType="numeric"
                  value={parseInt(card.expiry)}
                  onChangeText={val => handleChange('expiry', val)}
                />
              </View>
            </View>
            <View style={styles.cvv}>
              <View style={styles.inputView}>
                <Text style={styles.label}>CVV</Text>
                <TextInput
                  maxLength={5}
                  style={styles.input}
                  keyboardType="numeric"
                  value={parseInt(card.cvc)}
                  onChangeText={val => handleChange('cvc', val)}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.saveCard}>
              Save the card for further transactions
            </Text>
          </TouchableOpacity>
        </CardView>

        <RatingButton
          isLoading={loading}
          title="Process to pay"
          type="gradiant"
          style={styles.payButton}
          textStyle={styles.textStyle}
          onPress={onCheckoutPressed}
        />
      </View>
    </ScrollView>
  );
}
