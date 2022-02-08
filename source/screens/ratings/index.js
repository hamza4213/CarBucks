import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import RatingButton from '../../common/components/button/ratingButton';
import Header from '../../common/components/header';
import RatingCard from '../../common/components/profileCard/ratingCard';
import styles from './styles';
import Given from './Given';
import Received from './Received';
import { sHeight } from '../../utils/helper'

export default function Ratings() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View style={{ flex: 1, }} >
      <Header title="Ratings">
        <View style={styles.buttonContainer}>
          <RatingButton
            title="Given"
            onPress={() => setActiveIndex(0)}
            // type="gradiant"
            type={activeIndex === 0 ? 'gradiant' : 'gray'}
            style={styles.givenBtn}
          />
          <RatingButton
            title="Received"
            style={styles.receivedBtn}
            onPress={() => setActiveIndex(1)}
            type={activeIndex === 1 ? 'gradiant' : 'gray'}
          />
        </View>
      </Header>


      <View style={styles.givenContainer}>
        {activeIndex === 0 ? (
          <Given />
        ) : activeIndex === 1 ? (
          <Received />
        ) : null}
        {/* <Received /> */}
      </View>

    </View>
  );
}
