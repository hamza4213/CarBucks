import React, {useState} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import CardView from 'react-native-cardview';

import Header from '../../common/components/header';
import {launchImageLibrary} from 'react-native-image-picker';
import styles from './styles';
import Input from '../../common/components/input';
import DisputePic from '../../assets/svgs/dispute.svg';
import {useNavigation} from '@react-navigation/native';
import Button from '../../common/components/button';

export default function Dispute() {
  const navigation = useNavigation();
  const [disputUri, setdisputUri] = useState('');
  const options = {};
  const selectImg = () =>
    launchImageLibrary(options, res => {
      if (res?.assets && res?.assets[0]?.uri) {
        setdisputUri(res?.assets[0]?.uri);
      } else {
        setdisputUri('');
      }
    });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header title="Dispute" />
      <View style={styles.contentContainer}>
        <View style={{marginTop: -120}}>
          <View style={styles.imageContainer}>
            {disputUri ? (
              <TouchableOpacity onPress={selectImg}>
                <Image source={{uri: disputUri}} style={styles.image} />
              </TouchableOpacity>
            ) : (
              <DisputePic
                onPress={selectImg}
                style={styles.image}
                height="150"
                width="150"
              />
            )}
          </View>
          <View style={[styles.profileNameContainer]}>
            <TouchableOpacity onPress={selectImg}>
              <CardView
                elevation={2}
                cornerRadius={50}
                cardElevation={2}
                style={[styles.profile]}>
                <Text style={styles.profileName}>
                  {disputUri ? 'Update Image' : 'Select Image'}
                </Text>
              </CardView>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.inputContainer}>
            <Input
              type="a"
              label="Title"
              // LeftIcon={Email}
              style={[styles.mb20, styles.mt20]}
              keyboardType="email-address"
              placeholder="your title here"
            />

            <Input
              type="a"
              label="Discription"
              multiline
              inputStyle={{textAlignVertical: 'top'}}
              style={styles.mb20}
              placeholder="your discription here"
              numberOfLines={10}
            />
            <Button
              onPress={() => navigation.navigate('Disputes')}
              title="Send Dispute"
            />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}
