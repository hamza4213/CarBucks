import React from 'react';
import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import thankYouCar from '../../assets/pngs/thankYouCar.png';
import styles from './styles';
import GoldStar from '../../assets/svgs/goldStar.svg';
import GrayStar from '../../assets/svgs/silverStar.svg';
import RatingButton from '../../common/components/button/ratingButton';
import {useNavigation, useRoute} from '@react-navigation/core';

export default function ThankYou() {
  const navigation = useNavigation();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}>
      <Image style={styles.image} source={thankYouCar} />
      <Text style={styles.thankYouText}>thank you</Text>
      <View style={styles.starWrapper}>
        <GoldStar height={35} width={35} />
        <GoldStar height={35} width={35} />
        <GoldStar height={35} width={35} />
        <GoldStar height={35} width={35} />
        <GrayStar height={35} width={35} />
        <GrayStar height={35} width={35} />
      </View>
      <Text style={styles.experiance}>How was your experiance</Text>
      <TextInput
        placeholder="Your Feedback"
        numberOfLines={6}
        style={styles.feedback}
      />
      <RatingButton
        title="Submit"
        type="gradiant"
        onPress={() => navigation.navigate('Home')}
        style={styles.sendButton}
      />
    </ScrollView>
  );
}
