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
import SmallImage from '../../common/components/ImagesComponents/SmallImage';
import LargeImage from '../../common/components/ImagesComponents/LargeImage';
const ServiceDetailCaetagories = ({route}) => {
  const {renderscreenfor} = route.params;
  console.log(renderscreenfor);
  const caetagoriesIndex = [0, 1, 2, 3];
  return (
    <View>
      <Header small title="Workshop for luxury cars" />
      <ScrollView style={styles.contentContainer}>
        <Map />
        <View style={{height: 15}}></View>
        <Text style={{fontWeight: '600'}}>Scheduled Packages</Text>
        <View style={{height: 15}}></View>
        {renderscreenfor === 'small' ? (
          <>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                // alignSelf: 'center',
                // backgroundColor: 'teal',
              }}>
              {caetagoriesIndex.map((item, index) => (
                <View
                  style={{
                    width: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <SmallImage />
                </View>
              ))}
            </View>
          </>
        ) : (
          <>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                // alignSelf: 'center',
                // backgroundColor: 'teal',
              }}>
              {caetagoriesIndex.map((item, index) => (
                <LargeImage />
              ))}
            </View>
            <View style={{height: 15}}></View>
            <Text style={{fontWeight: '600'}}>Brake Maintenance</Text>
            <View style={{height: 15}}></View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                // alignSelf: 'center',
                // backgroundColor: 'teal',
              }}>
              {caetagoriesIndex.map((item, index) => (
                <LargeImage />
              ))}
            </View>
          </>
        )}
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

export default ServiceDetailCaetagories;
