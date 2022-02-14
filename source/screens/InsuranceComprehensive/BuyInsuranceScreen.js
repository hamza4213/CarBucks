import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../common/components/header';
import InsuranceTextandDropdownInput from '../../common/components/InsuranceComponent/InsuranceTextandDropdownInput';
import LinearGradientWrapper from '../../common/components/LinearGradientWrapper/index';
const BuyInsuranceScreen = () => {
  const CarBrand = ['XLI', 'GLI', 'GMC', 'Grande', 'Rolse Royce'];
  return (
    <View>
      <Header small title="Title of Insurance here" />
      <ScrollView style={styles.contentContainer}>
        <View style={{height: 15}}></View>
        <InsuranceTextandDropdownInput header={'Enter a Car Number'} />
        <InsuranceTextandDropdownInput
          header={'Select a Car Brand'}
          description={'Select Car brand'}
          row={true}
          Data={CarBrand}
        />
        <InsuranceTextandDropdownInput
          header={'Select a Car Model'}
          description={'Select Car Model'}
          row={true}
          Data={CarBrand}
        />

        <InsuranceTextandDropdownInput
          header={'Select a fuel type'}
          description={'Select fuel type    '}
          row={true}
          Data={CarBrand}
        />
        <InsuranceTextandDropdownInput
          header={'Select Car registration year'}
          description={'Select Registration year'}
          row={true}
          Data={CarBrand}
        />
        <View style={{height: 25, marginTop: 20}}></View>
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
            style={{
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 17, fontWeight: '700'}}>
              Proceed Payment
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
    marginTop: -18,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingHorizontal: 20,
  },
});
export default BuyInsuranceScreen;
