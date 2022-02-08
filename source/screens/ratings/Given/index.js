import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import RatingCard from '../../../common/components/profileCard/ratingCard';
import { useDispatch } from 'react-redux';
import { getRatings } from '../../../redux/actions';
import NotFound from '../../../common/components/notFound';

const givenReviews = [
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
    name: 'jennifer lopez',
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    service: 'car machanic',
    name: 'jennifer lopez',
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
];

export default function Given() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    setLoader(true);
    dispatch(getRatings());
  }, []);

  const stopLoader = data => {
    setLoader(false);
    setRatings(data);
  };
  const renderReview = ({ item, index }) => {
    return <RatingCard key={index} data={item} type="given" />;
  };

  return (
    // <View style={styles.ratingCardContainer}>
      <FlatList
        showsVerticalScrollIndicator
        data={givenReviews}
        renderItem={renderReview}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: -35 }}
        ListEmptyComponent={() => (
          <NotFound text="You have not given any rating yet." />
        )}
      // style={styles.mt25}
      />


    // </View>
  );
}
