import styles from './style';
import React, {useEffect} from 'react';
import {FlatList, View, TouchableOpacity, Image, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ProductCard from '../../common/components/cards/productCard';
import {getSubCategoryById} from '../../redux/actions';
import Header from '../../common/components/header';
import {t} from 'i18next';
import NotFound from '../../common/components/notFound';

const CATEGORY_ID = '6192a0afb915fe44dca1a4d7';
import SmallImage from '../../common/components/ImagesComponents/SmallImage';
import LargeImage from '../../common/components/ImagesComponents/LargeImage';
import {useNavigation} from '@react-navigation/native';

export default function ServicesCatagories({
  data,
  carservicedata,
  ServicePackagesdata,
}) {
  const navigation = useNavigation();

  // const dispatch = useDispatch();
  // const { subCategories } = useSelector(({ category }) => category);

  // const {token} = useSelector(({auth}) => auth);
  // console.log('token', token);
  // console.log('subCategories', subCategories);
  // useEffect(() => {
  // dispatch(getSubCategoryById(CATEGORY_ID));
  // }, []);

  const renderProfile = ({item, key}) => {
    return <ProductCard key={key} product={item} />;
  };

  return (
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
        <Text style={{fontWeight: '600'}}>Workshop for luxury cars</Text>
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
      <FlatList
        numColumns={2}
        data={data}
        renderItem={renderProfile}
        style={{marginHorizontal: -20, paddingHorizontal: 20}}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <NotFound text="No services Available." marginTop={50} />
        }
      />
    </>
    // <View style={{ flex: 1 }} >
    //   {/* <Header title={t('serviceCategories')} /> */}
    //   {/* <View style={styles.serviceContentContainer}> */}
    //   />
    //   {/* {subCategories && subCategories.length ? null : (
    //     <View style={{ marginTop: 50, flex: 1 }}>
    //       <NotFound text="No category Available." />
    //     </View>
    //   )} */}
    //   {/* </View> */}
    // {/* </View> */}
  );
}
