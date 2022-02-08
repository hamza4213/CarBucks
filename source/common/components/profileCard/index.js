import React from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import styles from './styles';
import ProfileImage from '../../../assets/pngs/profileImage.png';
import CardView from 'react-native-cardview';
import {useNavigation} from '@react-navigation/native';

export default function ProfileCard({profile, style}) {
  const navigation = useNavigation();



  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ServiceDetails', {item: profile})}
      activeOpacity={0.9}>
      <CardView
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={15}
        style={[styles.container, style]}>
        <Image
          style={styles.image}
          source={
            profile?.details?.image
              ? {uri: profile?.details?.image[0]}
              : ProfileImage
          }
        />

        <View style={styles.textView}>
          <Text style={styles.service}>{profile.title}</Text>
          <Text
            style={
              styles.name
            }>{`${profile.vendor.firstName} ${profile.vendor.lastName}`}</Text>
          <Text style={styles.name}>
            {`${profile.details.description}`.slice(0, 28) + '...'}
          </Text>
        </View>

        <View style={styles.endView}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ServiceDetails', {item: profile})
            }>
            <Text style={styles.seeDetails}>See Details</Text>
          </TouchableOpacity>
        </View>
      </CardView>
    </TouchableOpacity>
  );
}
// ServiceDetails
