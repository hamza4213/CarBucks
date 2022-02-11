import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  primaryDark,
  completedGreen,
  text,
} from '../../../common/constants/colors';
const InviteStatus = props => {
  const {item} = props;
  console.log(item);
  return (
    <View
      style={{
        width: '90%',
        height: 90,
        backgroundColor: '#fff',
        borderRadius: 15,
        alignSelf: 'center',
        flexDirection: 'row',
        shadowColor: '#000',
        // shadowColor: '#000000',
        shadowOffset: {width: 0, height: 50},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 7,
      }}>
      <Image
        source={item.img}
        style={{height: '100%', borderRadius: 15, width: '25%'}}
      />
      <View
        style={{
          height: '100%',
          width: '50%',
          //   backgroundColor: 'yellow',
          padding: 15,
        }}>
        <Text style={{color: text, fontSize: 17}}>{item.name}</Text>
        <Text style={{color: text}}>{item.location}</Text>
        <Text style={{color: text}}>{item.socialmedia}</Text>
      </View>
      <View
        style={{
          height: '100%',
          width: '22%',
          //   backgroundColor: 'green',
          paddingTop: 10,
        }}>
        <Text
          style={{
            color: item.status === 'Active' ? completedGreen : primaryDark,
            fontSize: 17,
          }}>
          {item.status}
        </Text>
        <View style={{height: 10}}></View>
        <Text style={{color: text, alignSelf: 'center'}}>
          {item.date.toDateString()}
        </Text>
      </View>
    </View>
  );
};

export default InviteStatus;
