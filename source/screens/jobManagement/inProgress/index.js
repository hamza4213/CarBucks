import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import ProfileCardMJ from '../../../common/components/profileCard/proficeCardJM';
import profileImage from '../../../assets/pngs/profileImage.png';
import { fetchOrders } from '../../../redux/actions/jobManagement';
import NotFound from '../../../common/components/notFound';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import girlProfile from '../../../assets/pngs/girlProfile.png';
import Input from '../../../common/components/input/jobManagementInput';
import parentStyles from '../styles'


export default function InProgress() {
  const dispatch = useDispatch();

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  useEffect(() => {
    // dispatch(fetchOrders());
  }, []);


  const { orders } = useSelector(state => state.jobManagement);

  const tabData = orders?.filter(item => item.status === 'booked');
  const cardData = Array(10).fill().map((_, key) => ({
    id: Math.random(),
    totalPrice: Math.round(Math.random() * 1000),
    title: "Item " + key + 1,
    image: require('../../../assets/pngs/girlProfile.png'),
    description: "item?.bookings[0]?.items[0]?.details.description",
    status: 'inProgress',
  }))

  const renderProfile = ({ item, index }) => {
    return <ProfileCardMJ key={index} profile={item} type="inProgress" last={cardData.length === index + 1} />;
  };
  return (
    <View style={{ flex: 1 }} >
      <View style={parentStyles.inputContainer} >
        <Input label="Name" placeholder="Enter name" value={name} onChangeText={txt => setName(txt)} marginRight={20} />
        <Input label="Search By Price" placeholder="Price" value={price} onChangeText={txt => setPrice(txt)} />
      </View>
      <FlatList
        data={cardData}
        style={parentStyles.flatList}
        renderItem={renderProfile}
        keyExtractor={(item, key) => String(key)}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<NotFound text="No Item found in the cart." />}
      />
    </View>
  )
}
