import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Header from '../../common/components/header';

const AccessoriesDetails = () => {
  const {height} = Dimensions.get('window');
  return (
    <View>
      <Header title={'Accessories'} />
      <ScrollView style={styles.contentContainer}>
        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            // top: height * 0.2,
            // position: 'absolute',

            borderRadius: 18,
            height: height * 0.5,
            paddingHorizontal: 20,
            backgroundColor: 'black',
            // overflow: 'hidden',
          }}></View>
        <View style={{height: 150, marginTop: 200}}></View>
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
export default AccessoriesDetails;
