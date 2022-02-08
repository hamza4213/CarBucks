import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import Header from '../../common/components/header';
import ProfileCardJM from '../../common/components/profileCard/transactionCard';
import profileImage from '../../assets/pngs/profilePic.png';
import {useNavigation} from '@react-navigation/native';
import UserCard from '../../common/components/header/userCard';
import {useSelector} from 'react-redux';
import Plus from '../../assets/svgs/plusWhite.svg';

const disputes = [
  {
    image: profileImage,
    service: 'Car Mechanic',
    name: 'Jhon Doe',
    price: '20',
    status: 'In Progress',
  },
  {
    image: profileImage,
    service: 'Car Mechanic',
    name: 'Jhon Doe',
    price: '20',
    status: 'In Progress',
  },
  {
    image: profileImage,
    service: 'Car Mechanic',
    name: 'Jhon Doe',
    price: '20',
    status: 'Resolved',
  },
];

export default function Disputes() {
  const navigation = useNavigation();

  const {auth} = useSelector(user => user);

  const renderTransactions = ({item, index}) => {
    return (
      <ProfileCardJM
        key={index}
        profile={item}
        onPress={() => navigation.navigate('DisputeDetails')}
      />
    );
  };

  return (
    <View>
      <Header
        menu
        small
        title="Disputes"
        rightComponent={
          <TouchableOpacity
            onPress={() => navigation.navigate('Dispute')}
            style={styles.plus}>
            <Plus />
          </TouchableOpacity>
        }
      />
      <View style={styles.contentContainer}>
        <FlatList
          style={styles.pt50}
          data={disputes}
          renderItem={renderTransactions}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
