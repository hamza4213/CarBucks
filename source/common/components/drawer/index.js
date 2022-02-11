import React, {useState} from 'react';
import {
  View,
  Share,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  Alert,
} from 'react-native';
import styles from './styles';
import DrawerLogo from '../../../assets/svgs/gradiantLogo.svg';
import FacebookIconWhite from '../../../assets/svgs/facebookIconWhite.svg';
import GoogleIconWhite from '../../../assets/svgs/googleIconWhite.svg';
import InstaIconWhite from '../../../assets/svgs/instaIconWhite.svg';
import WhiteLogo from '../../../assets/svgs/whiteLogo.svg';
import {primaryDark, primaryLight, textDark} from '../../constants/colors';
import HomeWhite from '../../../assets/svgs/homeWhite.svg';
import ProfileGrd from '../../../assets/svgs/profileGrd.svg';
import ProfileWhite from '../../../assets/svgs/profileWhite.svg';
import NotificationGrd from '../../../assets/svgs/notificationGrd.svg';
import NotificationWhite from '../../../assets/svgs/notificationWhite.svg';
import ChatGrd from '../../../assets/svgs/chatActive.svg';
import ChatWhite from '../../../assets/svgs/chatWhite.svg';
import TransactionGrd from '../../../assets/svgs/transactionGrd.svg';
import TransactionWhite from '../../../assets/svgs/transactionWhite.svg';
import JobManagmentGrd from '../../../assets/svgs/jobManagmentGrd.svg';
import JobManagmentWhite from '../../../assets/svgs/jobManagementWhite.svg';
import RatingGrd from '../../../assets/svgs/ratingGrd.svg';
import RatingWhite from '../../../assets/svgs/ratingWhite.svg';
import TAndCGrd from '../../../assets/svgs/tAndCGrd.svg';
import TAndCWhite from '../../../assets/svgs/tAndCWhite.svg';
import AboutGrd from '../../../assets/svgs/aboutGrd.svg';
import LogOutGrd from '../../../assets/svgs/logOutGrd.svg';
import LogOutWhite from '../../../assets/svgs/logoutWhite.svg';
import HomeGrd from '../../../assets/svgs/homeActive.svg';
import UsersIcon from '../../../assets/svgs/users.svg';
import Tab from './tab';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
import {editProfile, logout} from '../../../redux/actions/auth';
import WALLET from '../../../assets/svgs/transactionWhite.svg';
import SEND from '../../../assets/pngs/send.png';
import CardView from 'react-native-cardview';
import RatingButton from '../button/ratingButton';
import ImagePicker from 'react-native-image-crop-picker';
import {client, s3Client} from '../../../../App';
import {PutObjectCommand} from '@aws-sdk/client-s3';
import {
  TextractClient,
  DetectDocumentTextCommand,
  AnalyzeDocumentCommand,
} from '@aws-sdk/client-textract';
import {getInvitationCode} from '../../../redux/actions/';
import * as constants from '../../../redux/ActionTypes';
import {WalletApi} from '../../../redux/apis';
import DropDownPicker from 'react-native-dropdown-picker';
import {useTranslation} from 'react-i18next';
import EditProfile from '../../../screens/editProfile';
// import {getInvitationCode} from '../../../redux/actions/wallet';

const walletApi = new WalletApi();
const DrivingLicence = 'DL';
const EmiratesID = 'EID';
const Mulkiya = 'MULKIYA';
export default function Drawer() {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const {t, i18n} = useTranslation();
  const [items, setItems] = useState([
    {label: 'English', value: 'en'},
    {label: 'عربى', value: 'ar'},
  ]);

  const tabsData = [
    {
      icon: HomeGrd,
      activeIcon: HomeWhite,
      text: t('home'),
      route: 'Home',
    },
    {
      icon: ProfileGrd,
      activeIcon: ProfileWhite,
      text: t('myProfile'),
      route: 'Profile',
    },
    {
      icon: ProfileGrd,
      activeIcon: ProfileWhite,
      text: t('analytics'),
      route: 'Analytics',
    },

    {
      icon: NotificationGrd,
      activeIcon: NotificationWhite,
      text: t('notification'),
      route: 'Notifcations',
    },
    {
      icon: ChatGrd,
      activeIcon: ChatWhite,
      text: t('inbox'),
      route: 'ChatHistory',
    },
    {
      icon: TransactionGrd,
      activeIcon: TransactionWhite,
      text: t('transactionHistory'),
      route: 'TransactionHistory',
    },
    {
      icon: JobManagmentGrd,
      activeIcon: JobManagmentWhite,
      text: t('jobManagement'),
      route: 'JobManagement',
    },
    {
      icon: UsersIcon,
      activeIcon: RatingWhite,
      text: t('invite screen'),
      route: 'invitescreen',
    },
    {
      icon: RatingGrd,
      activeIcon: RatingWhite,
      text: t('ratings'),
      route: 'Ratings',
    },
    {
      icon: RatingGrd,
      activeIcon: RatingWhite,
      text: t('disputes'),
      route: 'Disputes',
    },
    {
      icon: RatingGrd,
      activeIcon: RatingWhite,
      text: t('settings'),
      route: 'Settings',
    },
    {
      icon: TAndCGrd,
      activeIcon: TAndCWhite,
      text: t('terms&conditions'),
      route: 'TermsAndConditions',
    },

    {
      icon: LogOutGrd,
      activeIcon: LogOutWhite,
      text: t('logout'),
      route: 'Logout',
    },
  ];

  // const [activeTab, setActiveTab] = useState(-1);

  const handle = (index, route) => {
    setActiveIndex(index);
    if (route === 'Logout') {
      dispatch(logout());
    } else {
      navigation.navigate(route);
    }
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  const goToWallet = () => {
    navigation.navigate('Wallet');
  };

  const share = async () => {
    try {
      dispatch({type: constants.LOADING_ON});
      const res = await walletApi.fetchInviteCode();

      dispatch({type: constants.LOADING_OFF});
      const result = await Share.share({
        title: 'App link',
        message: `Please install this app and stay safe , AppLink :https://wizardly-bardeen-2f1663.netlify.app/, and type this code "${res?.data?.result?.code}"`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const scanHandler = async documentType => {
    try {
      const image = await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      });

      let imageName = image.path.split('/').pop();
      let file = {
        type: image.mime,
        name: imageName,
        uri: image.path,
      };

      const options = {
        Key: imageName,
        Bucket: process.env.S3_BUCKET,
        Body: file,
      };

      setLoading(true);
      await s3Client.send(new PutObjectCommand(options));

      const params = {
        Document: {
          S3Object: {
            Bucket: 'cdn.carbucks.com',
            Name: imageName,
          },
        },
        FeatureTypes: ['TABLES'],
      };

      const detectDocumentTextCommand = new DetectDocumentTextCommand(params);
      const data = await client.send(detectDocumentTextCommand);

      let text = '';
      data?.Blocks?.map(block => {
        if (block.BlockType === 'LINE') {
          if (text !== '') text = `${text}\n${block.Text}`;
          else text = `${block.Text}`;
        }
      });
      let s3ImageLink = `https://s3.amazonaws.com/cdn.carbucks.com/${imageName}`;

      if (documentType === DrivingLicence) {
        const data = {
          DrivingLicence: {
            image: s3ImageLink,
            text: text,
          },
        };
        dispatch(editProfile(data));
      } else if (documentType === EmiratesID) {
        const data = {
          EmiratesID: {
            image: s3ImageLink,
            text: text,
          },
        };
        dispatch(editProfile(data));
      } else if (documentType === Mulkiya) {
        const data = {
          mulkiya: {
            image: s3ImageLink,
            text: text,
          },
        };
        dispatch(editProfile(data));
      }

      Alert.alert('SUCCESS', text);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      Alert.alert(
        'ERROR',
        error?.message || 'Error occured scanning document.',
      );
    }
  };

  return (
    <View style={styles.drawer}>
      <View style={styles.logoView}>
        <DrawerLogo hieght={52} width={180} />
        <View style={styles.underline} />
      </View>
      {/* <View style={styles.dropDown}>
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
          }}
        />
      </View> */}

      <View style={styles.cardsContainer}>
        <TouchableOpacity
          onPress={goToWallet}
          style={{flex: 1, paddingRight: 5}}>
          <View style={styles.card}>
            <View style={styles.walletView}>
              <WALLET height={12} width={12} />
            </View>
            <View style={styles.amountWrapper}>
              <Text style={styles.cardText}>{t('wallet')}</Text>
              <Text style={styles.amount}>$450</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={share} style={{flex: 1}}>
          <View style={styles.card}>
            <View style={styles.walletView}>
              <Image source={SEND} style={styles.cardImage} />
            </View>
            <Text style={[styles.cardText, {marginTop: 10}]}>
              {t('inviteFriends')}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        Viewelevation={2}
        cornerRadius={20}
        cardElevation={2}
        style={styles.tabs}>
        <TouchableOpacity
          onPress={() => {
            scanHandler(DrivingLicence);
          }}
          style={styles.tab}>
          <Text style={styles.tabText}>
            {loading ? t('scanning') : t('drivingLicence')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            scanHandler(EmiratesID);
          }}
          style={styles.tab}>
          <Text style={styles.tabText}>
            {loading ? t('scanning') : t('emiratesId')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            scanHandler(Mulkiya);
          }}
          style={styles.tab}>
          <Text style={styles.tabText}>
            {loading ? t('scanning') : t('mulkiya')}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.tabsView} showsVerticalScrollIndicator={false}>
        {tabsData.map((item, index) => (
          <Tab
            key={index}
            text={item.text}
            isActive={index === activeIndex}
            onPress={() => handle(index, item.route)}
            Icon={index === activeIndex ? item.activeIcon : item.icon}
          />
        ))}
        <LinearGradient
          colors={[primaryLight, primaryDark]}
          start={{x: 0.2, y: 1.0}}
          end={{x: 0.8, y: 0.0}}
          style={styles.bottomTab}>
          <View style={styles.socilaIcons}>
            <GoogleIconWhite />
            <FacebookIconWhite />
            <InstaIconWhite />
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
}
