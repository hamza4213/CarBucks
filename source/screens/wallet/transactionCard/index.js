import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';
import BlackDown from '../../../assets/svgs/blackDown.svg';

const TransactionCard = ({data}) => {
  return (
    <View style={styles.transactionContainer}>
      <View style={styles.iconContainer}>
        <BlackDown />
      </View>
      <View>
        <Text style={styles.tranDesc}>{data?.title}</Text>
        <Text style={styles.time}>{data?.time}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>+${data?.price}</Text>
      </View>
    </View>
  );
};
export default TransactionCard;
