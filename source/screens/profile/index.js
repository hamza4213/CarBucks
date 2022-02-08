import React, {useState} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import Header from '../../common/components/header';
import styles from './styles';
// import profilePic from '../../assets/pngs/profilePic.png ';
import profilePic from '../../assets/pngs/profilePic.png';
import CardView from 'react-native-cardview';
import YellowStar from '../../assets/svgs/yellowStar.svg';

import {useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/core';
import {capitalizeFirstLetter} from '../../common/utils/strings';
import ProfileInfo from './profileInfo';

export default function Profile() {
  const [activeTab, setActiveTab] = useState(0);
  const {user} = useSelector(state => state.auth);
  const {vendorData} = useRoute().params;
  var stars = [];
  for (let i = 0; i < Math.ceil(vendorData.score); i++) {
    stars.push(<YellowStar key={i} style={styles.star} />);
  }

 
  // console.log('image', vendorData?.service?.image);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header title="Profile" />
      <View style={styles.contentContainer}>
        <View style={{marginTop: -110}}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={
                vendorData?.service?.image
                  ? {uri: vendorData?.service?.image}
                  : profilePic
              }
            />
          </View>
          <View style={styles.profileRatingContainer}>
            <CardView
              elevation={2}
              cornerRadius={50}
              cardElevation={2}
              style={styles.profile}>
              <Text style={styles.profileName}>{`${capitalizeFirstLetter(
                vendorData.firstName,
              )} ${capitalizeFirstLetter(vendorData.lastName)}`}</Text>
              <View style={styles.reviewCountWrapper}>
                <View style={styles.starWrapper}>{stars}</View>
                <Text style={styles.reviewCount}>
                  {`(${vendorData?.score ? vendorData?.score : '3.5'}k)`}
                </Text>
              </View>
            </CardView>
          </View>
          <View style={styles.serviceContainer}>
            <Text style={styles.serviceText}>
              Car Mechanic / Engine Specialist
            </Text>
          </View>

          <View style={styles.performanceContainer}>
            <View style={styles.projectsWrapper}>
              <Text style={styles.value}>1000+</Text>
              <Text style={styles.key}>Projects Done</Text>
            </View>
            <View style={styles.projectsWrapper}>
              <Text style={styles.value}>5000+</Text>
              <Text style={styles.key}>Working Hours</Text>
            </View>
            <View style={styles.projectsWrapper}>
              <Text style={styles.value}>300+</Text>
              <Text style={styles.key}>Reviews</Text>
            </View>
          </View>

          <CardView
            elevation={2}
            cornerRadius={20}
            cardElevation={2}
            style={styles.tabs}>
            <TouchableOpacity
              onPress={() => setActiveTab(0)}
              style={activeTab === 0 ? styles.focusedTab : styles.tab}>
              <Text
                style={activeTab === 0 ? styles.ActiveTabText : styles.tabText}>
                Profile Info
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActiveTab(1)}
              style={activeTab === 1 ? styles.focusedTab : styles.tab}>
              <Text
                style={activeTab === 1 ? styles.ActiveTabText : styles.tabText}>
                Reviews
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActiveTab(2)}
              style={activeTab === 2 ? styles.focusedTab : styles.tab}>
              <Text
                style={activeTab === 2 ? styles.ActiveTabText : styles.tabText}>
                Others
              </Text>
            </TouchableOpacity>
          </CardView>

          <View>
            {activeTab === 0 ? (
              <ProfileInfo vendorData={vendorData} />
            ) : activeTab === 1 ? (
              <Text style={styles.profileDescription}>no reviews found</Text>
            ) : activeTab === 2 ? (
              <Text style={styles.profileDescription}>no data found</Text>
            ) : null}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
