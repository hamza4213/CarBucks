import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../common/components/header';
import colors, {text, primaryDark} from '../../common/constants/colors';
import LinearGradientWrapper from '../../common/components/LinearGradientWrapper';
const AccessoriesDetails = ({navigation}) => {
  const {height} = Dimensions.get('window');
  const [count, setCount] = useState(0);
  return (
    <View>
      <Header title={'Accessories'}>
        <View
          style={{
            width: '80%',
            alignSelf: 'center',
            // alignItems: 'center',
            // justifyContent: 'center',
            zIndex: 1,
            borderRadius: 18,
            height: height * 0.45,
            paddingHorizontal: 20,
            backgroundColor: 'white',
            shadowOffset: {width: 100, height: 50},
            shadowColor: '#000',
            shadowOpacity: 1,
            elevation: 15,
          }}>
          <Image
            source={require('../../assets/pngs/tyre.png')}
            style={{height: '40%', width: '50%', alignSelf: 'center'}}
          />
          <Text style={{fontWeight: '600'}}>Lorem Ipsum</Text>
          <Text style={{color: text}}>
            Lorem Ipsum is simply dummy text of the printing.
          </Text>
          <View style={{height: 15}}></View>
          <LinearGradientWrapper
            style={{
              alignSelf: 'center',
              width: '50%',
              height: '10%',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '600', color: 'white'}}>$ 50</Text>
          </LinearGradientWrapper>
        </View>
      </Header>
      <ScrollView style={styles.contentContainer}>
        <View
          style={{
            height: 270,
            // backgroundColor: '#000',
            width: '100%',
          }}></View>
        <Text style={{color: text}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's
        </Text>
        <View style={{height: 15}}></View>
        <View
          style={{
            height: 1,
            width: '95%',
            backgroundColor: text,
            alignSelf: 'center',
          }}></View>
        <View style={{height: 15}}></View>
        <View
          style={{
            height: 70,
            width: '95%',
            // backgroundColor: '#000',
            alignSelf: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: '100%',
              width: '50%',
              //   backgroundColor: 'green',
              alignSelf: 'center',
            }}>
            <Text style={{color: text, fontSize: 17}}>Lorem Ipsum</Text>
            <Text style={{color: primaryDark, fontSize: 17, fontWeight: '600'}}>
              $ {count * 50}
            </Text>
          </View>
          <View
            style={{
              height: '100%',
              width: '50%',
              //   backgroundColor: 'red',
              flexDirection: 'row',
              //   alignSelf: 'center',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              disabled={count === 0 ? true : false}
              onPress={() => setCount(count - 1)}
              style={{
                height: '60%',
                width: '30%',
                // backgroundColor: 'teal',
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 27}}>-</Text>
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', fontSize: 23}}>{count}</Text>
            <TouchableOpacity
              onPress={() => setCount(count + 1)}
              style={{
                height: '60%',
                width: '30%',
                // backgroundColor: 'teal',
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 27}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <LinearGradientWrapper
          style={{
            alignSelf: 'center',

            width: '80%',
            height: 50,
            borderRadius: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MultipleAccessories')}
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 17, fontWeight: '600'}}>
              Add To Cart
            </Text>
          </TouchableOpacity>
        </LinearGradientWrapper>
        <View style={{height: 15, marginTop: 200}}></View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    height: '100%',
    backgroundColor: 'white',
    marginTop: -18,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingHorizontal: 20,
  },
});
export default AccessoriesDetails;
