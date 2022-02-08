import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './splashStyles';
import GradiantLogo from '../../assets/svgs/gradiantLogo.svg';
import SplashScreenStyle from '../../assets/svgs/loginScreenStyle.svg';
import {useDispatch} from 'react-redux';
import {getCurrentUser} from '../../redux/actions/auth';

const Splash = ({setLoading}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser(setLoading));
  }, []);

  return (
    <View style={styles.container}>
      <GradiantLogo style={styles.gradiantLogo} />
      <SplashScreenStyle style={styles.gradiantDesign} />
    </View>
  );
};
export default Splash;
