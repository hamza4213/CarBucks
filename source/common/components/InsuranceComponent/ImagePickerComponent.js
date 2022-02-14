import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePickerSvg from '../../../assets/svgs/ImagePickersvg.svg';
import ImagePickerSubSvg from '../../../assets/svgs/ImagePickerSubSvg.svg';
import colors, {text} from '../../constants/colors';
const ImagePickerComponent = () => {
  const selectImage = () => {
    launchImageLibrary({mediaType: 'photo'}, image => {
      //   setImage(image);
      console.log(image);
    });
  };
  return (
    <TouchableOpacity
      style={{
        width: '45%',
        height: '90%',
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: 'dotted',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={selectImage}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ImagePickerSvg />
        <View style={{position: 'absolute'}}>
          <ImagePickerSubSvg />
        </View>
      </View>
      <View style={{height: 2}}></View>
      <Text style={{fontSize: 10, color: text}}>Upload Your Document here</Text>
      <Text style={{fontSize: 10, color: text}}>( jpeg , png )</Text>
    </TouchableOpacity>
  );
};

export default ImagePickerComponent;
