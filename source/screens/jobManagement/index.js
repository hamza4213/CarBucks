import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../../common/components/header';
import Pending from './pending';
import Completed from './completed';
import InProgress from './inProgress';
import Cancelled from './cancelled';
import styles from './styles';
import NotFound from '../../common/components/notFound';
import RatingButton from '../../common/components/button/ratingButton';
import {t} from 'i18next';

export default function JobManagement() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Pending', 'In Progress', 'Completed', 'Canceled'];

  return (
    <View style={{flex: 1}}>
      <Header title={t('jobManagement') || 'Booking History'}>
        <View style={{paddingHorizontal: 20}}>
          <ScrollView
            contentContainerStyle={styles.tabContainer}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {tabs.map((title, key) => (
              <RatingButton
                {...{title, key}}
                onPress={() => setActiveTab(key)}
                type={activeTab === key ? 'gradient' : 'gray'}
                style={styles.jmBtn}
              />
            ))}
          </ScrollView>
        </View>
      </Header>
      <View style={styles.contentContainer}>
        {/* tab container end */}

        {activeTab === 0 ? (
          <Pending />
        ) : activeTab === 1 ? (
          <InProgress />
        ) : activeTab === 2 ? (
          <Completed />
        ) : activeTab === 3 ? (
          <Cancelled />
        ) : null}
      </View>
    </View>
  );
}
