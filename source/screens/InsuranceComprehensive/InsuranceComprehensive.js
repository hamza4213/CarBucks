import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../common/components/header';
import LinearGradientWrapper from '../../common/components/LinearGradientWrapper';
import {primaryDark, primaryLight} from '../../common/constants/colors';
import InsuranceOpendownComponent from '../../common/components/InsuranceComponent/InsuranceOpendownComponent';
import InsuranceBuyButton from '../../common/components/InsuranceComponent/InsuranceBuyButton';
import InsuranceDescriptionComponent from '../../common/components/InsuranceComponent/InsuranceDescriptionComponent';
import SearchInput from '../../common/components/searchInput';
const InsuranceComprehensive = ({navigation}) => {
  return (
    <View>
      <Header small title="Tata Aig Insurance" />
      <ScrollView style={styles.contentContainer}>
        <View style={{height: 15}}></View>
        <View style={{width: '95%', alignSelf: 'center'}}>
          <SearchInput />
        </View>
        <View style={{height: 10}}></View>

        <Image
          source={require('../../assets/pngs/buyCarImage.jpg')}
          style={{
            height: 90,
            width: 90,
            alignSelf: 'center',
            borderRadius: 80,
          }}
        />
        <View style={{height: 10}}></View>
        <Text
          style={{
            alignSelf: 'center',
            fontWeight: 'bold',
            color: primaryDark,
          }}>
          Tag Aig Insurances
        </Text>
        <View style={{height: 15}}></View>
        <>
          <InsuranceOpendownComponent />
          <View style={{height: 15}}></View>
          <InsuranceOpendownComponent />
          <View style={{height: 15}}></View>
          <InsuranceOpendownComponent />
          <View style={{height: 15}}></View>
          <InsuranceOpendownComponent />
          <View style={{height: 15}}></View>
        </>
        <View style={{height: '5%'}}></View>
        <LinearGradientWrapper
          style={{
            width: '90%',
            height: 60,
            borderRadius: 10,
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('InsuranceThirdParty')}
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '600', fontSize: 17, color: '#fff'}}>
              View Package
            </Text>
          </TouchableOpacity>
        </LinearGradientWrapper>
        <View style={{height: 250, marginTop: 30}}></View>
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
  focusedTab: {
    backgroundColor: 'white',
    color: 'white',
  },
  tab: {
    paddingHorizontal: 10,
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
});
export default InsuranceComprehensive;
