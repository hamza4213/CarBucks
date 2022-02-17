import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import Header from '../../common/components/header';
import styles from './styles';
import AccessoryCard from '../../common/components/cards/accessoryCard';
import Radio from '../../assets/svgs/blackRadio.svg';
import {getAccessories, resetAccessories} from '../../redux/actions/products';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/core';
import NotFound from '../../common/components/notFound';
import BottomWhite from '../../assets/svgs/BottomWhite.svg';
import WhiteBell from '../../assets/svgs/WhiteBell.svg';
import SearchInput from '../../common/components/searchInput';
import LinearGradientWrapper from '../../common/components/LinearGradientWrapper';
import CompanyAccessoryComponent from '../../common/components/cards/accessoryCard/CompanyAccessoryComponent';
export default function AccessoriesProducts() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Car Mechanic', value: 'apple', icon: () => <Radio />},
    {label: 'Car Driving', value: 'banana1', icon: () => <Radio />},
    {label: 'Car Service', value: 'banana2', icon: () => <Radio />},
  ]);
  const {products} = useSelector(state => state.products);
  const params = useRoute().params;
  const categories = ['All', 'Tyres', 'Wipers', 'Car Oils', 'Carpets'];
  const [activeTab, setActiveTab] = useState('All');

  // console.log('params on accessory Product', params);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAccessories(params));

    return () => {
      dispatch(resetAccessories());
    };
  }, []);

  const renderAccessory = ({item, index}) => {
    return <AccessoryCard key={index} accessory={item} />;
  };

  return (
    <View style={styles.container}>
      <Header
        title="Car Mart Products"
        rightComponent={
          <View
            style={{
              height: 45,
              // backgroundColor: 'white',
              width: '40%',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#fff',
                height: 25,
                width: '60%',
                // marginTop: 10,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text style={{color: 'white'}}>Filter</Text>
              <BottomWhite />
            </TouchableOpacity>
            <TouchableOpacity>
              <WhiteBell />
            </TouchableOpacity>
          </View>
        }>
        <View style={{width: '90%', alignSelf: 'center', height: 60}}>
          <SearchInput />
        </View>
      </Header>

      <ScrollView style={styles.contentContainer}>
        <LinearGradientWrapper
          style={{
            marginTop: 20,
            borderRadius: 20,
            width: '90%',
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            padding: 5,
          }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{flexGrow: 0}}>
            {categories.map(item => (
              <TouchableOpacity
                key={item._id}
                onPress={() => setActiveTab(item)}
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
        <View style={{height: 15}}></View>
        <Text style={{fontWeight: '600', marginLeft: 15}}>Tires</Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            width: '90%',
            alignSelf: 'center',
          }}>
          <CompanyAccessoryComponent />
          <CompanyAccessoryComponent />
          <CompanyAccessoryComponent />
        </View>
        <View style={{height: 15, marginTop: 30}}></View>
      </ScrollView>
    </View>
  );
}
