import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Charts from '../home/Charts';
import Header from '../../common/components/header';
import styles from './styles';

export default function Analytics() {
  return (
    <ScrollView>
      <Header title="Analytics" small />
      <View style={styles.contentContainer}>
        <Charts />
      </View>
    </ScrollView>
  );
}
