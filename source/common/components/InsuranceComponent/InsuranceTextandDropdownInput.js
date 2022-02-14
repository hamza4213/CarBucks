import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import DownArrow from '../../../assets/svgs/arrowfordown.svg';
import colors, {text} from '../../constants/colors';
const InsuranceTextandDropdownInput = props => {
  const [modalvisible, setModalvisible] = useState(false);
  //   console.log(props);
  return (
    <View
      style={{
        width: '90%',
        alignSelf: 'center',
        height: 90,
        // backgroundColor: 'teal',
      }}>
      <Text style={{fontWeight: '600'}}>{props.header}</Text>
      <View style={{height: 10}}></View>
      <View
        style={{
          width: '90%',
          height: '50%',
          backgroundColor: '#fff',
          alignSelf: 'center',
          borderRadius: 10,
          shadowOffset: {width: 100, height: 50},
          shadowColor: '#000',
          shadowOpacity: 1,
          elevation: 15,
          justifyContent: 'center',
        }}>
        {props.row ? (
          <TouchableOpacity
            onPress={() => setModalvisible(true)}
            style={{
              //   backgroundColor: 'green',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '90%',
              height: '100%',
              alignSelf: 'center',
            }}>
            <Text style={{color: text}}>{props.description}</Text>
            <DownArrow />
          </TouchableOpacity>
        ) : (
          <TextInput
            placeholder="Enter Your Name"
            placeholderTextColor={text}
            color={text}
            style={{marginLeft: 10}}
          />
        )}
      </View>
      {props.row ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalvisible}
          dismiss={() => setModalvisible(false)}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalvisible(!modalvisible);
          }}>
          <TouchableOpacity
            onPress={() => setModalvisible(!modalvisible)}
            style={styles.centeredView}>
            <View style={styles.modalView}>
              {props.Data.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={{marginTop: 10}}
                    onPress={() => setModalvisible(!modalvisible)}>
                    <Text>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </TouchableOpacity>
        </Modal>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    // backgroundColor: '#fff',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default InsuranceTextandDropdownInput;
