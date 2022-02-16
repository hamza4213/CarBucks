import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../screens/profile';
import Notifcations from '../screens/notification';
import NotifcationsDetail from '../screens/notificationDetail';

import JobManagement from '../screens/jobManagement';

import HomeIcon from '../assets/svgs/home.svg';
import HomeActive from '../assets/svgs/homeActive.svg';
import ChatIcon from '../assets/svgs/chat.svg';
import ChatActive from '../assets/svgs/chatActive.svg';
import NotificationGrd from '../assets/svgs/notificationActive.svg';
import NotificationIcon from '../assets/svgs/notification.svg';
import CartGrd from '../assets/svgs/cartActive.svg';
import CartIcon from '../assets/svgs/cart.svg';
import CarRentalIcon from '../assets/svgs/carRental.svg';
import CarRentalActive from '../assets/svgs/carRentalActive.svg';
import UserIcon from '../assets/svgs/user.svg';
import UserActive from '../assets/svgs/userActive.svg';
import {useSelector} from 'react-redux';
import AppLoader from '../common/components/appLoader';
import JobInProgress from '../screens/jobProgress';
import EditProfile from '../screens/editProfile';
// import MyProfile2 from '../screens/clientProfile';
import VendorProfile from '../screens/profile';
// import MyProfile from '../screens/clientProfile2';
import ClientProfile from '../screens/clientProfile';
import ResetPassword from '../screens/resetPassword';
import TransactionHistory from '../screens/transactionHistory';
import TransactionDetail from '../screens/transactionDetail';
import BookingForm from '../screens/bookingForm';
import CarScreen from '../screens/carScreen';
import Ratings from '../screens/ratings';
import Settings from '../screens/settings';

import TermsAndConditions from '../screens/termsAndConditions';
const screenOptions = {
  headerShown: false,
};

// Home Stack Screens
// import Home from '../screens/home';
import Home from '../screens/home/Dashboard';
import Services from '../screens/services';
import Checkout from '../screens/checkout';
import ThankYou from '../screens/thankYou';
import ServiceDetails from '../screens/serviceDetail';
import Accessories from '../screens/accessoriesProducts';

// Chat Stack Screens
import Chat from '../screens/chatScreen';
import ChatHistory from '../screens/chatHistory';
import Wallet from '../screens/wallet';
import OCR from '../screens/ocr';
import SingleProductDetail from '../screens/singleProductDetail';
import Cart from '../screens/productCart';
import RentFilterResult from '../screens/rentFilterResult';
import RentCarDetail from '../screens/rentCarDetail';
import PickADate from '../screens/pickADate';
import JobProgress from '../screens/jobProgress';
import BuyFilterResult from '../screens/buyFilterResult';
import BuyCarDetail from '../screens/buyCarDetail';
import ServicesCatagories from '../screens/home/Services';
import ProductsCatagories from '../screens/home/Products';
import RentCar from '../screens/rentCar';
import BuyCar from '../screens/buyCar';
import ClientProfile2 from '../screens/clientProfile2';
import Dispute from '../screens/dispute';
import Disputes from '../screens/disputes';
import DisputesDetails from '../screens/disputeDetails';
import Analytics from '../screens/analytics';
import InviteScreen from '../screens/InviteScreen/index';
import InsuranceComprehensive from '../screens/InsuranceComprehensive/InsuranceComprehensive';
import BuyInsuranceScreen from '../screens/InsuranceComprehensive/BuyInsuranceScreen';
import InsuranceDocuments from '../screens/InsuranceComprehensive/InsuranceDocuments';
import ServiceDetailCaetagories from '../screens/serviceDetail/ServiceDetailCaetagories';
import CarServicesDetails from '../screens/serviceDetail/CarServicesDetails';
import PopularCarWashService from '../screens/serviceDetail/PopularCarWashService';

const HomeStack = createStackNavigator();
const ChatStack = createStackNavigator();
const JobsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const NotificationsStack = createStackNavigator();

const HomeNav = () => (
  <HomeStack.Navigator screenOptions={screenOptions}>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="BuyCarDetail" component={BuyCarDetail} />
    <HomeStack.Screen
      name="ServicesCatagories"
      component={ServicesCatagories}
    />
    <HomeStack.Screen
      name="ProductsCatagories"
      component={ProductsCatagories}
    />
    <HomeStack.Screen name="RentCar" component={RentCar} />
    <HomeStack.Screen name="BuyCar" component={BuyCar} />
    <HomeStack.Screen name="BuyFilterResult" component={BuyFilterResult} />
    <HomeStack.Screen name="Services" component={Services} />
    <HomeStack.Screen name="Accessories" component={Accessories} />
    <HomeStack.Screen name="Cart" component={Cart} />
    <HomeStack.Screen name="Dispute" component={Dispute} />
    <HomeStack.Screen name="Disputes" component={Disputes} />
    <HomeStack.Screen name="Settings" component={Settings} />
    <HomeStack.Screen name="Analytics" component={Analytics} />
    <HomeStack.Screen name="DisputeDetails" component={DisputesDetails} />
    <HomeStack.Screen name="Checkout" component={Checkout} />
    <HomeStack.Screen name="RentFilterResult" component={RentFilterResult} />
    <HomeStack.Screen name="RentCarDetail" component={RentCarDetail} />
    <HomeStack.Screen name="ThankYou" component={ThankYou} />
    <HomeStack.Screen name="ClientProfile" component={ClientProfile} />
    <HomeStack.Screen name="ClientProfile2" component={ClientProfile2} />
    <HomeStack.Screen name="ServiceDetails" component={ServiceDetails} />
    <HomeStack.Screen
      name="CarServicesDetails"
      component={CarServicesDetails}
    />
    <HomeStack.Screen
      name="PopularCarWashService"
      component={PopularCarWashService}
    />
    <HomeStack.Screen
      name="ServiceDetailCaetagories"
      component={ServiceDetailCaetagories}
    />
    <HomeStack.Screen name="PickADate" component={PickADate} />
    <HomeStack.Screen name="Wallet" component={Wallet} />
    <HomeStack.Screen name="TransactionDetail" component={TransactionDetail} />
    <HomeStack.Screen name="CarScreen" component={CarScreen} />
    <HomeStack.Screen name="BookingForm" component={BookingForm} />
    <HomeStack.Screen name="JobInProgress" component={JobProgress} />
    <HomeStack.Screen name="Notifcations" component={Notifcations} />
    <HomeStack.Screen name="VendorProfile" component={VendorProfile} />
    <HomeStack.Screen name="NotifcationDetail" component={NotifcationsDetail} />
    <HomeStack.Screen name="EditProfile" component={EditProfile} />
    <HomeStack.Screen name="ResetPassword" component={ResetPassword} />
    <HomeStack.Screen
      name="SingleProductDetail"
      component={SingleProductDetail}
    />
    <HomeStack.Screen
      name="TransactionHistory"
      component={TransactionHistory}
    />
    <HomeStack.Screen
      name="TermsAndConditions"
      component={TermsAndConditions}
    />
    <HomeStack.Screen name="invitescreen" component={InviteScreen} />
    <HomeStack.Screen
      name="InsuranceComprehensive"
      component={InsuranceComprehensive}
    />
    <HomeStack.Screen
      name="BuyInsuranceScreen"
      component={BuyInsuranceScreen}
    />
    <HomeStack.Screen
      name="InsuranceDocuments"
      component={InsuranceDocuments}
    />
    <HomeStack.Screen name="Ratings" component={Ratings} />
  </HomeStack.Navigator>
);

const NotificationNav = () => (
  <NotificationsStack.Navigator screenOptions={screenOptions}>
    <NotificationsStack.Screen name="Notify" component={Notifcations} />
    <NotificationsStack.Screen
      name="NotifcationDetail"
      component={NotifcationsDetail}
    />
  </NotificationsStack.Navigator>
);

const ChatNav = () => (
  <ChatStack.Navigator screenOptions={screenOptions}>
    <ChatStack.Screen name="ChatHistory" component={ChatHistory} />
    <ChatStack.Screen name="Chat" component={Chat} />
    <ChatStack.Screen name="Profile" component={ClientProfile} />
  </ChatStack.Navigator>
);

const JobNav = () => (
  <JobsStack.Navigator screenOptions={screenOptions}>
    <JobsStack.Screen name="Job" component={JobManagement} />
    <JobsStack.Screen name="JobInProgress" component={JobInProgress} />
  </JobsStack.Navigator>
);

const ProfileNav = () => (
  <ProfileStack.Navigator screenOptions={screenOptions}>
    <ProfileStack.Screen name="Profile" component={MyProfile} />
    <ProfileStack.Screen name="MyProfile" component={MyProfile2} />
    <ProfileStack.Screen name="EditProfile" component={EditProfile} />
    <ProfileStack.Screen name="ForgotPassword" component={ForgotPassword} />
    <ProfileStack.Screen name="Ratings" component={Ratings} />
    <ProfileStack.Screen name="Notifcations" component={Notifcations} />
    <ProfileStack.Screen
      name="TermsAndConditions"
      component={TermsAndConditions}
    />
    <ProfileStack.Screen
      name="TransactionHistory"
      component={TransactionHistory}
    />
  </ProfileStack.Navigator>
);

export default function BottomNav() {
  const Tab = createBottomTabNavigator();
  const {loading} = useSelector(({common}) => common);

  return (
    <>
      {loading ? <AppLoader textContent="Please wait..." /> : null}
      <Tab.Navigator
        tabBarOptions={{showLabel: false}}
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Home') {
              return focused ? <HomeActive /> : <HomeIcon />;
            } else if (route.name === 'ChatHistory') {
              return focused ? <ChatActive /> : <ChatIcon />;
            } else if (route.name === 'Cart') {
              return focused ? <CartGrd /> : <CartIcon />;
            } else if (route.name === 'JobManagement') {
              return focused ? <CarRentalActive /> : <CarRentalIcon />;
            } else if (route.name === 'Profile') {
              return focused ? <UserActive /> : <UserIcon />;
            } else {
              return <HomeActive />;
            }
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'tomato',
        })}>
        <Tab.Screen name="Home" component={HomeNav} />
        <Tab.Screen name="ChatHistory" component={ChatNav} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="JobManagement" component={JobManagement} />
        <Tab.Screen name="Profile" component={ClientProfile} />
      </Tab.Navigator>
    </>
  );
}
