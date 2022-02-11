import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Menu from '../../assets/svgs/menu.svg';
import LinearGradient from 'react-native-linear-gradient';
import {primaryDark, primaryLight, text} from '../../common/constants/colors';
import styles from './styles';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import InviteVector from '../../assets/svgs/InviteVector.svg';
import TwitterIcon from '../../assets/svgs/TwitterIcon.svg';
import FbIcon from '../../assets/svgs/FbIcon.svg';
import WhatsapIcon from '../../assets/svgs/WhatsapIcon.svg';
import LinkedIcon from '../../assets/svgs/linkedIcon.svg';
import Input from '../../common/components/input/jobManagementInput';
import InviteStatus from '../../common/components/InviteStatusComponent/InviteStatus';
const InviteScreen = ({navigation}) => {
  const Data = [
    {
      img: require('../../assets/pngs/girlProfile.png'),
      name: 'John Doe',
      location: 'BurnSide',
      socialmedia: 'Whatsapp',
      status: 'Active',
      date: new Date(),
    },
    {
      img: require('../../assets/pngs/girlProfile.png'),

      name: 'John Doe',
      location: 'BurnSide',
      socialmedia: 'Whatsapp',
      status: 'InActive',
      date: new Date(),
    },
    {
      img: require('../../assets/pngs/girlProfile.png'),

      name: 'John Doe',
      location: 'BurnSide',
      socialmedia: 'Whatsapp',
      status: 'InActive',
      date: new Date(),
    },
    {
      img: require('../../assets/pngs/girlProfile.png'),
      name: 'John Doe',
      location: 'BurnSide',
      socialmedia: 'Whatsapp',
      status: 'Active',
      date: new Date(),
    },
  ];
  return (
    <LinearGradient
      colors={[primaryDark, primaryLight]}
      start={{x: 0.2, y: 1.0}}
      end={{x: 0.8, y: 0.0}}
      style={[styles.header, {paddingTop: getStatusBarHeight()}]}>
      <View style={styles.headerContent}>
        <Menu onPress={() => navigation.toggleDrawer()} />
        <Text style={styles.text}>Invite Friends</Text>
      </View>
      <View style={styles.secondContainer}>
        <ScrollView>
          <View style={{height: 15}}></View>
          <View style={{widt: '100%', alignItems: 'center'}}>
            <InviteVector />
          </View>
          <View style={{height: 15}}></View>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '500', fontSize: 17}}>
              Invite Friends
            </Text>
          </View>
          <View
            style={{
              width: '95%',
              alignSelf: 'center',
              //   backgroundColor: '#000',
            }}>
            <View style={{height: 15}}></View>
            <Text>
              Donec enim lectus, venenatis nec aliquam a, varius sed ex. Ut
              laoreet augue velit, vel malesuada elit euismod ut. Nam at dui
              eros. Vivamus sem quam, tincidunt a urna congue, malesuada
              consectetur leo. Donec ornare consectetur ante, ac viverra arcu
              rhoncus ac
            </Text>
            <View style={{height: 15}}></View>
            <View
              style={{
                height: 50,
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                borderColor: text,
              }}>
              <Text> href=http://" style="font-size: 11px</Text>
              <Text style={{color: primaryDark, fontWeight: 'bold'}}>COPY</Text>
            </View>
          </View>
          <View style={{height: 15}}></View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: 60,
              //   backgroundColor: 'teal',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <Text>Share With Your Friends:</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '40%',
              }}>
              <FbIcon />
              <TwitterIcon />
              <LinkedIcon />
              <WhatsapIcon />
            </View>
          </View>
          <View style={{height: 15}}></View>
          <View
            style={{
              height: 1,
              backgroundColor: '#000',
              width: '90%',
              alignSelf: 'center',
            }}></View>
          <View style={{height: 15}}></View>
          <View style={{width: '100%', paddingLeft: 15}}>
            <Text style={{fontWeight: '500', fontSize: 17}}>
              Invited Friends
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
                paddingHorizontal: 20,
              }}>
              <Input
                label="Name"
                placeholder="Enter name"
                //   value={name}
                //   onChangeText={txt => setName(txt)}
                marginRight={20}
              />
              <Input
                label="Status"
                placeholder="Price"
                //   value={price}
                //   onChangeText={txt => setPrice(txt)}
              />
            </View>
          </View>
          <View style={{height: 15}}></View>
          {Data.map((item, index) => {
            return (
              <>
                <InviteStatus item={item} />
                <View style={{height: 15}}></View>
              </>
            );
          })}
          <View style={{height: 15, marginTop: '20%'}}></View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default InviteScreen;
