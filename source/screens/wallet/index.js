import React from 'react';
import {View, Text} from 'react-native';
import RatingButton from '../../common/components/button/ratingButton';
import Header from '../../common/components/header';
import styles from './styles';
import {FlatList} from 'react-native-gesture-handler';
import TransactionCard from './transactionCard';

const transactions = [
  {
    title: 'Money added in wallet',
    time: '8:20 AM, Yesterday',
    price: '100',
  },
  {
    title: 'Money added in wallet',
    time: '8:20 AM, Yesterday',
    price: '100',
  },
  {
    title: 'Money added in wallet',
    time: '8:20 AM, Yesterday',
    price: '100',
  },
  {
    title: 'Money added in wallet',
    time: '8:20 AM, Yesterday',
    price: '100',
  },
];

const Wallet = () => {
  const renderTransaction = ({item, index}) => {
    return <TransactionCard key={index} data={item} />;
  };

  return (
    <View>
      <Header title="Wallet">
        <View style={styles.headerContent}>
          <Text style={styles.walletText}>Total Balance</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, paddingTop: 10}}>
              <Text style={styles.balance}>$450.00</Text>
            </View>
            <View style={styles.buttonContainer}>
              <RatingButton
                textStyle={styles.btnText}
                style={styles.addMoneyBtn}
                title="+ Add Money"
              />
            </View>
          </View>
        </View>
      </Header>
      <View style={styles.contentContainer}>
        <Text style={styles.transactionTxt}>Transactions</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={transactions}
          renderItem={renderTransaction}
        />
      </View>
    </View>
  );
};

export default Wallet;
