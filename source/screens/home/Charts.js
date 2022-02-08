import {t} from 'i18next';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, Dimensions} from 'react-native';
import CardView from 'react-native-cardview';
import {
  BarChart,
  ContributionGraph,
  LineChart,
  PieChart,
  ProgressChart,
} from 'react-native-chart-kit';
import {darKGrayBg, primaryLight} from '../../common/constants/colors';
import styles from './chartStyles';

const screenWidth = Dimensions.get('window').width;
const chartConfig = {
  backgroundGradientFrom: 'white',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: 'white',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(163, 0, 0, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const data = {
  labels: ['Jan', 'Feb', 'Mar'],
  datasets: [
    {
      data: [38, 35, 32],
    },
  ],
};

const earningsData = {
  labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      data: [14, 20, 45, 28, 37, 21],
    },
  ],
};

const commitsData = [
  {date: '2017-01-02', count: 1},
  {date: '2017-01-03', count: 2},
  {date: '2017-01-04', count: 3},
  {date: '2017-01-05', count: 4},
  {date: '2017-01-06', count: 5},
  {date: '2017-01-30', count: 2},
  {date: '2017-01-31', count: 3},
  {date: '2017-03-01', count: 2},
  {date: '2017-04-02', count: 4},
  {date: '2017-03-05', count: 2},
  {date: '2017-02-30', count: 4},
];

export default function Charts() {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      {/* My Earnings */}
      <CardView
        cardElevation={2}
        cornerRadius={15}
        cardMaxElevation={2}
        style={styles.myEarningsContainer}>
        <Text style={[styles.title, styles.title3]}>{t('myEarnings')}</Text>
        <LineChart
          bezier
          height={200}
          yAxisLabel="$"
          data={earningsData}
          width={screenWidth - 30}
          verticalLabelRotation={30}
          chartConfig={chartConfig}
        />
      </CardView>

      {/* Friends Invites */}
      <View style={styles.friendsInviteContainer}>
        <CardView
          cardElevation={2}
          cardMaxElevation={2}
          cornerRadius={15}
          style={styles.friendsInviteCard}>
          <Text style={styles.title}>{t('friendsInvited')}</Text>
          <ProgressChart
            radius={40}
            data={[0.6]}
            height={100}
            strokeWidth={12}
            hideLegend={true}
            width={screenWidth / 1.8}
            chartConfig={chartConfig}
          />
          <Text style={[styles.title, styles.title2]}>12 Total Invites</Text>
        </CardView>
        <CardView
          cardElevation={2}
          cardMaxElevation={2}
          cornerRadius={15}
          style={styles.friendsInviteCard}>
          <Text style={styles.title}>{t('invitesEarnings')}</Text>
          <BarChart
            data={data}
            height={120}
            yAxisLabel=""
            hideLegend={true}
            width={screenWidth / 2}
            chartConfig={chartConfig}
            verticalLabelRotation={0}
          />
        </CardView>
      </View>
    </View>
  );
}
