import {View, Text} from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';
import Tick from '../../../assets/svgs/tick.svg';
const WorkShopDetails = () => {
  const services = [
    'Ac Repairing',
    'Engine Tuning',
    'Paint Car',
    'Car Wash Service',
    'Full Tuning',
  ];
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          justifyContent: 'space-between',
        }}>
        <Text>Starts here Starts here (4.2K)</Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: Colors.primaryLight,
          }}>
          $130 hr
        </Text>
      </View>
      <View style={{width: '90%'}}>
        <View style={{height: 15}}></View>
        <Text style={{fontWeight: '600', fontSize: 17}}>Description</Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's
        </Text>
        <View style={{height: 15}}></View>
        <Text style={{fontWeight: '600', fontSize: 17}}>
          Available Services
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
            // backgroundColor: 'teal',
            justifyContent: 'space-between',
          }}>
          {services.map(service => (
            <>
              <View style={{flexDirection: 'row', width: '40%', marginTop: 10}}>
                <Tick />
                <Text>{service}</Text>
              </View>
            </>
          ))}
        </View>
      </View>
    </View>
  );
};

export default WorkShopDetails;
