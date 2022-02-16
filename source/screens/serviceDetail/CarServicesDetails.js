import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../common/components/header';
import SearchInput from '../../common/components/searchInput';
import Map from '../../assets/svgs/Map.svg';
import ServiceCard from '../../common/components/serviceCard';
import CardComponent from '../../common/components/ServiceComponents/CardComponent';
import CardComponentHorizontal from '../../common/components/ServiceComponents/CardComponentHorizontal';
const CarServicesDetails = () => {
  const caetagories = [0, 1, 2, 3, 4];
  return (
    <View>
      <Header title="Services">
        <SearchInput />
        <View style={{height: 10}}></View>
        <Text style={{fontWeight: '600', color: '#fff', marginLeft: 15}}>
          Car Wash near me
        </Text>
      </Header>
      <ScrollView style={styles.contentContainer}>
        <Map />
        <View style={{height: 15}}></View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{height: 120}}>
          {caetagories.map((item, index) => (
            <>
              <View style={{width: 25}}></View>
              <CardComponentHorizontal />
            </>
          ))}
        </ScrollView>
        <View
          style={{
            height: 15,
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text style={{fontWeight: 'bold'}}>Popular Car Wash Service</Text>
          <TouchableOpacity>
            <Text style={{fontWeight: 'bold'}}>View More</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 15}}></View>
        {caetagories.map((item, index) => (
          <>
            <View style={{height: 25}}></View>
            <CardComponent />
          </>
        ))}
        <View style={{height: 150, marginTop: 30}}></View>
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
    // paddingHorizontal: 20,
  },
});
export default CarServicesDetails;
