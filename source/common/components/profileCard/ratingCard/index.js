import React from 'react';
import {View, Text, Image} from 'react-native';
import CardView from 'react-native-cardview';
import styles from './styles';
import profileImage from '../../../../assets/pngs/profileImage.png';
import girlProfile from '../../../../assets/pngs/girlProfile.png';
import GoldStar from '../../../../assets/svgs/goldStar.svg';
import SilverStar from '../../../../assets/svgs/silverStar.svg';
import RatingButton from '../../button/ratingButton';

export default function RatingCard({data, type}) {
  return (
    <CardView cornerRadius={15} style={styles.container}>
      <View style={styles.reviewWrapper}>
        <Image source={girlProfile} style={styles.image} />
        <View style={styles.nameWrapper}>
          <Text style={styles.textService}>{data.service}</Text>
          <Text style={styles.textName}>{data.name}</Text>
          <View style={styles.starWrapper}>
            <GoldStar />
            <GoldStar />
            <GoldStar />
            <GoldStar />
            <SilverStar />
            <SilverStar />
          </View>
        </View>
      </View>
      <View style={styles.reviewTextWrapper}>
        <Text style={styles.reviewHeading}>Your Review</Text>
        <Text style={styles.reviewText}>{data.review}</Text>
      </View>
      {type === 'received' ? (
        <RatingButton
          title="Giva a Review"
          type="gradiant"
          style={styles.giveReviewBtn}
        />
      ) : null}
    </CardView>
  );
}
