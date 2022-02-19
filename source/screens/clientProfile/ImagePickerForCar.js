import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import PlusIcon from '../../assets/svgs/plusredicon.svg';
const ImagePickerForCar = props => {
  const {text} = props;
  const [selected, setSelected] = useState(false);
  const selectImage = () => {
    launchImageLibrary({mediaType: 'photo'}, image => {
      //   setImage(image);
      if (!image.didCancel) {
        console.log('image', image.assets[0].uri);
        setDocuments(prev => ({...prev, ['name']: image.assets[0].uri}));
        setSelected(true);
      }
      // console.log(image);
    });
  };
  return (
    <TouchableOpacity
      onPress={() => selectImage()}
      style={{
        width: '30%',
        height: 80,
        backgroundColor: '#fff',
        shadowOffset: {width: 100, height: 50},
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 7,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <PlusIcon />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default ImagePickerForCar;
