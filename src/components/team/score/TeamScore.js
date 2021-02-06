import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';
import {appStyles} from '../../../assets/styles/appstyles';

const TeamScore = (props) => {
  const {item, name, handleClickButton, marginRight, marginLeft} = props;

  return (
    <View
      style={[
        styles.item,
        marginRight ? {marginRight: 8} : null,
        marginLeft ? {marginLeft: 8} : null,
      ]}>
      <Text style={[styles.nickname, appStyles.semiBoldText]}>
        {item?.nickname}
      </Text>
      <View style={[styles.nameBox]}>
        <Text style={[styles.name, appStyles.regularText]}>{item?.name}</Text>
      </View>
      <Text style={[styles.score, appStyles.boldText]}>{item?.score}</Text>
      <View style={[styles.buttonGroup]}>
        <TouchableOpacity
          style={[styles.buttonBox]}
          onPress={() => handleClickButton(name, 'increase')}>
          <Text style={[styles.buttonText, appStyles.boldText]}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonBox]}
          onPress={() => handleClickButton(name, 'decrease')}>
          <Text style={[styles.buttonText, appStyles.boldText]}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TeamScore;
