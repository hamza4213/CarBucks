import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import ProfileCardJM from '../../../common/components/profileCard/proficeCardJM';
import profileImage from '../../../assets/pngs/profileImage.png';
import {fetchOrders} from '../../../redux/actions/jobManagement';
import NotFound from '../../../common/components/notFound';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import Input from '../../../common/components/input/jobManagementInput';
import parentStyles from '../styles';

export default function Pending() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  const {orders} = useSelector(state => state.jobManagement);

  const tabData = orders?.filter(item => item.status === 'booked');
  const cardData = tabData?.map(item => {
    return {
      id: item._id,
      totalPrice: item?.totalPrice || 0,
      title: item?.bookings[0]?.items[0]?.title,
      image: item?.bookings[0]?.items[0]?.details.image,
      description: item?.bookings[0]?.items[0]?.details.description,
      status: 'pending',
    };
  });

  const cardDataDummy = Array(10)
    .fill()
    .map((_, key) => ({
      id: Math.random(),
      totalPrice: Math.round(Math.random() * 1000),
      title: 'Item ' + key + 1,
      image: require('../../../assets/pngs/girlProfile.png'),
      description: 'Car Mechanic',
      status: 'pending',
    }));

  const renderProfile = ({item, index}) => {
    return (
      <ProfileCardJM
        key={index}
        profile={item}
        type="pending"
        last={
          (!!cardData.length ? cardData.length : cardDataDummy.length) ===
          index + 1
        }
      />
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={parentStyles.inputContainer}>
        <Input
          label="Name"
          placeholder="Enter name"
          value={name}
          onChangeText={txt => setName(txt)}
          marginRight={20}
        />
        <Input
          label="Search By Price"
          placeholder="Price"
          value={price}
          onChangeText={txt => setPrice(txt)}
        />
      </View>
      <FlatList
        data={!!cardData.length ? cardData : cardDataDummy}
        style={parentStyles.flatList}
        renderItem={renderProfile}
        keyExtractor={(item, key) => String(key)}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<NotFound text="No Item found in the cart." />}
      />
    </View>
  );
}
