import React, { useEffect } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import Header from '../../common/components/header';
import styles from './styles';
import profileImage from '../../assets/pngs/profileImage.png';
import NotificationCard from '../../common/components/notificationCard';
import UserCard from '../../common/components/header/userCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotifications } from '../../redux/actions/notification';
import { t } from 'i18next';

const services = [
  {
    image: profileImage,
    msg: 'Jogn doe sent you a message',
    time: '8 mints ago',
  },
  {
    image: profileImage,
    msg: 'Jogn doe sent you a message',
    time: '8 mints ago',
  },
  {
    image: profileImage,
    msg: 'Jogn doe sent you a ',
    time: '8 mints ago',
  },
  {
    image: profileImage,
    msg: 'Jogn doe sent you a message',
    time: '8 mints ago',
  },
  {
    image: profileImage,
    msg: 'Jogn doe sent you a message',
    time: '8 mints ago',
  },
  {
    image: profileImage,
    msg: 'Jogn doe sent you a ',
    time: '8 mints ago',
  },
];

export default function Notification() {
  const dispatch = useDispatch();
  const { auth } = useSelector(user => user);

  useEffect(() => {
    dispatch(fetchNotifications());
  }, []);

  const renderNotification = ({ item, index }) => {
    return (
      <NotificationCard key={index} notification={item} last={services.length === index + 1} />
    );
  };
  return (
    <View style={{ flex: 1 }} >
      <Header   title={t('notification')}>
        <UserCard user={auth?.user} />
      </Header>
      <View style={styles.contentContainer}>

        <FlatList
          data={services}
          renderItem={renderNotification}
          showsVerticalScrollIndicator={false}
          style={{ paddingTop: 30 }}
        />

      </View>
    </View>
  );
}
