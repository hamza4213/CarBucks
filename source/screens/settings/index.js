import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import CardView from 'react-native-cardview';
import Header from '../../common/components/header';
import styles from './styles';
import DownArrowRed from '../../assets/svgs/downArrowRed.svg';
import DropDownPicker from 'react-native-dropdown-picker';
import {t} from 'i18next';
import {useTranslation, I18nextProvider} from 'react-i18next';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
// import {withTranslation} from 'react-i18next';
import i18n from '../../../languages/i18n';

const Settings = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'English', value: 'en'},
    {label: 'عربى', value: 'ar'},
  ]);
  return (
    <ScrollView>
      <Header small title={t('settings')} />
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Account Settings</Text>
        <CardView
          cardElevation={2}
          cardMaxElevation={2}
          cornerRadius={15}
          style={styles.cardView}>
          <View style={styles.settingEntery}>
            {/* <Automatic
              style={[styles.logo, {marginTop: 'auto', marginBottom: 'auto'}]}
            /> */}
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder={t('languages')}
              onChangeValue={language => {
                i18n.changeLanguage(language);
                // console.log(language);
              }}
              style={{
                borderWidth: 0,
              }}
            />
          </View>
          <View style={styles.divider} />

          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPassword')}
            style={styles.settingEntery}>
            <Text style={styles.text}>Update Password</Text>
            <DownArrowRed height={12} width={12} style={styles.arrowDown} />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            onPress={() => navigation.navigate('TermsAndConditions')}
            style={styles.settingEntery}>
            <Text style={styles.text}>Privacy Policy</Text>
            <DownArrowRed height={12} width={12} style={styles.arrowDown} />
          </TouchableOpacity>
        </CardView>
      </View>
    </ScrollView>
  );
};

export default Settings;
