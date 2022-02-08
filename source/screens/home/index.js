import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Alert,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
} from 'react-native';
import Button from '../../common/components/button';
import { SliderBox } from 'react-native-image-slider-box';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import { primaryLight, primaryDark } from '../../common/constants/colors';
import Menu from '../../assets/svgs/menu.svg';
import Car from '../../assets/pngs/carHomePage.png';
import SearchInput from '../../common/components/searchInput';
import { useNavigation } from '@react-navigation/native';
import CardView from 'react-native-cardview';
import RentCar from '../rentCar';
import BuyCar from '../buyCar';
import Services from './Services';
import Products from './Products';
import { useDispatch, useSelector } from 'react-redux';
import { getPromotions, } from '../../redux/actions';
import RNPickerSelect from 'react-native-picker-select';

export default function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('vehicle-crashed');
  const picketItems = ["Stuck In acc", "Vehicle Crashed", "Car Puncher"]
  // const {token} = useSelector(({auth}) => auth);
  // console.log('token', token);

  useEffect(() => {
    dispatch(getPromotions(() => { }));
  }, []);
  return (
    <ScrollView style={{ height: '100%' }}>
      <LinearGradient
        colors={[primaryDark, primaryLight]}
        start={{ x: 0.2, y: 1.0 }}
        end={{ x: 0.8, y: 0.0 }}
        style={styles.header}>
        <View style={styles.headerContent}>
          <Menu onPress={() => navigation.toggleDrawer()} />
          <Button
            bgColor="white"
            color={primaryDark}
            containerStyle={{ height: 40 }}
            style={styles.emergencyButton}
            title="Emergency"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </LinearGradient>

      <View style={styles.contentContainer}>
        <SearchInput />
        <CardView
          elevation={2}
          cardElevation={2}
          cornerRadius={20}
          style={styles.tabs}>
          <TouchableOpacity
            onPress={() => setActiveTab(0)}
            style={activeTab === 0 ? styles.focusedTab : styles.tab}>
            <Text
              style={activeTab === 0 ? styles.ActiveTabText : styles.tabText}>
              Services
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActiveTab(1);
            }}
            style={activeTab === 1 ? styles.focusedTab : styles.tab}>
            <Text
              style={activeTab === 1 ? styles.ActiveTabText : styles.tabText}>
              Accessories
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActiveTab(2);
            }}
            style={activeTab === 2 ? styles.focusedTab : styles.tab}>
            <Text
              style={activeTab === 2 ? styles.ActiveTabText : styles.tabText}>
              Rent Car
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActiveTab(3);
            }}
            style={activeTab === 3 ? styles.focusedTab : styles.tab}>
            <Text
              style={activeTab === 3 ? styles.ActiveTabText : styles.tabText}>
              Buy Car
            </Text>
          </TouchableOpacity>
        </CardView>

        <View style={styles.productsContainer}>
          {activeTab === 0 ? <Services /> : activeTab === 1 ? (
            <Products />
          ) : activeTab === 2 ? (
            <RentCar />
          ) : activeTab === 3 ? (
            <BuyCar />
          ) : null}
        </View>
      </View>
      <View style={styles.imageView}>
        <SliderBox images={[Car]} autoplay circleLoop />
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
        style={styles.emergencyModal}>
        <View style={styles.modalView}>
          <Text style={styles.modalHeading}>
            What emergency you are facing ?
          </Text>
          <View style={styles.modalSelectContainer}>
            <RNPickerSelect
              selectedValue={selectedValue}
              style={styles.modalInputSelector}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
              items={picketItems.map(value => ({ labe: value, value }))}
            />

          </View>

          <TextInput
            textAlignVertical="top"
            placeholderTextColor={'#222'}
            placeholder="Enter discription here.."
            style={styles.modalInput}
            numberOfLines={6}
            editable
            maxLength={40}
          />
          <View style={styles.modalBtnContainer}>
            <Button
              // containerStyle={{height: 40}}
              bgColor="#555"
              style={styles.modalActionBtn}
              title="Cancel"
              onPress={() => setModalVisible(!modalVisible)}
            />
            <Button
              // containerStyle={{height: 40}}
              style={styles.modalActionBtn}
              title="Add"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
          <TouchableOpacity
            style={styles.modalClose}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
}
