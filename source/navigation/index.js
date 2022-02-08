import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';
import DrawerContent from '../common/components/drawer';
import Auth from './Auth';
import AppNavigation from './BottomNav';
import Splash from '../screens/splash/VideoSplash';

import {io} from 'socket.io-client';
import {SOCKET_URL} from '../utils/endPoint';
import {sendMessage} from '../redux/actions/chat';

export var socket = null;

const AppDrawer = createDrawerNavigator();

const DrawerApp = () => {
  return (
    <AppDrawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => {
        return <DrawerContent {...props} />;
      }}>
      <AppDrawer.Screen name="Initial" component={AppNavigation} />
    </AppDrawer.Navigator>
  );
};

const connectSocket = () => {
  socket = io(SOCKET_URL);

  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
      
    });

    socket.on('disconnect', e => {
      // On connection end
      
    });

    socket.on('connect_error', e => {
      // on error
      
    });
  });
};

export default function Navigation() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const {isAuth} = useSelector(({auth}) => auth);

  const createSocketChannel = socketChannel => {
    const handler = (event, data) => {
      switch (event) {
        case 'message':
          if (data.length) {
            const msg = data[0];
            let message = {
              text: msg?.message || '',
              user: {
                avatar: msg?.from?.image,
                name:
                  msg?.from?.firstName || '' + ' ' + msg?.from?.lastName || '',
                ...msg.from,
              },
              ...msg,
            };

            dispatch(sendMessage(message));
          }
          break;

        default:
          break;
      }
    };

    socketChannel.onAny((event, ...args) => {
      handler(event, args);

    });

    return () => {
      socketChannel.off('newTask', handler);
    };
  };

  useEffect(() => {
    const connectToSocketIO = async () => {
      const socketCall = await connectSocket();
      createSocketChannel(socketCall);
    };
    connectToSocketIO();
  }, []);

  if (loading) {
    return <Splash setLoading={setLoading} />;
  }

  return isAuth ? <DrawerApp /> : <Auth />;
}
