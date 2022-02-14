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

const catagories = [
  {title: 'Services', screen: 'ServicesCatagories', available: 60},
  {title: 'Accessories', screen: 'ProductsCatagories', available: 635},
  {title: 'Rent Cars', screen: 'RentCar', available: 420},
  {title: 'Buy Cars', screen: 'BuyCar', available: 1050},
];

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
    // console.log('consoling active tab', activeTab?.type, subCategories[0]);

    setFilteredData(subCategories.filter(i => i?.parent === item._id));
  };

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

      <View style={[styles.contentContainer, {}]}>
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

        <LinearGradientWrapper style={{marginTop: 20, borderRadius: 20}}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{flexGrow: 0}}>
            <CardView
              elevation={2}
              cardElevation={2}
              cornerRadius={20}
              style={styles.tabs}>
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
            </CardView>
          </ScrollView>
        </LinearGradientWrapper>

        <View style={styles.productsContainer}>
          <LatoText padding={10} />
          {activeTab?.description === 'insurance' ? (
            <InsuranceComponent />
          ) : activeTab?.type === 'product' ? (
            <ProductsCatagories data={filteredData} />
          ) : activeTab?.type === 'service' ? (
            <ServicesCatagories data={filteredData} />
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
