import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LeftIcon from '../../../assets/svgs/back.svg';
import {primaryLight, primaryDark} from '../../constants/colors';
import Menu from '../../../assets/svgs/menu.svg';
import styles from './styles';

export default function Header({
  menu,
  small,
  title,
  rightComponent,
  children,
  style,
  auth,
}) {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={[primaryDark, primaryLight]}
      start={{x: 0.2, y: 1.0}}
      end={{x: 0.8, y: 0.0}}
      style={[small ? styles.smallContainer : styles.container, style]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10, 
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {menu ? (
            <TouchableOpacity
              style={styles.leftIconWrapper}
              onPress={() => navigation.toggleDrawer()}>
              <Menu />
            </TouchableOpacity>
          ) : auth ? null : (
            <TouchableOpacity
              style={styles.leftIconWrapper}
              onPress={() => navigation.goBack()}>
              <LeftIcon />
            </TouchableOpacity>
          )}

          <Text style={styles.title}>{title}</Text>
        </View>
        {rightComponent}
      </View>
      {children}
    </LinearGradient>
  );
}
