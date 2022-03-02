import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import LinearGradientWrapper from '../../common/components/LinearGradientWrapper';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {useTranslation, I18nextProvider} from 'react-i18next';
const HorizontalServiceDetails = props => {
  const {activeTab, setActiveTab} = props;
  const {t} = useTranslation();
  const navigation = useNavigation();
  const FileCaetagories = [
    'Services',
    'Accessories',
    'RentCar',
    'BuyCar',
    'Insurance',
  ];
  const onCategoryPress = useCallback(
    item => {
      console.log('item in onCatoagry press', item);
      if (item === 'BuyCar' || item === 'RentCar') {
        const setstatefunction = async item => {
          console.log('item in function ', item);
          await setActiveTab(item);
        };
        setstatefunction(item);
        console.log('active Tab is', activeTab);
        navigation.navigate(item);
      } else {
        const setstatefunction = async item => {
          console.log('item in function ', item);
          await setActiveTab(item);
        };
        setstatefunction(item);
        navigation.navigate('Home');
        console.log('activeTabis', activeTab);
      }
      // console.log('consoling active tab', activeTab?.type, subCategories[0]);
      // console.table(activeTab?.type, subCategories[0]);
      // setFilteredData(subCategories.filter(i => i?.parent === item._id));
    },
    [activeTab],
  );

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
