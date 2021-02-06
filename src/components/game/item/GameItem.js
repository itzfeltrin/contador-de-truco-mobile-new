import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import {appStyles} from '../../../assets/styles/appstyles';

const GameItem = (props) => {
  const {item, teamOne, teamTwo} = props;

  return (
    <View style={[styles.item]}>
      <View style={[styles.team]}>
        <Text style={[styles.nickname, appStyles.regularText]}>
          {teamOne?.name}
        </Text>
      </View>
      <View style={[styles.scoreBox]}>
        <Text style={[styles.score, appStyles.boldText]}>
          {item?.teamOneScore}
        </Text>
        <Text style={[styles.divider, appStyles.regularText]}>X</Text>
        <Text style={[styles.score, appStyles.boldText]}>
          {item?.teamTwoScore}
        </Text>
      </View>
      <View style={[styles.team]}>
        <Text style={[styles.nickname, appStyles.regularText]}>
          {teamTwo?.name}
        </Text>
      </View>
    </View>
  );
};

export default GameItem;
