import React from 'react';
import {View, Text, FlatList} from 'react-native';

import styles from './styles';
import {appStyles} from '../../assets/styles/appstyles';

const ErrorBox = (props) => {
  const {items} = props;

  return (
    <View style={styles.errorBox}>
      <Text style={[styles.errorItem, appStyles.semiBoldText]}>
        algo deu errado, revise os seguintes campos.
      </Text>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <Text style={[styles.errorItem, appStyles.regularText]}>{item}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ErrorBox;
