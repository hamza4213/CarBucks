import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../common/components/header';
import LinearGradientWrapper from '../../common/components/LinearGradientWrapper';
import {primaryDark, primaryLight} from '../../common/constants/colors';
import InsuranceOpendownComponent from '../../common/components/InsuranceComponent/InsuranceOpendownComponent';
import InsuranceBuyButton from '../../common/components/InsuranceComponent/InsuranceBuyButton';

const InsuranceComprehensive = props => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View>
      <Header small title="Title of Insurance here" />
      <ScrollView style={styles.contentContainer}>
        <View style={{height: 15}}></View>
        <LinearGradientWrapper
          style={{
            height: 40,
            width: '95%',
            alignSelf: 'center',
            borderRadius: 15,
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setActiveTab(0)}
            style={[styles.tab, activeTab === 0 && styles.focusedTab]}>
            <Text
              style={{
                color: activeTab === 0 ? primaryLight : 'white',
                fontWeight: activeTab === 0 ? 'bold' : 'normal',
              }}>
              Comprehensive
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab(1)}
            style={[styles.tab, activeTab === 1 && styles.focusedTab]}>
            <Text
              style={{
                color: activeTab === 1 ? primaryLight : 'white',
                fontWeight: activeTab === 1 ? 'bold' : 'normal',
              }}>
              Third Party
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab(2)}
            style={[styles.tab, activeTab === 2 && styles.focusedTab]}>
            <Text
              style={{
                color: activeTab === 2 ? primaryLight : 'white',
                fontWeight: activeTab === 2 ? 'bold' : 'normal',
              }}>
              Basic
            </Text>
          </TouchableOpacity>
        </LinearGradientWrapper>
        <View style={{height: '10%'}}></View>
        <Image
          source={require('../../assets/pngs/buyCarImage.jpg')}
          style={{
            height: 90,
            width: 90,
            alignSelf: 'center',
            borderRadius: 80,
          }}
        />
        <View style={{height: 10}}></View>
        <Text
          style={{
            alignSelf: 'center',
            fontWeight: 'bold',
            color: primaryDark,
          }}>
          Tag Aig Insurances
        </Text>
        <View style={{height: 15}}></View>

        <InsuranceOpendownComponent />
        <View style={{height: 15}}></View>
        <InsuranceOpendownComponent />
        <View style={{height: 15}}></View>

        <View style={{height: 80, marginTop: 30}}></View>
      </ScrollView>
      <InsuranceBuyButton />
    </View>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    height: '100%',
    backgroundColor: 'white',
    marginTop: -18,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingHorizontal: 20,
  },
  focusedTab: {
    backgroundColor: 'white',
    color: 'white',
  },
  tab: {
    paddingHorizontal: 10,
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
});
export default InsuranceComprehensive;
