import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import styles from './styles';

import RatingButton from '../../common/components/button/ratingButton';

import Tag from '../../common/components/tag';
import TagWithImg from '../../common/components/tagWithImg';

import Thumb from './slider/thumb';
import Rail from './slider/rail';
import Notch from './slider/notch';
import COLOR from '../../assets/svgs/cartsGray.svg';
import COLOR_ACTIVE from '../../assets/svgs/carts.svg';
import RailSelected from './slider/railSelected';
import {useNavigation} from '@react-navigation/native';
import RangeSlider from 'rn-range-slider';
import Label from './slider/label';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchMakes,
  getCarsbyFilters,
  getModalsByFilter,
  getversionsByModalId,
} from '../../redux/actions/metaData';
import metaData from '../../redux/reducers/metaData';
import Header from '../../common/components/header';
import AuthInput from '../../common/components/input/authInput';
import {t} from 'i18next';
import DropDownPicker from 'react-native-dropdown-picker';
import {text, primaryLight, primaryDark} from '../../common/constants/colors';
import HorizontalServiceDetails from '../home/HorizontalServiceDetails';
import MicroCar from '../../assets/svgs/MicroCarSvg.svg';
import AntiqueCarSvg from '../../assets/svgs/AntiqueCarSvg.svg';
import SedancarSvg from '../../assets/svgs/SedancarSvg.svg';
const bodyTypeData = [
  {name: 'Sedan', id: 1, svg: <SedancarSvg />},
  {name: 'Micro', id: 2, svg: <MicroCar />},
  {name: 'Coupe', id: 3, svg: <AntiqueCarSvg />},
  {name: 'Sports Car', id: 4, svg: <SedancarSvg />},
  {name: 'Station Wagon', id: 5, svg: <SedancarSvg />},
  {name: 'Hatchback ', id: 6, svg: <SedancarSvg />},
];

const transmissionTypeData = [
  {name: 'automatic', id: 1},
  {name: 'Manual', id: 3},
];

const fuelTypes = [
  {name: 'Petrol', id: 1},
  {name: 'Diesel', id: 2},
];

export default function RentCar() {
  const dispatch = useDispatch();
  const [activetab, setActivetab] = useState('RentCar');
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openYear, setOpenYear] = useState(false);
  const [cartype, setDeliver] = useState('New Car');

  const [lowPrice, setLowPrice] = useState(0);
  const [highPrice, setHighPrice] = useState(0);

  const [lowMilage, setLowMilage] = useState(0);
  const [highMilage, setHighMilage] = useState(0);

  const [carCompanyIndex, setcarCompanyIndex] = useState(-1);
  const [carCompanyName, setCarCompanyName] = useState('');

  const [carModelIndex, setcarModelIndex] = useState(-1);
  const [carModalName, setcarModalName] = useState('');

  const [carModelYearIndex, setcarModelYearIndex] = useState(-1);
  const [carModalYear, setCarModalYear] = useState('');

  const [bodyTypeIndex, setBodyTypeIndex] = useState(-1);
  const [bodyType, setBodyType] = useState('');

  const [transmissionTypeIndex, setTransmissionTypeIndex] = useState(-1);
  const [transmissionType, setTransmissionType] = useState('');

  const [fuelTypeIndex, setFuelTypeIndex] = useState(-1);
  const [fuelType, setFuelType] = useState('');

  const [yearRange, setYearRange] = useState([]);
  const [bodyColor, setBodyColor] = useState('');

  const [carMakes, setCarMakes] = useState([]);
  const [carModals, setCarModals] = useState([]);

  const navigation = useNavigation();
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);

  const renderLabel = useCallback(
    (value, lable, isOnEnd) => (
      <Label label={lable} text={value} isOnEnd={isOnEnd} />
    ),
    [],
  );
  const renderNotch = useCallback(() => <Notch />, []);

  const handleFilter = () => {
    navigation.navigate('RentFilterResult', {
      lowPrice,
      highPrice,
      carCompanyName,
      carModalName,
      carModalYear,
      bodyType,
      transmissionType,
      fuelType,
      color: bodyColor,
      lowMilage,
      highMilage,
    });
  };

  const onComapnyTabPressed = filterName => {
    dispatch(getModalsByFilter());
  };

  const {makes, modals} = useSelector(state => state.metaData);

  useEffect(() => {
    let years = [];
    const currentDate = new Date();
    for (
      let index = currentDate.getFullYear();
      index >= currentDate.getFullYear() - 50;
      index--
    ) {
      years.push({value: index, label: index});
    }
    setYearRange(years);
    dispatch(fetchMakes());
  }, []);

  useEffect(() => {
    const makesList = makes?.map(make => {
      return {
        label: make.name,
        value: make.name,
        make_id: make.make_id,
      };
    });
    setCarMakes(makesList);
  }, [makes]);

  useEffect(() => {
    if (carCompanyIndex)
      dispatch(getModalsByFilter({make_id: carCompanyIndex}));
  }, [carCompanyIndex]);

  useEffect(() => {
    const modalList = modals?.map(modal => {
      return {
        label: modal.name,
        value: modal.name,
      };
    });
    setCarModals(modalList);
  }, [modals]);

  const setcarIndex = value => {
    const makeID = carMakes.find(make => make.value === value);
    setcarCompanyIndex(makeID?.make_id);
  };

  const handleValueChange = useCallback((low, high) => {
    setLowPrice(low);
    setHighPrice(high);
  }, []);

  const handleMilageChange = useCallback((low, high) => {
    setLowMilage(low);
    setHighMilage(high);
  }, []);

  return (
    <View>
      <Header small title={'Rent Car'} menu />
      <ScrollView
        style={styles.ScrollView}
        showsVerticalScrollIndicator={false}>
        <HorizontalServiceDetails
          activeTab={activetab}
          setActiveTab={setActivetab}
        />
        <View style={{height: 30}}></View>
        <View
          style={{
            height: 50,
            width: '100%',
            alignSelf: 'center',
            // backgroundColor: 'lightgrey',
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setDeliver('New Car')}
            style={{
              backgroundColor: cartype === 'New Car' ? primaryLight : '#fff',
              width: '40%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              shadowOffset: {width: 100, height: 50},
              shadowColor: '#000',
              shadowOpacity: 1,
              elevation: 15,
            }}>
            <Text
              style={{
                color: cartype === 'New Car' ? 'white' : 'black',
                fontSize: 17,
                fontWeight: '600',
              }}>
              New Car
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setDeliver('Used')}
            style={{
              backgroundColor: cartype === 'Used' ? primaryLight : '#fff',
              width: '40%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              shadowOffset: {width: 100, height: 50},
              shadowColor: '#000',
              shadowOpacity: 1,
              elevation: 15,
            }}>
            <Text
              style={{
                color: cartype === 'Used' ? 'white' : 'black',
                fontSize: 17,
                fontWeight: '600',
              }}>
              Used
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 30}}></View>
        <Tag
          carData={carMakes}
          setName={setCarCompanyName}
          title={'Car Company'}
        />
        {/* <DropDownPicker
          placeholder="Car Company"
          open={openModal}
          setOpen={setOpenModal}
          items={carMakes}
          setItems={setCarMakes}
          value={carCompanyName}
          setValue={setCarCompanyName}
          onChangeValue={value => setcarIndex(value)}
          searchable={true}
          searchPlaceholder="Search Make..."
          listMode="SCROLLVIEW"
          dropDownContainerStyle={{
            zIndex: 99,
          }}
          style={{borderColor: text}}
        /> */}
        <View style={{height: 25}}></View>
        {carCompanyName.length > 0 && carModals.length > 0 && (
          <Tag
            carData={carModals}
            // index={carCompanyName}
            // setIndex={setCarCompanyName}
            // setName={setCarMakes}
            title={'Car Model'}
          />
        )}
        <Tag
          carData={yearRange}
          // index={carCompanyName}
          // setIndex={setCarCompanyName}
          setName={setCarModalYear}
          title={'Car Modal Year'}
        />

        {/* {carModals.length > 0 && (
          <>
            <Text style={styles.headingTxt}>{t('carModal')}</Text>
            <DropDownPicker
              placeholder="Car Modal"
              open={openModal}
              setOpen={setOpenModal}
              items={carModals}
              value={carModalName}
              setValue={setcarModalName}
              searchable={true}
              searchPlaceholder="Search Modal..."
              listMode="SCROLLVIEW"
              style={{zIndex: 10, borderColor: text}}
            />
          </>
        )} */}
        {/* <Text style={styles.headingTxt}>{t('carModalYear')}</Text>
        <DropDownPicker
          placeholder="Car Modal Year"
          open={openYear}
          setOpen={setOpenYear}
          items={yearRange}
          setItems={setYearRange}
          value={carModalYear}
          setValue={setCarModalYear}
          searchPlaceholder="Search year..."
          listMode="SCROLLVIEW"
          style={{zIndex: 10, borderColor: text}}
        /> */}

        {/* <Text style={styles.headingTxt}>{t('bodyType')}</Text> */}
        <View style={{height: 25}}></View>
        <View style={{flexDirection: 'row'}}>
          <Text>Price Range</Text>
          <Text style={{color: text}}>(hourly)</Text>
        </View>
        <RangeSlider
          style={{width: '95%', marginTop: -30}}
          gravity={'center'}
          min={0}
          max={300000}
          step={5000}
          allowLabelOverflow
          selectionColor="#F8C6C6"
          blankColor="#f8c6c6"
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderLabel={txt => renderLabel(txt, 'km', true)}
          renderRailSelected={renderRailSelected}
          onValueChanged={handleMilageChange}
        />
        <View style={{height: 25}}></View>
        <Tag carData={bodyTypeData} setName={setBodyType} title={'Body Type'} />
        <View style={{height: 25}}></View>
        <Tag
          carData={transmissionTypeData}
          setName={setTransmissionType}
          title={'Transmission Type'}
        />
        <View style={{height: 25}}></View>
        <Tag title={'Fuel Type'} carData={fuelTypes} setName={setFuelType} />

        {/* <Text style={styles.headingTxt}>{t('carColor')}</Text>
        <AuthInput
          value={bodyColor}
          onChangeText={setBodyColor}
          placeholder={t('carColor')}
          RightIcon={<COLOR />}
          RightIconActive={<COLOR_ACTIVE />}
        /> */}

        {/* <Text style={[styles.headingTxt, styles.mt15]}>
          {t('milage')} <Text style={styles.lightText}>(km)</Text>
        </Text>
        <View style={styles.range}>
          <Text style={styles.rangeNum}>0 km</Text>
          <Text style={styles.rangeNum}>300000 km</Text>
        </View>

        <Text style={styles.headingTxt}>
          {t('priceRange')}{' '}
          <Text style={styles.lightText}>({t('hourly')})</Text>
        </Text>
        <View style={styles.range}>
          <Text style={styles.rangeNum}>0 AED</Text>
          <Text style={styles.rangeNum}>9000 AED</Text>
        </View>
        <RangeSlider
          style={{width: '95%', marginTop: -30}}
          gravity={'center'}
          min={0}
          max={9000}
          step={100}
          allowLabelOverflow
          selectionColor="#F8C6C6"
          blankColor="#f8c6c6"
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          renderLabel={renderLabel}
          onValueChanged={handleValueChange}
        /> */}
        <RatingButton
          title={'Apply Filters'}
          type="gradiant"
          onPress={handleFilter}
          style={styles.filterBtn}
        />
        <View style={{height: 50, marginTop: 40}}></View>
      </ScrollView>
    </View>
  );
}
