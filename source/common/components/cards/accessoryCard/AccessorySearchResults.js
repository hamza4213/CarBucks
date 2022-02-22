import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors, {primaryDark, text} from '../../../constants/colors';
import LinearGradientWrapper from '../../LinearGradientWrapper';
const AccessorySearchResults = props => {
  const {search} = props;
  const [filteredData, setFiltereddata] = useState([]);
  const Data = [
    {
      title: 'Car Carpets',
      subtitle: 'Car carpets',
      price: '50',
      description: 'These Carpets are available for sale',
    },
    {
      title: 'lorem ipsum',
      subtitle: 'lorem ipsum',
      price: '50',
      description: 'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      title: 'Tyres',
      subtitle: 'Tyres',
      price: '50',
      description: 'These Tyres are available for sale',
    },
  ];
  useEffect(() => {
    searchData();
  }, [search]);

  const searchData = () => {
    Data.filter((item, index) => {
      if (
        item.title
          .toUpperCase()
          .includes(search.toUpperCase().trim().replace(/\s/g, ''))
      ) {
        console.log('Mila');
        setFiltereddata(currentArray => [...currentArray, item]);
        console.log(filteredData);
      } else if (
        item.subtitle
          .toUpperCase()
          .includes(search.toUpperCase().trim().replace(/\s/g, ''))
      ) {
        console.log('Mila');
        setFiltereddata(currentArray => [...currentArray, item]);
      } else console.log('Not found');
    });
  };
  return (
    <>
      {filteredData.map((item, index) => (
        <View style={styles.container}>
          <Image
            source={{uri: 'https://i.ibb.co/Kz8vwnL/Carpet.png'}}
            style={styles.ImageView}
          />
          <View style={styles.secondView}>
            <View style={styles.innerView}>
              <Text style={styles.text}>{item.title}</Text>
              <Text style={styles.text}>$ {item.price} </Text>
            </View>
            <Text style={{color: text, marginTop: 5}}>{item.subtitle}</Text>
            <Text style={{color: text, marginTop: 5}}>{item.description}</Text>
            <LinearGradientWrapper style={styles.LinearGradientWrapper}>
              <TouchableOpacity
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 12}}>Add to cart</Text>
              </TouchableOpacity>
            </LinearGradientWrapper>
          </View>
        </View>
      ))}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 140,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 10,
    shadowOffset: {width: 100, height: 50},
    shadowColor: '#000',
    shadowOpacity: 1,
    elevation: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  ImageView: {
    width: '35%',
    height: '100%',
  },
  secondView: {
    width: '65%',
    height: '90%',
    // backgroundColor: 'teal',
    paddingHorizontal: 10,
  },
  innerView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  text: {
    color: primaryDark,
    fontSize: 17,
    fontWeight: '600',
  },
  LinearGradientWrapper: {
    alignSelf: 'flex-end',
    marginTop: 5,
    height: 30,
    width: '40%',
    borderRadius: 10,
  },
});
export default AccessorySearchResults;
