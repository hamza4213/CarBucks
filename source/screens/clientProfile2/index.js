import React from 'react';
import {View, Text, Image, Share} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Header from '../../common/components/header';
import styles from './styles';
import profilePic from '../../assets/pngs/girlProfile.png';
import NotificationGrd from '../../assets/svgs/notification.svg';
import TAndCGrd from '../../assets/svgs/tAndCGray.svg';
import LogOutGrd from '../../assets/svgs/logoutGray.svg';
import RatingGrd from '../../assets/svgs/silverStar.svg';
import TransactionGrd from '../../assets/svgs/transactionGray.svg';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import MORE from '../../assets/pngs/more.jpeg';
import WALLET from '../../assets/svgs/transactionWhite.svg';
import SEND from '../../assets/pngs/send.png';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/actions/auth';

const tabsData = [
  {
    icon: RatingGrd,
    title: 'Ratings',
    route: 'Ratings',
  },
  {
    icon: NotificationGrd,
    title: 'Notifcations',
    route: 'Notifcations',
  },

  {
    icon: TransactionGrd,
    title: 'Transaction History',
    route: 'TransactionHistory',
  },
  {
    icon: TAndCGrd,
    title: 'Terms & Conditions',
    route: 'TermsAndConditions',
  },
  {
    icon: LogOutGrd,
    title: 'Logout',
    route: 'Logout',
    isLogout: true,
  },
];

export default function ClientProfile2() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {user} = useSelector(state => state.auth);

  const logoutUser = () => {
    dispatch(logout());
  };

  const goToWallet = () => {
    navigation.navigate('Wallet');
  };

  const share = async () => {
    try {
      const result = await Share.share({
        title: 'App link',
        message:
          'Please install this app and stay safe , AppLink :https://wizardly-bardeen-2f1663.netlify.app/',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ScrollView>
      <Header menu small title="Profile" />
      <View style={styles.contentContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ClientProfile');
          }}
          style={styles.profileContainer}>
          <Image
            source={user?.image ? {uri: user?.image} : profilePic}
            style={styles.image}
          />
          <View style={styles.nameWrapper}>
            <Text
              style={
                styles.nameTxt
              }>{`${user.firstName} ${user.lastName}`}</Text>
            <Text style={styles.contactNoTxt}>{user?.phone}</Text>
          </View>
          <Image source={MORE} style={styles.more} />
        </TouchableOpacity>
        <Text style={styles.settingsTxt}>Settings</Text>

        <View style={styles.cardsContainer}>
          <TouchableOpacity onPress={goToWallet}>
            <View style={styles.card}>
              <View style={styles.walletView}>
                <WALLET height={15} width={15} />
              </View>
              <View style={styles.amountWrapper}>
                <Text style={styles.cardText}>Wallet</Text>
                <Text style={styles.amount}>$450</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={share}>
            <View style={styles.card}>
              <View style={styles.walletView}>
                <Image source={SEND} style={styles.cardImage} />
              </View>
              <Text style={[styles.cardText, {marginTop: 10}]}>
                Invite Friends
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.tabsContainer}>
          {tabsData.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                item?.isLogout ? logoutUser() : navigation.navigate(item.route)
              }
              style={styles.tabWrapper}>
              <View style={styles.iconView}>
                <item.icon width={15} height={15} />
              </View>
              <Text style={styles.tabText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
