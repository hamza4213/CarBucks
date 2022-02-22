import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Facebook from '../../../assets/svgs/FacebookIcon.svg';
import Instagram from '../../../assets/svgs/InstagramIcon.svg';
import LinkedIn from '../../../assets/svgs/LinkedInIcon.svg';
import Google from '../../../assets/svgs/GoogleIcon.svg';
import Whatsapp from '../../../assets/svgs/WhatsappIconSmall.svg';
import DownIcon from '../../../assets/svgs/DownIconGreyColor.svg';
import UpIcon from '../../../assets/svgs/UpIconGreyColor.svg';
import colors, {text} from '../../constants/colors';
const HearInput = props => {
  const [show, setShow] = useState(false);
  const {heared, setHeared} = props;
  const Data = [
    {title: 'Facebook', icon: <Facebook />},
    {title: 'Instagram', icon: <Instagram />},
    {title: 'LinkedIn', icon: <LinkedIn />},
    {title: 'Google', icon: <Google />},
    {title: 'Whatsapp', icon: <Whatsapp />},
  ];
  return (
    <>
      <TouchableOpacity onPress={() => setShow(!show)} style={styles.container}>
        <Text style={{color: text}}>
          {heared ? heared : 'How did you hear about us'}
        </Text>
        {show ? <UpIcon /> : <DownIcon />}
      </TouchableOpacity>
      {show ? (
        <View style={styles.secondContainer}>
          {Data.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                setHeared(item.title), setShow(false);
              }}
              style={styles.innertouch}>
              {item.icon}
              <View style={{width: 20}}></View>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          ))}
          <TextInput
            //   onPress={() =>setHeared}
            onChangeText={text => setHeared(text)}
            placeholderTextColor={text}
            placeholder={'Other'}
            style={styles.input}
          />
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // backgroundColor: 'teal',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: text,
    marginBottom: 20,
  },
  secondContainer: {
    width: '100%',
    // backgroundColor: 'teal',
    // height: 150,
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: text,
    marginBottom: 20,
  },
  innertouch: {
    flexDirection: 'row',
    width: '40%',
    height: 30,
    marginTop: 10,
    alignItems: 'center',
    // justifyContent: 'space-between',
    // backgroundColor: 'teal',
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 20,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: text,
    color: text,
    paddingHorizontal: 10,
  },
});
export default HearInput;
