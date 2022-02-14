import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePickerSvg from '../../../assets/svgs/ImagePickersvg.svg';
import ImagePickerSubSvg from '../../../assets/svgs/ImagePickerSubSvg.svg';
import DeleteImageIcon from '../../../assets/svgs/DeleteImageIcon.svg';
import colors, {text} from '../../constants/colors';
const ImagePickerComponent = props => {
  const {setDocuments, documents, name} = props;
  const [selected, setSelected] = useState(false);
  const selectImage = () => {
    launchImageLibrary({mediaType: 'photo'}, image => {
      //   setImage(image);
      if (!image.didCancel) {
        console.log('image', image.assets[0].uri);
        setDocuments(prev => ({...prev, [name]: image.assets[0].uri}));
        setSelected(true);
      }
      // console.log(image);
    });
  };
  const DeletImage = () => {
    setDocuments(prev => ({...prev, [name]: null}));
    setSelected(false);
  };
  return (
    <>
      {selected ? (
        <View
          style={{
            width: '45%',
            height: '90%',
            // borderRadius: 10,
            alignItems: 'center',
            // justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={DeletImage}
            style={{
              alignSelf: 'flex-end',
              // borderTopRightRadius: 10,
              // width: 40,
              // height: 20,
              // backgroundColor: '#000',
              position: 'absolute',
              zIndex: 1,
            }}>
            <DeleteImageIcon />
          </TouchableOpacity>
          <Image
            style={{width: '100%', height: '100%', borderRadius: 12}}
            source={{
              uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
            }}
          />
        </View>
      ) : (
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
          <Text style={{fontSize: 10, color: text}}>
            Upload Your Document here
          </Text>
          <Text style={{fontSize: 10, color: text}}>( jpeg , png )</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default ImagePickerComponent;
