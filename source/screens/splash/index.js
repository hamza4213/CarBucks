import React from 'react';
import {ImageBackground} from 'react-native';
import SplashBackgound from '../../assets/pngs/splash.png';
import GradiantLogo from '../../assets/svgs/gradiantLogo.svg';
import styles from './styles';

const Splash = () => {
  return (
    <ImageBackground source={SplashBackgound} style={styles.container}>
      <GradiantLogo />
    </ImageBackground>
  );
};

export default Splash;
