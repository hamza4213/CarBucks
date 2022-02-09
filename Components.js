import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import AppLoader from './source/common/components/appLoader/index';
import GradiantButton from './source/common/components/button/GradiantButton';
import Button from './source/common/components/button/index';
import RatingButton from './source/common/components/button/ratingButton/index';
import Car from './source/common/components/car';
import AccessoryCard from './source/common/components/cards/accessoryCard/index';
import Checkbox from './source/common/components/checkbox';
import Tab from './source/common/components/drawer/tab/index';
import ChatScreenHeader from './source/common/components/header/chatScreenHeader/index';
import UserCard from './source/common/components/header/userCard/index';
import AuthInput from './source/common/components/input/authInput';
import Input from './source/common/components/input/index';
import LatoText from './source/common/components/LatoText/index';
import LinearGradientWrapper from './source/common/components/LinearGradientWrapper/index';
import NotFound from './source/common/components/notFound/index';
import NotificationCard from './source/common/components/notificationCard';
import PayOptions from './source/common/components/payOption/index';
import ProductCard from './source/common/components/productCartCard/index';
import ProfileCardJM from './source/common/components/profileCard/proficeCardJM/index';
import SearchInput from './source/common/components/searchInput/index';
import ServiceCard from './source/common/components/serviceCard/index';
import Tag from './source/common/components/tag/index';
import TagWithImg from './source/common/components/tagWithImg/index';
const Components = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      {/* <AppLoader /> */}
      <GradiantButton isGradiant={true} title={'Car Bucks App'} />
      <Button
        title={'HEllo Cars'}
        bgColor={'teal'}
        color={'Blue'}
        style={{width: '50%'}}
      />
      <RatingButton
        title={'CarBucks App'}
        style={{width: '100%', height: 30}}
        textStyle={{fontSize: 20}}
        isLoading={false}
        type={'gradient'}
      />
      <Car
        img={
          'https://s3.amazonaws.com/cdn.carbucks.com/181b6026-b2a4-43d8-b962-3a6e34abfc88.png'
        }
        distance={'1KM'}
        name={'This is my car'}
        rentPerHour={'50'}
        numberOfReviews={'5'}
        reviewsPercentage={'56%'}
      />
      <Checkbox isChecked={true} />
      <ChatScreenHeader />
      <UserCard />
      <AuthInput placeholder={'Hell there'} />
      <Input
        label={'This is input label'}
        placeholder={'This is a simple input'}
      />
      <LatoText text={'This is lato text components'} />
      <LinearGradientWrapper style={{width: '100%', height: 50}} right={true} />
      <NotFound />
      {/* <NotificationCard /> */}
      <PayOptions title={'Select'} value={'Select'} />
      {/* <ProductCard /> */}
      {/* <ProfileCardJM /> */}
      <SearchInput />
      {/* <ServiceCard /> */}
      {/* <Tag /> */}
      {/* <TagWithImg /> */}
      {/* <Toast/> */}
    </ScrollView>
  );
};

export default Components;
