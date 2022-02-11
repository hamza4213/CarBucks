import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Charts from '../home/Charts';
import Header from '../../common/components/header';
import styles from './styles';
import Menu from '../../assets/svgs/menu.svg';
import LinearGradient from 'react-native-linear-gradient';
import {primaryDark, primaryLight, text} from '../../common/constants/colors';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import AnalyticsComponent from '../../common/components/AnalyticsComponent/AnalyticsComponent';
const Data = [
  {earnings: '1200', type: 'Total Wallet Balance'},
  {earnings: '1300', type: 'Total Earnings'},
  {earnings: '1800', type: 'Total Invite Peoples'},
  {earnings: '2000', type: 'Total Wallet Balance'},
];
export default function Analytics({navigation}) {
  return (
    // <ScrollView>
    //   <Header title="Analytics" small />
    //   <View style={styles.contentContainer}>
    //   </View>
    // </ScrollView>
    <LinearGradient
      colors={[primaryDark, primaryLight]}
      start={{x: 0.2, y: 1.0}}
      end={{x: 0.8, y: 0.0}}
      style={[styles.header, {paddingTop: getStatusBarHeight()}]}>
      <View style={styles.headerContent}>
        <Menu onPress={() => navigation.toggleDrawer()} />
        <Text style={styles.text}>Analytics</Text>
      </View>
      <View style={styles.secondContainer}>
        <View style={{height: 15}}></View>
        <Text>My Earnings</Text>
        {/* <View style={{height: 15}}></View> */}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {Data.map((item, index) => {
            return (
              <>
                <AnalyticsComponent item={item} index={index} />
              </>
            );
          })}
        </View>
        <View style={{height: 15}}></View>
        <Text>Total Earnings</Text>
        <Charts />
      </View>
    </LinearGradient>
  );
}
