import React from 'react';
import { View, Text, FlatList } from 'react-native';
import RatingCard from '../../../common/components/profileCard/ratingCard';
import styles from './styles';

const receivedReviews = [
  {
    service: 'car machanic',
    name: 'nicki Minaj',
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    service: 'car machanic',
    name: 'jennifer lopez',
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    service: 'car machanic',
    name: 'rihanna',
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    service: 'car machanic',
    name: 'scarlett Johansonn',
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
];
export default function Received() {
  const renderReceivedReview = ({ item, index }) => {
    return <RatingCard key={index} type="received" data={item} />;
  };

  return (
    // <View style={styles.ReceivedContainer}>
    <FlatList
      showsVerticalScrollIndicator={false}
      style={{ marginTop: -35 }}
      data={receivedReviews}
      renderItem={renderReceivedReview}
    />
    // </View>
  );
}
