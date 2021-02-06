import React from 'react';
import {Modal, View, Text} from 'react-native';
import LottieView from 'lottie-react-native';

// import loader from '../../assets/lottie/loading.lottie.json';
import loader from '../../assets/lottie/cards.json';

import styles from './styles';

const Loader = (props) => {
  const {loading} = props;

  return (
    <Modal visible={loading} transparent={true}>
      <View style={styles.loading}>
        <LottieView source={loader} loop autoPlay />
      </View>
    </Modal>
  );
};

export default Loader;
