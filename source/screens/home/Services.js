import styles from './style';
import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../common/components/cards/productCard';
import { getSubCategoryById } from '../../redux/actions';
import Header from '../../common/components/header';
import { t } from 'i18next';
import NotFound from '../../common/components/notFound';

const CATEGORY_ID = '6192a0afb915fe44dca1a4d7';

export default function ServicesCatagories({ data }) {

  // const dispatch = useDispatch();
  // const { subCategories } = useSelector(({ category }) => category);

  // const {token} = useSelector(({auth}) => auth);
  // console.log('token', token);
  // console.log('subCategories', subCategories);
  // useEffect(() => {
    // dispatch(getSubCategoryById(CATEGORY_ID));
  // }, []);

  const renderProfile = ({ item, key }) => {
    return <ProductCard key={key} product={item} />;
  };

  return (
    <FlatList
      numColumns={2}

      data={data}
      renderItem={renderProfile}
      style={{ marginHorizontal: -20, paddingHorizontal: 20 }}

      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<NotFound text="No services Available." marginTop={50} />}

    />
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
