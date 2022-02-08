import React from 'react';
import {View, Text, Image} from 'react-native';
import profileImage from '../../../../assets/pngs/profilePic.png';
import {capitalizeFirstLetter} from '../../../utils/strings';
import styles from './style';

export default function UserCard({children, user}) {
  return (
    <View style={styles.profileContainer}>
      <Image
        source={user?.image ? {uri: user?.image} : profileImage}
        style={styles.image}
      />
      <View style={styles.nameContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {user?.firstName || '-'} {user?.lastName}
        </Text>
        <Text style={styles.role}>{user?.role || 'Car Owner'}</Text>
        {children}
      </View>
    </View>
  );
}
