import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import Search from '../../../assets/svgs/searchGradiant.svg';
import CardView from 'react-native-cardview';
import { useTranslation } from 'react-i18next';

export default function SearchInput({ small }) {
  const { t } = useTranslation();
  return (
    <CardView
      cardElevation={2}
      cardMaxElevation={2}
      cornerRadius={small ? 10 : 15}
      style={[styles.container, small && styles.smallContainer]}>
      <TextInput placeholder={t('search')} style={styles.input} />
      <Search style={styles.searchIcon} />
    </CardView>
  );
}
