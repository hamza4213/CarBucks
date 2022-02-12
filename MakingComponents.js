import {View, Text} from 'react-native';
import React from 'react';
import SmallImage from './source/common/components/ImagesComponents/SmallImage';
import LargeImage from './source/common/components/ImagesComponents/LargeImage';
import SmallImageForFlatlist from './source/common/components/ImagesComponents/SmallImageForFlatlist';
import WorkShopDetails from './source/common/components/WorkshopDetailsComponent.js/WorkShopDetails';
import AnalyticsComponent from './source/common/components/AnalyticsComponent/AnalyticsComponent';
import InsuranceComponent from './source/common/components/InsuranceComponent/InsuranceComponent';

const MakingComponents = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      {/* <SmallImage />
      <LargeImage />
      <SmallImageForFlatlist />
      <WorkShopDetails />
      <AnalyticsComponent /> */}
      <InsuranceComponent />
    </View>
  );
};

export default MakingComponents;
