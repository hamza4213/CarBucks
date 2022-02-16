import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../common/components/header';
import SearchInput from '../../common/components/searchInput';
import CardComponent from '../../common/components/ServiceComponents/CardComponent';

const PopularCarWashService = () => {
  const caetagories = [0, 1, 2, 3, 4];
  return (
    <View>
      <Header title="PopularCarWashService">
        <SearchInput />
      </Header>
      <ScrollView style={styles.contentContainer}>
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
export default PopularCarWashService;
