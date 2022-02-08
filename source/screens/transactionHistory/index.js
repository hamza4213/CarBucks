import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import Header from '../../common/components/header';
import ProfileCardJM from '../../common/components/profileCard/transactionCard';
import profileImage from '../../assets/pngs/profilePic.png';
import {useNavigation} from '@react-navigation/native';
import UserCard from '../../common/components/header/userCard';
import {useSelector} from 'react-redux';

const transactions = [
  {
    image: profileImage,
    service: 'Car Mechanic',
    name: 'Jhon Doe',
    price: '20',
    status: 'completed',
  },
  {
    image: profileImage,
    service: 'Car Mechanic',
    name: 'Jhon Doe',
    price: '20',
    status: 'completed',
  },
  {
    image: profileImage,
    service: 'Car Mechanic',
    name: 'Jhon Doe',
    price: '20',
    status: 'cancel',
  },
];

export default function TransactionHistory() {
  const navigation = useNavigation();

  const {auth} = useSelector(user => user);

  const renderTransactions = ({item, index}) => {
    return (
      <ProfileCardJM
        key={index}
        profile={item}
        onPress={() => navigation.navigate('TransactionDetail')}
      />
    );
  };
  return (
    <View>
      <Header menu small title="Transaction History" />
      <View style={styles.contentContainer}>
        <FlatList
          style={styles.pt50}
          data={transactions}
          renderItem={renderTransactions}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
