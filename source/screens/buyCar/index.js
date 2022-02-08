import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  TouchableHighlight,
} from 'react-native';
import Header from '../../common/components/header';
import COLOR from '../../assets/svgs/cartsGray.svg';
import COLOR_ACTIVE from '../../assets/svgs/carts.svg';
import styles from './styles';
import CardView from 'react-native-cardview';
import RatingButton from '../../common/components/button/ratingButton';
import {text} from '../../common/constants/colors';
import Tag from '../../common/components/tag';
import TagWithImg from '../../common/components/tagWithImg';
import Car1 from '../../assets/svgs/car1.svg';
import Car2 from '../../assets/svgs/car2.svg';
import Car3 from '../../assets/svgs/car3.svg';
import Thumb from './slider/thumb';
import Rail from './slider/rail';
import Notch from './slider/notch';
import RailSelected from './slider/railSelected';
import {useNavigation} from '@react-navigation/native';
import RangeSlider from 'rn-range-slider';
import Label from './slider/label';
import {
  fetchMakes,
  getModalsByFilter,
  getversionsByModalId,
} from '../../redux/actions/metaData';
import {useDispatch, useSelector} from 'react-redux';
import AuthInput from '../../common/components/input/authInput';
import {t} from 'i18next';
import DropDownPicker from 'react-native-dropdown-picker';

// import RangeSlider from 'rn-range-slider';

// const renderThumb = useCallback(() => <Thumb />, []);
// const renderRail = useCallback(() => <Rail />, []);
// const renderRailSelected = useCallback(() => <RailSelected />, []);

const bodyTypeData = [
  {name: 'Sedan', id: 1},
  {name: 'Micro', id: 2},
  {name: 'Coupe', id: 3},
  {name: 'Sports Car', id: 4},
  {name: 'Station Wagon', id: 5},
  {name: 'Hatchback ', id: 6},
];

const transmissionTypeData = [
  {name: 'automatic', id: 1},
  // {name: 'Sami-Automatic', id: 2},
  {name: 'Manual', id: 3},
];

const fuelTypes = [
  {name: 'Petrol', id: 1},
  {name: 'Diesel', id: 2},
  // {name: 'Electric', id: 3},
];

export default function BuyCar() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openYear, setOpenYear] = useState(false);

  const [lowPrice, setLowPrice] = useState(0);
  const [highPrice, setHighPrice] = useState(0);

  const [lowMilage, setLowMilage] = useState(0);
  const [highMilage, setHighMilage] = useState(0);

  const [carCompanyIndex, setcarCompanyIndex] = useState(-1);
   
  const [carCompanyName, setCarCompanyName] = useState('');

  const [carModalName, setcarModalName] = useState('');

  const [carModalYear, setCarModalYear] = useState('');

  const [bodyTypeIndex, setBodyTypeIndex] = useState(-1);
  const [bodyType, setBodyType] = useState('');
  const [bodyColor, setBodyColor] = useState('');

  const [transmissionTypeIndex, setTransmissionTypeIndex] = useState(-1);
  const [transmissionType, setTransmissionType] = useState('');

  const [fuelTypeIndex, setFuelTypeIndex] = useState(-1);
  const [fuelType, setFuelType] = useState('');

  const [carMakes, setCarMakes] = useState([]);
  const [carModals, setCarModals] = useState([]);

  const [yearRange, setYearRange] = useState([]);

  const CATEGORY_ID = '6192a1bdb915fe44dca1a4e3';

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
  const dispatch = useDispatch();
  const {makes, modals} = useSelector(({metaData}) => metaData);

  const handleFilter = () => {
    navigation.navigate('BuyFilterResult', {
      lowPrice: lowPrice,
      highPrice: highPrice,
      carCompanyName: carCompanyName,
      carModalName: carModalName,
      carModalYear: carModalYear,
      bodyType: bodyType,
      transmissionType: transmissionType,
      fuelType: fuelType,
      color: bodyColor,
      lowMilage,
      highMilage,
    });
  };

  const handleValueChange = useCallback((low, high) => {
    setLowPrice(low);
    setHighPrice(high);
  }, []);

  const handleMilageChange = useCallback((low, high) => {
    setLowMilage(low);
    setHighMilage(high);
  }, []);

 

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

  return (
    <ScrollView>
      <View
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.headingTxt}>{t('carCompany')}</Text>
        <DropDownPicker
          placeholder="Car Company"
          open={open}
          setOpen={setOpen}
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
        />

        {carModals.length > 0 && (
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
        )}
        <Text style={styles.headingTxt}>{t('carModalYear')}</Text>
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
        />

        <Text style={styles.headingTxt}>{t('transmissionType')}</Text>
        <Tag
          index={transmissionTypeIndex}
          setIndex={setTransmissionTypeIndex}
          carData={transmissionTypeData}
          setName={setTransmissionType}
        />
        <Text style={styles.headingTxt}>{t('fuelType')}</Text>
        <Tag
          index={fuelTypeIndex}
          setIndex={setFuelTypeIndex}
          carData={fuelTypes}
          setName={setFuelType}
        />
        <Text style={styles.headingTxt}>{t('bodyType')}</Text>
        <Tag
          carData={bodyTypeData}
          index={bodyTypeIndex}
          setIndex={setBodyTypeIndex}
          setName={setBodyType}
        />
        <Text style={styles.headingTxt}>{t('carColor')}</Text>
        <AuthInput
          value={bodyColor}
          onChangeText={setBodyColor}
          placeholder={t('carColor')}
          RightIcon={<COLOR />}
          RightIconActive={<COLOR_ACTIVE />}
        />

        <Text style={[styles.headingTxt, styles.mt15]}>
          Milage <Text style={styles.lightText}>(km)</Text>
        </Text>
        <View style={styles.range}>
          <Text style={styles.rangeNum}>0 km</Text>
          <Text style={styles.rangeNum}>300000 km</Text>
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

        <Text style={styles.headingTxt}>Price Range</Text>
        <View style={styles.range}>
          <Text style={styles.rangeNum}>4000 AED</Text>
          <Text style={styles.rangeNum}>80000 AED</Text>
        </View>
        <RangeSlider
          style={{width: '95%', marginTop: -30}}
          gravity={'center'}
          min={4000}
          max={80000}
          step={500}
          allowLabelOverflow
          selectionColor="#F8C6C6"
          blankColor="#f8c6c6"
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderLabel={txt => renderLabel(txt, 'AED', true)}
          renderRailSelected={renderRailSelected}
          onValueChanged={handleValueChange}
        />

        <RatingButton
          title={t('applyFilter')}
          type="gradiant"
          onPress={handleFilter}
          style={styles.filterBtn}
        />
      </View>
    </ScrollView>
  );
}
