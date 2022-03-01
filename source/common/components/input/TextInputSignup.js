import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import colors, {text, primaryDark} from '../../constants/colors';
const TextInputSignup = props => {
  const {
    onChangeText,
    state,
    placeholder,
    style,
    RightIcon,
    RightIconActive,
    callingCode,
    LeftIcon,
    inputType,
    phone,
    name,
    ...rest
  } = props;
  const [active, setActive] = useState(false);
  const setText = text => {
    onChangeText({
      ...state,
      [name]: callingCode ? '+' + callingCode + text : text,
    });
  };
  return (
    <View style={styles.container}>
      {LeftIcon ? LeftIcon : null}
      <TextInput
        onChangeText={text => setText(text)}
        placeholder={placeholder}
        placeholderTextColor={text}
        color={text}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        style={{flexGrow: 1}}
        secureTextEntry={inputType === 'password' ? true : false}
        {...rest}
      />
      {phone ? null : active && RightIconActive ? RightIconActive : RightIcon}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    // backgroundColor: 'teal',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: text,
    marginBottom: 20,
  },
});
export default TextInputSignup;
