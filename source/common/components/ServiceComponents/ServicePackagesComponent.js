import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import AvailableCheck from '../../../assets/svgs/availableCheck.svg';
import colors, {primaryDark, primaryLight} from '../../constants/colors';
const ServicePackagesComponent = props => {
  const {servicesName, title, money, selected, setSelected} = props;
  return (
    <View>
      <View style={styles.servicesContainer}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            onPress={() => setSelected(title)}
            style={{
              width: '40%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 60,
                borderWidth: 1,
                borderColor: 'grey',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {selected === title ? (
                <View
                  style={{
                    height: 15,
                    width: 15,
                    borderRadius: 20,
                    backgroundColor: 'grey',
                  }}></View>
              ) : null}
            </View>
            <Text>{title}</Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              color: primaryLight,
              fontWeight: 'bold',
            }}>
            $ {money}
          </Text>
        </View>

        {servicesName.map((item, index) => (
          <View key={index} style={styles.serviceWrapper}>
            <AvailableCheck />
            <Text style={{marginLeft: 8}}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  serviceWrapper: {
    flexDirection: 'row',
    marginBottom: 8,
    width: '45%',
  },
});
export default ServicePackagesComponent;
