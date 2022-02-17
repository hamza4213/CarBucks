import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import colors, {text, primaryDark} from '../../../constants/colors';
import DeletIcon from '../../../../assets/svgs/DeletIcon.svg';
const DetailAccessoryCard = () => {
  const [count, setCount] = useState(0);
  return (
    <View
      style={{
        height: 120,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: 'lightgrey',
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 10,
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '30%',
          height: '90%',
          backgroundColor: '#fff',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{height: '95%', width: '95%'}}
          source={require('../../../../assets/pngs/tyre.png')}
        />
      </View>
      <View
        style={{
          width: '65%',
          height: '90%',
          //   backgroundColor: 'red',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            height: '35%',
            // backgroundColor: 'green',
            paddingTop: 5,
          }}>
          <Text style={{fontWeight: 'bold'}}>Lorem Ipsum</Text>
          <TouchableOpacity>
            <DeletIcon />
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 12, color: text}}>
          Lorem Ipsum is simply dummy text of the printing.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            height: '35%',
            // backgroundColor: 'green',
            paddingTop: 5,
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '50%',
              justifyContent: 'space-evenly',
              height: '100%',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              disabled={count === 0 ? true : false}
              onPress={() => setCount(count - 1)}
              style={{
                height: '100%',
                width: '30%',
                // backgroundColor: 'teal',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 27}}>-</Text>
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>{count}</Text>
            <TouchableOpacity
              onPress={() => setCount(count + 1)}
              style={{
                height: '100%',
                width: '30%',
                // backgroundColor: 'teal',
                // borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 27}}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={{marginRight: 5, fontWeight: '600', color: primaryDark}}>
            $50
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailAccessoryCard;
