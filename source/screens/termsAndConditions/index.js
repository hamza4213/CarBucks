import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../common/components/header';
import {getTermsAndConditions} from '../../redux/actions/tAndC';
import styles from './styles';
import TermsSection from './termsSection';

export default function TermsAndConditions() {
  // const [tAndC, setTAndC] = useState('');
  const dispatch = useDispatch();
  const {tAndC} = useSelector(state => state.tAndC);
  // console.log('tAndC:', tAndC[0]);
  useEffect(() => {
    dispatch(getTermsAndConditions(() => {}));
  }, []);
  return (
    <View>
      <Header title="Terms & Conditions" style={styles.header} />
      <ScrollView style={styles.contentContainer}>
        {/* {t_c.map((item, index) => ( */}
        <TermsSection item={tAndC[0]} />
        {/* ))} */}
      </ScrollView>
    </View>
  );
}
