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
import {darKGrayBg, primaryLight, text} from '../../common/constants/colors';
import styles from './chartStyles';

const screenWidth = Dimensions.get('window').width;
const chartConfig = {
  backgroundColor: '#fff',
  backgroundGradientFrom: '#fff',
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: '#fff',
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(250, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  decimalPlaces: 2, // optional, defaults to 2dp
  // strokeWidth: 2,
  // barPercentage: 10.5,
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
  labels: ['0', '5', '10', '15', '20', '25', '30'],
  datasets: [
    {
      data: [0, 100, 200, 300, 400, 500],
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

      <LineChart
        bezier
        height={200}
        yAxisLabel="$"
        data={earningsData}
        width={screenWidth - 30}
        // verticalLabelRotation={30}
        chartConfig={chartConfig}
      />
    </View>
  );
}
