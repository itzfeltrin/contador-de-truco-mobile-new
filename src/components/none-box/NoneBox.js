import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import {appStyles} from '../../assets/styles/appstyles';

const NoneBox = (props) => {
  const {text} = props;

  return (
    <View style={styles.box}>
      <Text style={[styles.text, appStyles.regularText]}>{text}</Text>
    </View>
  );
};

export default NoneBox;
