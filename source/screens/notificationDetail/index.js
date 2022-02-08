import { t } from 'i18next';
import React from 'react';
import { View, Text } from 'react-native';
import CardView from 'react-native-cardview';
import { useSelector } from 'react-redux';
import Header from '../../common/components/header';
import UserCard from '../../common/components/header/userCard';
import styles from './styles';

export default function NotificationDetail() {
  const { auth } = useSelector(user => user);
  return (
    <View>
      <Header title={t('notificationDetails')} style={{ paddingHorizontal: 10 }} >
        <UserCard user={auth?.user} />
      </Header>
      <View style={[styles.contentContainer, { paddingHorizontal: 30 }]}>
        <CardView cornerRadius={5} style={styles.detailTextWrapper}>
          <Text style={styles.detailText}>
            Details: Your transaction is completed
          </Text>
        </CardView>
        <CardView cornerRadius={5} style={styles.notificationDetailCard}>
          <View style={styles.notificationWrapper}>
            <Text style={styles.notificationKey}>{t('notificationFrom')}</Text>
            <Text style={styles.notificationValue}>Company</Text>
          </View>
          <View style={styles.notificationWrapper}>
            <Text style={styles.notificationKey}>{t('time')}</Text>
            <Text style={styles.notificationValue}>3:25 PM</Text>
          </View>
          <View style={styles.notificationWrapper}>
            <Text style={styles.notificationKey}>{t('date')}</Text>
            <Text style={styles.notificationValue}>05/07/2021</Text>
          </View>
          <View style={styles.notificationWrapper}>
            <Text style={styles.notificationKey}>{t('day')}</Text>
            <Text style={styles.notificationValue}>Monday</Text>
          </View>
        </CardView>
      </View>
    </View>
  );
}
