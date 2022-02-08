import React from 'react';
import {View, Text} from 'react-native';
import CardView from 'react-native-cardview';
import styles from '../styles';
import LocationIcon from '../../../assets/svgs/locationIcon.svg';
import PhoneIcon from '../../../assets/svgs/phoneIcon.svg';

export default function ProfileInfo({vendorData}) {
  return (
    <>
      <Text style={styles.profileDescription}>
        This is Dominic Charles, I have 12 years Experience, Lorem Ipsum is
        simply dummy text of the printing and typesetting industry
      </Text>
      <View style={styles.addressContainer}></View>
      {/* <View style={styles.addressWrapper}>
        <CardView
          cornerRadius={20}
          elevation={2}
          cardElevation={2}
          style={styles.locationCard}>
          <LocationIcon />
        </CardView>
        <Text style={styles.addressText}>{vendorData?.country}</Text>
      </View>
      <View style={styles.addressWrapper}>
        <CardView
          cornerRadius={20}
          elevation={2}
          cardElevation={2}
          style={styles.locationCard}>
          <PhoneIcon />
        </CardView>
        <Text style={styles.addressText}>{vendorData?.phone}</Text>
      </View> */}
    </>
  );
}
