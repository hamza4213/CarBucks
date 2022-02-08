import React from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import styles from './styles';
import ProfileImage from '../../../assets/pngs/profileImage.png';
import CardView from 'react-native-cardview';
import {useNavigation} from '@react-navigation/native';

export default function ServiceCard({profile, style}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate('Services')}>
      <CardView
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={15}
        style={[styles.container, style]}>
        <Image style={styles.image} source={profile.image} />

        <View style={styles.textView}>
          <Text style={styles.service}>{profile.service}</Text>
          {/* <Text style={styles.name}>{profile.name}</Text> */}
        </View>

        <View style={styles.endView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ServiceDetails')}>
            <Text style={styles.bookNow}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </CardView>
    </TouchableOpacity>
  );
}
// ServiceDetails
