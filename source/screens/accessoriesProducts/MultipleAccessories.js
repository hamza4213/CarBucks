import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../common/components/header';
import DetailAccessoryCard from '../../common/components/cards/accessoryCard/DetailAccessoryCard';
import colors, {text, primaryLight} from '../../common/constants/colors';
const MultipleAccessories = () => {
  const [deliver, setDeliver] = useState('Delivery');
  return (
    <View>
      <Header title={'Accessories'} small />
      <ScrollView style={styles.contentContainer}>
        <View style={{height: 15}}></View>
        <DetailAccessoryCard />
        <DetailAccessoryCard />
        <DetailAccessoryCard />
        <View style={{height: 15}}></View>
        <View
          style={{
            height: 80,
            width: '90%',
            alignSelf: 'center',
            backgroundColor: 'lightgrey',
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <Text style={{color: text, fontWeight: 'bold'}}>Promo Code</Text>
          <View
            style={{
              width: '40%',
              height: '70%',
              borderRadius: 10,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>AHS7562</Text>
          </View>
        </View>
        <View style={{height: 15}}></View>
        <View
          style={{
            height: 50,
            width: '100%',
            alignSelf: 'center',
            // backgroundColor: 'lightgrey',
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setDeliver('Delivery')}
            style={{
              backgroundColor: deliver === 'Delivery' ? primaryLight : '#fff',
              width: '40%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              shadowOffset: {width: 100, height: 50},
              shadowColor: '#000',
              shadowOpacity: 1,
              elevation: 15,
            }}>
            <Text
              style={{
                color: deliver === 'Delivery' ? 'white' : 'black',
                fontSize: 17,
                fontWeight: '600',
              }}>
              Delivery
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setDeliver('Pickup')}
            style={{
              backgroundColor: deliver === 'Pickup' ? primaryLight : '#fff',
              width: '40%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              shadowOffset: {width: 100, height: 50},
              shadowColor: '#000',
              shadowOpacity: 1,
              elevation: 15,
            }}>
            <Text
              style={{
                color: deliver === 'Pickup' ? 'white' : 'black',
                fontSize: 17,
                fontWeight: '600',
              }}>
              Pickup
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 15, marginTop: 200}}></View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    height: '100%',
    backgroundColor: 'white',
    marginTop: -18,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    // paddingHorizontal: 20,
  },
});
export default MultipleAccessories;
