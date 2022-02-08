import React, {useState} from 'react';
import {View} from 'react-native';
import CreditCard from 'react-native-credit-card-v2';
import CardFront from '../../../assets/pngs/card-front.png';
import CardBack from '../../../assets/pngs/card-back.png';
import styles from './styles';

export default function MyCreditCard({card}) {
  return (
    <View style={styles.container}>
      <CreditCard
        type={card.type}
        imageFront={CardFront}
        imageBack={CardBack}
        shiny={false}
        bar={false}
        focused={card.focused}
        number={card.number}
        name={card.name}
        expiry={card.expiry}
        cvc={card.cvc}
        style={styles.centered}
      />
    </View>
  );
}
