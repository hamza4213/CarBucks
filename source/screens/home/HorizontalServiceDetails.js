import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import LinearGradientWrapper from '../../common/components/LinearGradientWrapper';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
const HorizontalServiceDetails = props => {
  const {activeTab, setActiveTab} = props;
  const navigation = useNavigation();
  const FileCaetagories = [
    'Services',
    'Accessories',
    'Products',
    'RentCar',
    'BuyCar',
    'Insurance',
  ];
  const onCategoryPress = item => {
    if (item === 'BuyCar' || item === 'RentCar') {
      navigation.navigate(item);
    }
    setActiveTab(item);
    console.log('activeTabis', activeTab);

    // console.log('consoling active tab', activeTab?.type, subCategories[0]);
    // console.table(activeTab?.type, subCategories[0]);
    // setFilteredData(subCategories.filter(i => i?.parent === item._id));
  };
  return (
    <LinearGradientWrapper
      style={{
        marginTop: 20,
        borderRadius: 20,
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
      }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{flexGrow: 0}}>
        {/* changin caetagories as FileCaetagories */}
        {FileCaetagories.map(item => (
          <TouchableOpacity
            key={item}
            onPress={() => onCategoryPress(item)}
            style={[styles.tab, activeTab === item && styles.focusedTab]}>
            <Text
              style={
                activeTab === item ? styles.ActiveTabText : styles.tabText
              }>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </LinearGradientWrapper>
  );
};

export default HorizontalServiceDetails;