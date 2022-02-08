import React from 'react';
import styles from './styles';
import CardView from 'react-native-cardview';
import Header from '../../common/components/header';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {primaryDark, primaryLight} from '../../common/constants/colors';

export default function TransactionDetail() {
  return (
    <View>
      <Header small title="Transaction History" />
      <ScrollView style={styles.contentContainer}>
        <CardView
          cardElevation={2}
          cardMaxElevation={2}
          cornerRadius={15}
          style={styles.container}>
          <View style={styles.rowWrapper}>
            <Text style={styles.key}>ID</Text>
            <Text style={styles.key}>159</Text>
          </View>
          <View style={styles.rowWrapper}>
            <Text style={styles.key}>Service</Text>
            <Text style={styles.key}>Car Repair</Text>
          </View>
          <View style={styles.rowWrapper}>
            <Text style={styles.key}>Machanic Name</Text>
            <Text style={styles.key}>Jhon Deo</Text>
          </View>
          <View style={styles.rowWrapper}>
            <Text style={styles.key}>Payment Status</Text>
            <Text style={[styles.key, {color: '#00B047'}]}>Completed</Text>
          </View>
          <View style={styles.rowWrapper}>
            <Text style={styles.key}>Transaction Date</Text>
            <Text style={styles.key}>15/9/2021</Text>
          </View>
        </CardView>
        <TouchableOpacity>
          <LinearGradient
            colors={[primaryLight, primaryDark]}
            start={{x: 0.2, y: 1.0}}
            end={{x: 0.8, y: 0.0}}
            style={styles.downloadWrapper}>
            <Text style={styles.download}>Download</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
