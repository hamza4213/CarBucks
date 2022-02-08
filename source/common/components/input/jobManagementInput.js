import React from 'react';
import { Text, TextInput, View } from 'react-native';
// import CircleIcon from './CircleIcon';
// import { ARROW_DOWNWARD, VISA_ICON } from '@images';
import colors, { darKGrayBg } from '../../constants/colors'




export default ({ value, label, paddingLeft, paddingRight,
    refer, keyboardType, secureTextEntry, marginLeft, marginRight,
    onBlur, onChangeText, onFocus, onSubmitEditing, returnKeyType, backgroundColor, width, placeholder }) => {



    return (
        <View style={{ marginVertical: 15, marginLeft, backgroundColor, width: width || 130, height: 30 }}>

            {
                !!label &&
                <Text style={{ width: "100%", color: colors.inputLabel, fontSize: 12, marginBottom: 5 }}>{label}</Text>

            }



            <TextInput
                style={{
                    fontSize: 14,
                    // color: colors.input,
                    // paddingVertical: 8,
                    margin: 0, padding: 0,
                    paddingRight,
                    paddingLeft,
                    borderWidth: 1,
                    borderColor: darKGrayBg,
                    borderRadius: 10,
                    marginRight,
                    paddingHorizontal: 10,
                    height: "100%"


                }}
                blurOnSubmit
                autoCorrect={false}
                returnKeyType={returnKeyType ? 'done' : "next"}
                ref={refer}
                {...{ keyboardType, value, placeholder, onChangeText, secureTextEntry, onSubmitEditing, onFocus, onBlur }}

                autoCapitalize={keyboardType === 'email-address' ? 'none' : 'words'}


            />


        </View>
    );
};

const styles = {
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderColor: '#C5C5C5',
        borderWidth: 1,
        height: 57,
        marginBottom: 10,
    },
    labelStyle: {
        color: '#000', //747C81
        fontSize: 12,
    },
    icon: {
        width: 40, height: 40
    }
};