import React, {useEffect} from 'react';
import {Image, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {appStyles, colors} from '../../assets/styles/appstyles';
import styles from './styles';

import logoIMG from '../../assets/img/truco.png';

const SplashScreen = (props) => {
  const {navigation} = props;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000 * 4);
  }, []);

  return (
    <LinearGradient
      style={[styles.root]}
      colors={[colors.primary, colors.primaryDark]}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <Image source={logoIMG} style={[styles.image]} />
      <Text style={[styles.title, appStyles.boldText]}>contador de truco</Text>
      <Text style={[styles.description, appStyles.lightText]}>
        por pedro feltrin e bolívar braga
      </Text>
    </LinearGradient>
  );
};

export default SplashScreen;
