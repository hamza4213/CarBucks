import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../common/components/header';
import Map from '../../assets/svgs/Map.svg';
import TextInputForAddress from '../../common/components/cards/accessoryCard/TextInputForAddress';
import LinearGradientWrapper from '../../common/components/LinearGradientWrapper';
const AddNewAddress = ({navigation}) => {
  return (
    <View>
      <Header title={'Add New Address'} small />
      <ScrollView style={styles.contentContainer}>
        <View style={{height: 15}}></View>
        <Map />
        <TextInputForAddress title={'Add Title'} placeholder={'Add Title'} />
        <TextInputForAddress
          title={'Apt./Office No'}
          placeholder={'Add Apt./Office No'}
        />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: 'green',
          }}>
          <TextInputForAddress title={'City'} placeholder={'Add City'} row />
          <TextInputForAddress
            title={'District'}
            placeholder={'Add District'}
            row
          />
        </View>
        <TextInputForAddress title={'Address'} placeholder={'Add Address'} />
        <View style={{height: 30}}></View>
        <LinearGradientWrapper
          style={{
            alignSelf: 'center',
            width: '80%',
            height: 50,
            borderRadius: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MultipleAccessories')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}>
            <Text style={{fontWeight: '600', fontSize: 17, color: 'white'}}>
              Add Address
            </Text>
          </TouchableOpacity>
        </LinearGradientWrapper>
        <View style={{height: 15, marginTop: 100}}></View>
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
export default AddNewAddress;
