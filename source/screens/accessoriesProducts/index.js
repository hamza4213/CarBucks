import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import Header from '../../common/components/header';
import styles from './styles';
import AccessoryCard from '../../common/components/cards/accessoryCard';
import Radio from '../../assets/svgs/blackRadio.svg';
import { getAccessories, resetAccessories } from '../../redux/actions/products';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/core';
import NotFound from '../../common/components/notFound';

export default function AccessoriesProducts() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Car Mechanic', value: 'apple', icon: () => <Radio /> },
    { label: 'Car Driving', value: 'banana1', icon: () => <Radio /> },
    { label: 'Car Service', value: 'banana2', icon: () => <Radio /> },
  ]);
  const { products } = useSelector(state => state.products);
  const params = useRoute().params;

  // console.log('params on accessory Product', params);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAccessories(params));

    return () => {
      dispatch(resetAccessories());
    };
  }, []);

  const renderAccessory = ({ item, index }) => {
    return <AccessoryCard key={index} accessory={item} />;
  };

  return (
    <View style={styles.container}>
      <Header title="Accessories Products" />

      <View style={styles.contentContainer}>
        <View style={{ marginTop: -50 }}>
          <FlatList
            data={products}
            numColumns={2}
            renderItem={renderAccessory}
            showsVerticalScrollIndicator={false}
          />
          {products && products.length ? null : (
            <View style={{ marginTop: 100 }}>
              <NotFound text="No Accessories Available." />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
