import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../common/components/header';
import ImagePickerComponent from '../../common/components/InsuranceComponent/ImagePickerComponent';
import LinearGradientWrapper from '../../common/components/LinearGradientWrapper/index';

const InsuranceDocuments = ({navigation}) => {
  const [documents, setDocuments] = useState({});
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
          <ImagePickerComponent
            setDocuments={setDocuments}
            documents={documents}
            name={'registrationFront'}
          />
          <ImagePickerComponent
            setDocuments={setDocuments}
            documents={documents}
            name={'registrationBack'}
          />
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            height: 30,
            // backgroundColor: 'teal',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '600'}}>Front</Text>
          <Text style={{fontWeight: '600'}}>Back</Text>
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
          <ImagePickerComponent
            setDocuments={setDocuments}
            documents={documents}
            name={'licenseFront'}
          />
          <ImagePickerComponent
            setDocuments={setDocuments}
            documents={documents}
            name={'licenseBack'}
          />
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            height: 30,
            // backgroundColor: 'teal',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '600'}}>Front</Text>
          <Text style={{fontWeight: '600'}}>Back</Text>
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
            onPress={() => {
              console.log(documents),
                navigation.navigate('Checkout', {
                  paramData: {
                    // ...params,
                    // name: name,
                    // model: model,
                    // color: color,
                    // shipping_address: {city: address, country: 'Pakistan'},
                    // date: date,
                    // message: message,
                    qty: 1,
                  },
                  paramType: 'service',
                });
            }}
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
