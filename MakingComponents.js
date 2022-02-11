import {ScrollView, Text} from 'react-native';
import React from 'react';
import SmallImage from './source/common/components/ImagesComponents/SmallImage';
import LargeImage from './source/common/components/ImagesComponents/LargeImage';
import SmallImageForFlatlist from './source/common/components/ImagesComponents/SmallImageForFlatlist';
import WorkShopDetails from './source/common/components/WorkshopDetailsComponent.js/WorkShopDetails';
import AnalyticsComponent from './source/common/components/AnalyticsComponent/AnalyticsComponent';

const MakingComponents = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <SmallImage />
      <LargeImage />
      <SmallImageForFlatlist />
      <WorkShopDetails />
      <AnalyticsComponent />
    </ScrollView>
  );
};

export default MakingComponents;
