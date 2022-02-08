import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

import Header from '../../common/components/header';
import ProfileImage from '../../assets/pngs/profileImage.png';

import {useNavigation} from '@react-navigation/native';

import styles from './styles';

import Car from '../../assets/svgs/car.svg';
import BigCar from '../../assets/svgs/bigCar.svg';
import Carts from '../../assets/svgs/carts.svg';
import Petrol from '../../assets/svgs/petrol.svg';

export default function CarScreen() {
  const navigation = useNavigation();

  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [distance, setDistance] = useState('');

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header
        small
        menu
        title="Car Detail"
        rightComponent={
          <Image source={ProfileImage} style={styles.headerImage} />
        }
      />
      <View style={styles.contentContainer}>
        <View style={styles.detailContainer}>
          <Text style={styles.detailHeading}>Car Details</Text>
          <View style={styles.detailInnerContainer}>
            <TextInput
              onChangeText={e => setName(e)}
              placeholder="Name"
              style={styles.detailTitil}
            />
            <Car style={styles.detailIcon} />
          </View>
          <View style={styles.detailInnerContainer}>
            <TextInput
              onChangeText={e => setModel(e)}
              placeholder="Model"
              style={styles.detailTitil}
            />
            <BigCar style={styles.detailIcon} />
          </View>
          <View style={styles.detailInnerContainer}>
            <TextInput
              onChangeText={e => setColor(e)}
              placeholder="Color"
              style={styles.detailTitil}
            />
            <Carts style={styles.detailIcon} />
          </View>
          <View style={styles.detailInnerContainer}>
            <TextInput
              onChangeText={e => setDistance(e)}
              placeholder="Distance"
              style={styles.detailTitil}
            />
            <Petrol style={styles.detailIcon} />
          </View>
          <View style={styles.detailInnerContainer}>
            <TextInput
              onChangeText={e => setDistance(e)}
              placeholder="Body Type"
              style={styles.detailTitil}
            />
            <Petrol style={styles.detailIcon} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
