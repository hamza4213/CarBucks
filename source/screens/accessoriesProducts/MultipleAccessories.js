import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../common/components/header';
import DetailAccessoryCard from '../../common/components/cards/accessoryCard/DetailAccessoryCard';
import colors, {text, primaryLight} from '../../common/constants/colors';
import CalendarSvg from '../../assets/svgs/calendar.svg';
import DateTimePicker from '@react-native-community/datetimepicker';
import TimePickerComp from '../bookingForm/timePicker';
import LinearGradientWrapper from '../../common/components/LinearGradientWrapper';
const MultipleAccessories = ({navigation}) => {
  const [deliver, setDeliver] = useState('Delivery');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [activeTime, setActiveTime] = useState(-1);
  const [selected, setSelected] = useState('Home');
  const [bill, setBill] = useState([
    {desc: 'SubTotal', amount: '150'},
    {desc: 'Tax (%)', amount: '20'},
    {desc: 'Delivery', amount: '40'},
    {desc: 'Discount', amount: '50'},
  ]);
  const showDatepicker = () => {
    setShow(true);
    setMode('date');
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <View>
      <Header title={'Accessories'} small />
      <ScrollView style={styles.contentContainer}>
        <View style={{height: 15}}></View>
        <DetailAccessoryCard />
        <DetailAccessoryCard />
        <DetailAccessoryCard />
        <View style={{height: 15}}></View>
        <View
          style={{
            height: 80,
            width: '90%',
            alignSelf: 'center',
            backgroundColor: 'lightgrey',
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <Text style={{color: text, fontWeight: 'bold'}}>Promo Code</Text>
          <View
            style={{
              width: '40%',
              height: '70%',
              borderRadius: 10,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>AHS7562</Text>
          </View>
        </View>
        <View style={{height: 15}}></View>
        <View
          style={{
            height: 50,
            width: '100%',
            alignSelf: 'center',
            // backgroundColor: 'lightgrey',
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setDeliver('Delivery')}
            style={{
              backgroundColor: deliver === 'Delivery' ? primaryLight : '#fff',
              width: '40%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              shadowOffset: {width: 100, height: 50},
              shadowColor: '#000',
              shadowOpacity: 1,
              elevation: 15,
            }}>
            <Text
              style={{
                color: deliver === 'Delivery' ? 'white' : 'black',
                fontSize: 17,
                fontWeight: '600',
              }}>
              Delivery
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setDeliver('Pickup')}
            style={{
              backgroundColor: deliver === 'Pickup' ? primaryLight : '#fff',
              width: '40%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              shadowOffset: {width: 100, height: 50},
              shadowColor: '#000',
              shadowOpacity: 1,
              elevation: 15,
            }}>
            <Text
              style={{
                color: deliver === 'Pickup' ? 'white' : 'black',
                fontSize: 17,
                fontWeight: '600',
              }}>
              Pickup
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 15}}></View>
        <Text style={{marginLeft: 10, fontWeight: 'bold'}}>Select Date</Text>
        <View style={{height: 15}}></View>
        <TouchableOpacity
          onPress={showDatepicker}
          style={{
            width: '90%',
            height: 40,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'grey',
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <Text style={{color: text}}>{date.toDateString()}</Text>
          <CalendarSvg />
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </TouchableOpacity>
        <View style={{height: 15}}></View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <TimePickerComp
            activeTime={activeTime}
            setActiveTime={setActiveTime}
          />
        </View>
        <View style={{height: 15}}></View>
        <View
          style={{
            // height: 40,
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            // backgroundColor: '#000',
          }}>
          <Text style={{fontWeight: '600'}}>Select Address</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddNewAddress')}>
            <Text style={{fontWeight: '600'}}>+ Add New Address</Text>
          </TouchableOpacity>
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <View style={{height: 15}}></View>
          <View style={{width: '100%', backgroundColor: '#fff'}}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
              }}>
              <View style={{width: '100%', flexDirection: 'row'}}>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 60,
                    borderWidth: 1,
                    borderColor: primaryLight,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => setSelected('Home')}
                    style={{
                      height: 15,
                      width: 15,
                      borderRadius: 20,
                      backgroundColor:
                        selected === 'Home' ? primaryLight : null,
                    }}></TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{marginLeft: 5}}>Home</Text>
                  <Text style={{marginLeft: 5, color: text}}>
                    - 4152 Cessna Drive, United States
                  </Text>
                </View>
              </View>
            </View>
            <View style={{height: 5}}></View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
              }}>
              <View style={{width: '100%', flexDirection: 'row'}}>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 60,
                    borderWidth: 1,
                    borderColor: primaryLight,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => setSelected('Other')}
                    style={{
                      height: 15,
                      width: 15,
                      borderRadius: 20,
                      backgroundColor:
                        selected === 'Other' ? primaryLight : null,
                    }}></TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{marginLeft: 5}}>Other</Text>
                  <Text style={{marginLeft: 5, color: text}}>
                    - 4152 Cessna Drive, United States
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{height: 25}}></View>
        <View
          style={{
            height: 1,
            width: '95%',
            alignSelf: 'center',
            backgroundColor: text,
          }}></View>
        {bill.map((item, index) => (
          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={{fontSize: 17, color: text}}>{item.desc}</Text>
            <Text style={{fontSize: 17, color: text}}>$ {item.amount}</Text>
          </View>
        ))}
        <View
          style={{
            width: '80%',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 17, color: text}}>Total Amount</Text>
          <Text style={{fontSize: 17, color: primaryLight, fontWeight: 'bold'}}>
            $ 500
          </Text>
        </View>
        <View style={{height: 30}}></View>
        <LinearGradientWrapper
          style={{
            alignSelf: 'center',
            width: '80%',
            height: 50,
            borderRadius: 10,
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Checkout', {
                paramData: {
                  qty: 1,
                },
                paramType: 'service',
              })
            }
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}>
            <Text style={{fontWeight: '600', fontSize: 17, color: 'white'}}>
              Buy Now
            </Text>
          </TouchableOpacity>
        </LinearGradientWrapper>
        <View style={{height: 15, marginTop: 100}}></View>
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
    // paddingHorizontal: 20,
  },
});
export default MultipleAccessories;
