import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../common/components/header';
import ImagePickerComponent from '../../common/components/InsuranceComponent/ImagePickerComponent';
import LinearGradientWrapper from '../../common/components/LinearGradientWrapper/index';

const InsuranceDocuments = () => {
  return (
    <View>
      <Header small title="Documents" />
      <ScrollView style={styles.contentContainer}>
        <View style={{height: 15}}></View>
        <Text style={{alignSelf: 'center', fontWeight: '600'}}>
          Car Registration Document
        </Text>
        <View style={{height: 15}}></View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            height: 130,
            // backgroundColor: 'teal',
            alignItems: 'center',
          }}>
          <ImagePickerComponent />
          <ImagePickerComponent />
        </View>
        <View style={{height: 15}}></View>
        <Text style={{alignSelf: 'center', fontWeight: '600'}}>
          Car License Document
        </Text>
        <View style={{height: 15}}></View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            height: 130,
            // backgroundColor: 'teal',
            alignItems: 'center',
          }}>
          <ImagePickerComponent />
          <ImagePickerComponent />
        </View>
        <View style={{height: '20%'}}></View>
        <LinearGradientWrapper
          style={{
            width: '90%',
            height: 50,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('InsuranceDocuments')}
            style={{
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 17, fontWeight: '700'}}>
              Submit
            </Text>
          </TouchableOpacity>
        </LinearGradientWrapper>
        <View
          style={{
            height: 25,
            marginTop: 250,
            // backgroundColor: '#000',
            width: '100%',
          }}></View>
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
    paddingHorizontal: 20,
  },
});

export default InsuranceDocuments;
