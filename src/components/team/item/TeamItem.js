import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {MyIcon} from '../../my-icon';

import {appStyles, colors} from '../../../assets/styles/appstyles';
import styles from './styles';

const TeamItem = (props) => {
  const {navigation, item} = props;

  return (
    <View style={[styles.item, appStyles.row, appStyles.alignCenter]}>
      <View style={[appStyles.flex1]}>
        <Text style={[styles.name, appStyles.semiBoldText]}>{item.name}</Text>
        <Text style={[styles.nickname, appStyles.regularText]}>
          {item.nickname}
        </Text>
      </View>
      <View>
        <Text style={[appStyles.regularText, {fontSize: 14}]}>
          vitórias: <Text style={appStyles.boldText}>{item.wins}</Text>
        </Text>
        {item.played > 0 && (
          <Text style={[appStyles.regularText, {fontSize: 14}]}>
            aprov.: <Text style={appStyles.boldText}>{item.winrate}%</Text>
          </Text>
        )}
      </View>
      <TouchableOpacity
        style={[styles.detailButton]}
        onPress={() =>
          navigation.navigate('Team', {screen: 'Detail', params: {item: item}})
        }>
        <MyIcon
          name="right-arrow"
          width={24}
          height={24}
          fill={colors.primary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TeamItem;
