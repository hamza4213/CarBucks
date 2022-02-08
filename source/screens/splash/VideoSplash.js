import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';
import {useDispatch} from 'react-redux';
import SplashFile from '../../assets/splash.mp4';
import {getCurrentUser} from '../../redux/actions';

export default function VideoSplash({setLoading}) {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getCurrentUser(setLoading));
    }, 7000);
  }, []);

  return (
    <Video
      repeat
      resizeMode="cover"
      fullscreen
      source={SplashFile}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
