import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import profileImage from '../../../../assets/pngs/profileImage.png';
import CardView from 'react-native-cardview';
import LinearGradient from 'react-native-linear-gradient';
import colors, { primaryDark, primaryLight } from '../../../constants/colors';
import { capitalizeFirstLetter } from '../../../utils/strings';
import { useNavigation } from '@react-navigation/native';
import { t } from 'i18next';
import { startCase } from 'lodash';
import { currencySymbol } from '../../../../utils/helper'
import MaskedView from '@react-native-community/masked-view';
import LinearGradientWrapper from '../../LinearGradientWrapper';

export default function ProfileCardJM({ profile, onPress, style, type, last }) {
  const navigation = useNavigation();
  let textColor = '';


  if (profile?.status === 'completed') {
    textColor = 'green';
  } else if (profile?.status === 'pending') {
    textColor = primaryLight;
  } else if (profile?.status === 'cancelled') {
    textColor = primaryDark;
  }

  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress} activeOpacity={0.9} style={{ marginBottom: last ? 40 : 20 }} >
      <CardView
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={15}
        style={[styles.container, style]}>
        <Image style={styles.image} source={typeof profile.image === "string" ? { uri: profile?.image } : profile?.image} />

        <View style={{ padding: 15, paddingLeft: 10, paddingRight: 20, flex: 1, flexDirection: "row", }} >

          <View style={[styles.textView, { flex: 1, paddingRight: 5 }]}>
            <Text style={styles.name}>{profile.title}</Text>
            <Text style={styles.service}>{profile.description}</Text>
            {
              (profile?.status === "completed" || profile?.status === "pending") &&
              <Text
                onPress={() => navigation.navigate("ChatHistory", { screen: "Chat" })}
                style={{ color: colors.blue, fontSize: 11, bottom: 0, position: "absolute", }}
              >{profile?.status === "completed" ? "Rate this service" : "Chat Now"}</Text>
            }
          </View>

          <View
            style={[
              styles.endView,
              styles.sb

            ]}>
            {/* {profile.status === 'completed' ? ( */}

            {/* ) : null} */}
            <MaskedView maskElement={<Text style={styles.price}>{currencySymbol}{profile.totalPrice}/-</Text>}>
              <LinearGradientWrapper   >
                <Text style={[styles.price, { opacity: 0 }]} >{currencySymbol}{profile.totalPrice}/-</Text>
              </LinearGradientWrapper>

            </MaskedView>


            {profile.status === 'inProgress' ? (
              <TouchableOpacity
                onPress={() =>
                  type === 'inProgress'
                    ? navigation.navigate('JobInProgress', {
                      id: profile?.id,
                    })
                    : null
                }>
                <LinearGradientWrapper style={styles.editWrapper}   >
                  <Text style={styles.edit}>{t('edit') || "Edit"}</Text>
                </LinearGradientWrapper>
              </TouchableOpacity>
            ) : (
              <Text style={[styles.completed, { color: textColor }]}>
                {startCase(profile.status)}
              </Text>
            )}
          </View>
        </View>
      </CardView>
    </TouchableOpacity>
  );
}
