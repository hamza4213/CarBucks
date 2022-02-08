import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/auth/login';
import Signup from '../screens/auth/signup';
import VerifyEmail from '../screens/auth/emailVerify';
import ForgetPassword from '../screens/auth/forgetPassword';
import NewPassword from '../screens/auth/newPassword';

export default function Auth() {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="emailVerify" component={VerifyEmail} />
      <AuthStack.Screen name="forgetPassword" component={ForgetPassword} />
      <AuthStack.Screen name="newPassword" component={NewPassword} />
    </AuthStack.Navigator>
  );
}
