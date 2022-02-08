import React from 'react';
import stripe from 'tipsi-stripe';
import {Provider} from 'react-redux';
import * as AWS from '@aws-sdk/client-s3';
import AppNavigation from './source/navigation';
import {StatusBar, LogBox, Text} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import {store, persistor} from './source/redux/store';
import {TextractClient} from '@aws-sdk/client-textract';
import {primaryDark} from './source/common/constants/colors';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import {REGION, AWS_ACCESS_KEY, AWS_SECRET_KEY, STRIPE_KEY} from '@env';

Text.defaultProps = Text.defaultProps || {};

export const client = new TextractClient({
  region: REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
  },
});

export const s3Client = new AWS.S3({
  region: REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
  },
});

LogBox.ignoreAllLogs();

const App = () => {
  stripe.setOptions({
    publishableKey: STRIPE_KEY,
    androidPayMode: 'test',
  });

  Text.defaultProps.style = {fontFamily: 'Poppins'};

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar backgroundColor={primaryDark} />
          <MenuProvider>
            <AppNavigation />
          </MenuProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
