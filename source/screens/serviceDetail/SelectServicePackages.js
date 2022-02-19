import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../common/components/header';
import ServicePackagesComponent from '../../common/components/ServiceComponents/ServicePackagesComponent';
import LinearGradientWrapper from '../../common/components/LinearGradientWrapper';

const SelectServicePackages = ({navigation}) => {
  const [selected, setSelected] = useState('');
  const BasicService = ['Ac Repairing', 'Engine Tuning', 'Pain Car'];
  const RegularService = [
    'Ac Repairing',
    'Engine Tuning',
    'Pain Car',
    'Car Wash Service',
  ];
  const PremiumService = [
    'Ac Repairing',
    'Engine Tuning',
    'Pain Car',
    'Car Wash Service',
    'Full Tuning',
  ];
  return (
    <View>
      <Header title={'Select Service Packages'} small />
      <ScrollView style={styles.contentContainer}>
        <View style={{height: 15}}></View>
        <Text style={{fontWeight: '600'}}> Select Service Packages</Text>
        <View style={{height: 15}}></View>
        <ServicePackagesComponent
          servicesName={BasicService}
          title={'Basic Service'}
          money={'130'}
          selected={selected}
          setSelected={setSelected}
        />
        <View style={{height: 15}}></View>

        <ServicePackagesComponent
          servicesName={RegularService}
          title={'Regular Service'}
          money={'150'}
          selected={selected}
          setSelected={setSelected}
        />
        <View style={{height: 15}}></View>

        <ServicePackagesComponent
          servicesName={PremiumService}
          title={'Premium Service'}
          money={'200'}
          selected={selected}
          setSelected={setSelected}
        />
        <View style={{height: 30}}></View>
        <LinearGradientWrapper
          style={{
            width: '100%',
            height: 50,
            borderRadius: 10,
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ServiceDetails')}
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17}}>
              Select
            </Text>
          </TouchableOpacity>
        </LinearGradientWrapper>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    height: '100%',
    backgroundColor: 'white',
    marginTop: -15,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingHorizontal: 20,
  },
});
export default SelectServicePackages;
