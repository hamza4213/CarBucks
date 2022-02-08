import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import styles from './style';
import profileImage from '../../assets/pngs/profileImage.png';
import Radio from '../../assets/svgs/blackRadio.svg';
import ProfileCard from '../../common/components/profileCard';
import Header from '../../common/components/header';
import SearchInput from '../../common/components/searchInput';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getServicesByFilter, getProductsByFilter } from '../../redux/actions';
import {
  getSubCategoryServicesByName,
  resetServices,
} from '../../redux/actions/services';
import NotFound from '../../common/components/notFound';

const limit = 20;
export default function Services() {
  const { services } = useSelector(state => state.service);
  const params = useRoute().params;
  const dispatch = useDispatch();


  useEffect(() => {

    dispatch(getSubCategoryServicesByName(params));

    return () => {
      dispatch(resetServices());
    };
  }, []);

  const renderProfile = ({ item, index }) => {
    return <ProfileCard key={index} profile={item} />;
  };

  return (
    <View>
      <Header title={params?.type}>
        <View style={{ paddingHorizontal: 20, marginTop: -15 }}>
          <SearchInput small />
        </View>
      </Header>

      <View style={styles.contentContainer}>
        <View style={{ marginTop: -50 }}>
          <FlatList
            data={services}
            style={styles.pt30}
            renderItem={renderProfile}
            showsVerticalScrollIndicator={false}
          />
          {services && services.length ? null : (
            <View style={{ marginTop: 80 }}>
              <NotFound text="No service Available." />
            </View>
          )}
          <View style={styles.separator} />
        </View>
      </View>
    </View>
  );
}
