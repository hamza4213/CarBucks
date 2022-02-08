import styles from './style';
import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../common/components/cards/productCard';
import { getSubCategoryById } from '../../redux/actions';
import Header from '../../common/components/header';
import NotFound from '../../common/components/notFound';

const CATEGORY_ID = '6192a213b915fe44dca1a4e7';

export default function ProductsCatagories({ data }) {
  // const dispatch = useDispatch();
  // const { productCategories } = useSelector(({ category }) => category);

  // const { user } = useSelector(state => state.auth)
  // console.log('reducers: ', user);
  // console.log('productCatagory', productCategories);

  // useEffect(() => {
  // dispatch(getSubCategoryById(user._id, 'products'));
  // }, []);

  const renderProduct = ({ item, index }) => {
    return (
      <ProductCard type="home" isProductCategory key={index} product={item} />
    );
  };

  return (
    <View>
      {/* <Header title="Product Catagories" /> */}
      {/* <View style={styles.serviceContentContainer}> */}
      <FlatList
        numColumns={2}
        style={styles.flatList}
        data={data}
        renderItem={renderProduct}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (

          <NotFound text="No accessories Available." marginTop={50} />


        )}
      />

      {/* </View> */}
    </View>
  );
}
