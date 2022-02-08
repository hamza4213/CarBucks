import React from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import LeftIcon from '../../../../assets/svgs/back.svg';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { primaryDark, primaryLight } from '../../../constants/colors';
import profileImage from '../../../../assets/pngs/profileImage.png';

export default function ChatScreenHeader({ user, children }) {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={[primaryLight, primaryDark]}
      start={{ x: 0.2, y: 1.0 }}
      end={{ x: 0.8, y: 0.0 }}
      style={styles.contentContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.leftIconWrapper}>
        <LeftIcon />
      </TouchableOpacity>
      <Image source={profileImage} style={styles.image} />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>
          {user?.firstName || '-'} {user?.lastName || ''}
        </Text>
        <Text style={styles.status}>Online</Text>
      </View>

      {
        children
      }
    </LinearGradient>
  );
}
