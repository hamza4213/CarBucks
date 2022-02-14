import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DownArrow from '../../../assets/svgs/arrowfordown.svg';
import UpArrow from '../../../assets/svgs/uparrow.svg';
import colors, {text} from '../../constants/colors';

const InsuranceOpendownComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setShow(!show)}
      style={{
        alignSelf: 'center',
        width: '90%',
        backgroundColor: '#fff',
        height: show ? undefined : 50,
        borderRadius: 10,
        shadowOffset: {width: 100, height: 50},
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 15,
        justifyContent: 'center',
      }}>
      <View style={{height: 5}}></View>

      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: '600'}}>Lorem Ipsum</Text>
        {show ? <UpArrow /> : <DownArrow />}
      </View>
      <View style={{height: 5}}></View>

      {show ? (
        <Text style={{width: '85%', alignSelf: 'center', color: text}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          mollis eros augue, quis elementum lacus tincidunt et. Duis et interdum
          dolor. Nunc fermentum turpis dui, a lobortis urna egestas non. Duis et
          interdum dolor. Nunc fermentum turpis dui, a lobortis urna egestas
          non.
        </Text>
      ) : null}
      <View style={{height: 5}}></View>
    </TouchableOpacity>
  );
};

export default InsuranceOpendownComponent;
