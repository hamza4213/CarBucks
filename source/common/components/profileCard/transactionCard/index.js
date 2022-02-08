import React from 'react';
import styles from './styles';
import CardView from 'react-native-cardview';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  primaryDark,
  primaryLight,
  text,
  textDark,
} from '../../../constants/colors';

export default function ProfileCardJM({profile, onPress, style, type}) {
  const navigation = useNavigation();
  let textColor = '';

  if (profile?.status === 'completed') {
    textColor = 'green';
  } else if (profile?.status === 'pending') {
    textColor = 'grey';
  } else if (profile?.status === 'cancel') {
    textColor = primaryDark;
  } else {
    textColor = textDark;
  }

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <CardView
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={15}
        style={[styles.container, style]}>
        <Image style={styles.image} source={profile?.image} />

        <View style={styles.textView}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.service}>{profile.service}</Text>
        </View>

        <View
          style={[
            styles.endView,
            profile.status === 'completed' ? styles.sb : styles.centered,
          ]}>
          {profile.status === 'completed' ? (
            <Text style={styles.price}>{profile.price} AED/-</Text>
          ) : null}

          {profile.status === 'pending' ? (
            <TouchableOpacity
              onPress={() =>
                type === 'inProgres'
                  ? navigation.navigate('JobInProgress', {
                      id: profile?.id,
                    })
                  : null
              }>
              <LinearGradient
                colors={[primaryLight, primaryDark]}
                start={{x: 0.2, y: 1.0}}
                end={{x: 0.8, y: 0.0}}
                style={styles.editWrapper}>
                <Text style={styles.edit}>Edit</Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            <Text style={[styles.completed, {color: textColor}]}>
              {profile.status}
            </Text>
          )}
        </View>
      </CardView>
    </TouchableOpacity>
  );
}
