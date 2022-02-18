import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
// import {t} from 'i18next';
import {useTranslation} from 'react-i18next';
import {
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CardView from 'react-native-cardview';
import {SliderBox} from 'react-native-image-slider-box';
import LinearGradient from 'react-native-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import {getStatusBarHeight} from 'react-native-status-bar-height';
// import Charts from '../analytics/Charts';
import {useDispatch, useSelector} from 'react-redux';
import redBanner from '../../assets/pngs/redBanner.jpg';
import Menu from '../../assets/svgs/menu.svg';
import NotificationWhite from '../../assets/svgs/notificationWhite.svg';
import Button from '../../common/components/button';
import AccessoryCard from '../../common/components/cards/accessoryCard';
import AccessoriesComponent from '../../common/components/cards/accessoryCard/AccessoriesComponent';
import InsuranceComponent from '../../common/components/InsuranceComponent/InsuranceComponent';
import LatoText from '../../common/components/LatoText';
import LinearGradientWrapper from '../../common/components/LinearGradientWrapper';
import SearchInput from '../../common/components/searchInput';
import {primaryDark, primaryLight} from '../../common/constants/colors';
import {
  getCategories,
  getPromotions,
  getSubCategoryById,
} from '../../redux/actions';
import {wp} from '../../utils/helper';
import BuyCar from '../buyCar';
import RentCar from '../rentCar';
import ProductsCatagories from './Products';
import ServicesCatagories from './Services';
import styles from './style';
import SmallImage from '../../common/components/ImagesComponents/SmallImage';
import LargeImage from '../../common/components/ImagesComponents/LargeImage';
const catagories = [
  {title: 'Services', screen: 'ServicesCatagories', available: 60},
  {title: 'Accessories', screen: 'ProductsCatagories', available: 635},
  {title: 'Rent Cars', screen: 'RentCar', available: 420},
  {title: 'Buy Cars', screen: 'BuyCar', available: 1050},
];
const caetagoriesIndex = [0, 1, 2, 3, 4, 5];
export default function Home() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [promoImgs, setPromoImgs] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);
  const [selectedValue, setSelectedValue] = useState('vehicle-crashed');
  const {categories, subCategories} = useSelector(({category}) => category);
  const [filteredData, setFilteredData] = useState([]);
  const {promotions} = useSelector(state => state.promotions);
  const {t, i18n} = useTranslation();
  const [activeTab, setActiveTab] = useState(null);
  const pickerItems = [
    {label: 'Stuck In acc', value: 'stuck-in-traffic'},
    {label: 'Vehicle Crashed', value: 'vehicle-crashed'},
    {label: 'Car Puncher', value: 'car-puncher'},
  ];

  const {token} = useSelector(state => state.auth);

  // console.log('promotions from useSelectore', promotions);

  useEffect(() => {
    loadInitialData();
    // console.log('caetagories', categories);
  }, []);

  const loadInitialData = async () => {
    let res = await dispatch(getCategories());
    if (!!res?.length) onCategoryPress(res[0]);
    dispatch(getSubCategoryById());
    dispatch(getPromotions());
  };

  const getImage = () => {
    const imgs = promotions?.map(promo => promo?.promoImg);
    if (imgs != []) {
      return [redBanner];
    } else {
      return imgs;
    }
  };

  const onCategoryPress = item => {
    setActiveTab(item);
    console.log('activeTabis', activeTab);
    console.log('consoling active tab', activeTab?.type, subCategories[0]);

    setFilteredData(subCategories.filter(i => i?.parent === item._id));
  };
  const carservicedata = [
    {img: require('../../assets/pngs/FirstCar.png'), desc: 'Car Wash Service'},
    {img: require('../../assets/pngs/SecondCar.png'), desc: 'Ac Repairing'},
    {img: require('../../assets/pngs/ThirdCar.png'), desc: 'Engine Tuning'},
    {img: require('../../assets/pngs/FourthCar.png'), desc: 'Paint Car'},
    {img: require('../../assets/pngs/FifthCar.png'), desc: 'Full Tuning'},
    {img: require('../../assets/pngs/FirstCar.png'), desc: 'Car Wash Service'},
  ];
  const ServicePackagesdata = [
    {
      img: require('../../assets/pngs/AcService.png'),
      desc: 'Regular AC Serivce',
    },
    {
      img: require('../../assets/pngs/CoolingCoil.png'),
      desc: 'Cooling Coil Replacement',
    },
  ];
  return (
    <ScrollView style={{height: '100%', backgroundColor: '#FFF'}}>
      <LinearGradient
        colors={[primaryDark, primaryLight]}
        start={{x: 0.2, y: 1.0}}
        end={{x: 0.8, y: 0.0}}
        style={[styles.header, {paddingTop: getStatusBarHeight()}]}>
        <View style={styles.headerContent}>
          <Menu onPress={() => navigation.toggleDrawer()} />
          <View style={styles.emergencyContainer}>
            <Button
              bgColor="white"
              color={primaryDark}
              containerStyle={{height: 40}}
              style={styles.emergencyButton}
              title={t('emergency')}
              onPress={() => setModalVisible(!modalVisible)}
            />
            <TouchableOpacity
              style={styles.notificationWrapper}
              onPress={() => navigation.navigate('Notifcations')}>
              <NotificationWhite style={styles.notificationIcon} />
              <View style={styles.badge}>
                <Text style={styles.badgeTxt}>3</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      <View style={[styles.contentContainer]}>
        <SearchInput />

        {/* <View style={styles.catagoryContainer}>
          <Text style={styles.title}>{t('category')}</Text>

          {categories && categories.length ? (
            categories.map((category, index) => {
              return <CatagoryCard item={category} key={index} />;
            })
          ) : (
            <NotFound text="No Categories Found." />
          )}
        </View> */}

        <LinearGradientWrapper
          style={{
            marginTop: 20,
            borderRadius: 20,
            width: '100%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5,
          }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{flexGrow: 0}}>
            {categories.map(item => (
              <TouchableOpacity
                key={item._id}
                onPress={() => onCategoryPress(item)}
                style={[styles.tab, activeTab === item && styles.focusedTab]}>
                <Text
                  style={
                    activeTab === item ? styles.ActiveTabText : styles.tabText
                  }>
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </LinearGradientWrapper>

        <View style={styles.productsContainer}>
          <LatoText padding={10} />
          {activeTab?.description === 'insurance' ? (
            <InsuranceComponent />
          ) : activeTab?.title === 'Accesories' ? (
            <AccessoriesComponent />
          ) : activeTab?.type === 'product' ? (
            <ProductsCatagories data={filteredData} />
          ) : activeTab?.type === 'service' ? (
            <>
              <View
                style={{
                  width: '100%',
                  height: 30,
                  // backgroundColor: '#000',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text style={{fontWeight: '600'}}>Car Services Catagories</Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ServiceDetailCaetagories', {
                      renderscreenfor: 'small',
                      data: {carservicedata},
                    })
                  }>
                  <Text style={{fontWeight: '600'}}>View All</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-evenly',
                }}>
                {carservicedata.map((item, index) => (
                  <View
                    style={{
                      width: '30%',
                      height: 120,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <SmallImage item={item} />
                  </View>
                ))}
              </View>
              <View style={{height: 15}}></View>
              <View
                style={{
                  width: '100%',
                  height: 30,
                  // backgroundColor: '#000',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text style={{fontWeight: '600'}}>Services Packages</Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ServiceDetailCaetagories', {
                      renderscreenfor: 'large',
                      data: {ServicePackagesdata},
                    })
                  }>
                  <Text style={{fontWeight: '600'}}>View All</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-evenly',
                }}>
                {ServicePackagesdata.map((item, index) => (
                  <LargeImage item={item} />
                ))}
              </View>
              <View style={{height: 15}}></View>
              <View
                style={{
                  width: '100%',
                  height: 30,
                  // backgroundColor: '#000',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text style={{fontWeight: '600'}}>
                  Workshop for luxury cars
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ServiceDetailCaetagories', {
                      renderscreenfor: 'large',
                      data: {ServicePackagesdata},
                    })
                  }>
                  <Text style={{fontWeight: '600'}}>View All</Text>
                </TouchableOpacity>
              </View>
              <ServicesCatagories data={filteredData} />
            </>
          ) : null}
        </View>
      </View>

      <View style={styles.imageView}>
        <SliderBox
          onCurrentImagePressed={index =>
            navigation.navigate('SingleProductDetail', {
              promotion: promotions[index],
            })
          }
          parentWidth={wp(90)}
          images={getImage()}
          autoplay
          circleLoop
          ImageComponentStyle={{height: '100%', borderRadius: 15}}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
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
              items={pickerItems}
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
      <View style={{height: 15, marginTop: 20}}></View>
    </ScrollView>
  );
}
