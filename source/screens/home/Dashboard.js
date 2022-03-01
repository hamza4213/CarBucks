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
import AccessorySearchResults from '../../common/components/cards/accessoryCard/AccessorySearchResults';
import InsuranceComponent from '../../common/components/InsuranceComponent/InsuranceComponent';
import LatoText from '../../common/components/LatoText';
import LinearGradientWrapper from '../../common/components/LinearGradientWrapper';
import SearchInput from '../../common/components/searchInput';
import {primaryDark, primaryLight, text} from '../../common/constants/colors';
import {
  getCategories,
  getPromotions,
  getSubCategoryById,
} from '../../redux/actions';
import {wp} from '../../utils/helper';
import BuyCar from '../buyCar';
import RentCar from '../rentCar';
import HorizontalServiceDetails from './HorizontalServiceDetails';
import ProductsCatagories from './Products';
import ServicesCatagories from './Services';
import styles from './style';
import BellIcon from '../../assets/svgs/WhiteBell.svg';
import SearchWhite from '../../assets/svgs/searchWhite.svg';
import Cross from '../../assets/svgs/cross.svg';
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
  const [activeTab = 'Services', setActiveTab] = useState();
  const [search, setSearch] = useState(null);
  const [topsearchbar, setTopsearchbar] = useState(null);
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
    // if (!!res?.length) onCategoryPress(res[0]);
    console.log('RESPONSE AT DASHBOARD', res);
    let subCategories = await dispatch(getSubCategoryById());
    console.log('SUB CAETAGORIES BY ID ', subCategories);
    let promotions = await dispatch(getPromotions());
    console.log('Promotions', promotions);
  };

  const getImage = () => {
    const imgs = promotions?.map(promo => promo?.promoImg);
    if (imgs != []) {
      return [redBanner];
    } else {
      return imgs;
    }
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
            {topsearchbar ? (
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    width: '80%',
                    borderRadius: 10,
                    paddingHorizontal: 15,
                  }}
                  placeholderTextColor={text}
                  placeholder={'Search Here'}
                  color={text}
                />
                <TouchableOpacity
                  onPress={() => setTopsearchbar(null)}
                  style={{
                    backgroundColor: '#fff',
                    height: 30,
                    width: 30,
                    borderRadius: 10,
                  }}>
                  <Cross />
                </TouchableOpacity>
              </View>
            ) : (
              <>
                <TouchableOpacity
                  style={styles.notificationWrapper}
                  onPress={() => navigation.navigate('Notifcations')}>
                  <BellIcon />
                  <View style={styles.badge}>
                    <Text style={styles.badgeTxt}>3</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.notificationWrapper}
                  onPress={() => setTopsearchbar('text')}>
                  <SearchWhite />
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </LinearGradient>

      <View style={[styles.contentContainer]}>
        <SearchInput search={search} setSearch={setSearch} />

        <HorizontalServiceDetails
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <View style={styles.productsContainer}>
          <LatoText padding={10} />
          {activeTab === 'Insurance' ? (
            <InsuranceComponent />
          ) : activeTab === 'Accessories' && search ? (
            <AccessorySearchResults search={search} />
          ) : activeTab === 'Accessories' ? (
            <AccessoriesComponent />
          ) : activeTab === 'Products' ? (
            <ProductsCatagories data={filteredData} />
          ) : activeTab === 'Services' ? (
            <>
              <ServicesCatagories
                data={filteredData}
                carservicedata={carservicedata}
                ServicePackagesdata={ServicePackagesdata}
              />
            </>
          ) : null}
        </View>
      </View>

      <View style={styles.imageView}>
        <SliderBox
          onCurrentImagePressed={
            // index =>
            // navigation.navigate('SingleProductDetail', {
            //   promotion: promotions[index],
            // })
            () => console.log('Car Pressed')
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
