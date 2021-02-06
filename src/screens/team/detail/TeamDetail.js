import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

import {appStyles, colors} from '../../../assets/styles/appstyles';
import styles from './styles';

const TeamDetailScreen = (props) => {
  const {navigation, route} = props;
  const {item} = route.params;

  return (
    <ScrollView contentContainerStyle={[styles.root]}>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity
        style={[styles.goBackButton]}
        onPress={() => navigation.navigate('Team', {screen: 'List'})}>
        <Text style={[appStyles.boldText, styles.goBackText]}>
          &#x21A9; times
        </Text>
      </TouchableOpacity>
      <Text style={[appStyles.semiBoldText, styles.title]}>detalhes</Text>
      <View style={[styles.container]}>
        <Text style={[appStyles.semiBoldText, styles.name]}>{item.name}</Text>
        <Text style={[appStyles.lightText, styles.nickname]}>
          {item.nickname}
        </Text>
        <View style={[styles.info]}>
          <View style={[styles.item]}>
            <Text style={[appStyles.regularText, styles.itemText]}>
              Jogadas
            </Text>
            <Text style={[appStyles.semiBoldText, styles.itemResult]}>
              {item.played}
            </Text>
          </View>
          <View style={[styles.item]}>
            <Text style={[appStyles.regularText, styles.itemText]}>
              Vitórias
            </Text>
            <Text style={[appStyles.semiBoldText, styles.itemResult]}>
              {item.wins}
            </Text>
          </View>
          <View style={[styles.item]}>
            <Text style={[appStyles.regularText, styles.itemText]}>
              Derrotas
            </Text>
            <Text style={[appStyles.semiBoldText, styles.itemResult]}>
              {item.played - item.wins}
            </Text>
          </View>
          {item.played > 0 && (
            <>
              <View style={[styles.item, {marginBottom: 8}]}>
                <Text style={[appStyles.regularText, styles.itemText]}>
                  Aproveitamento
                </Text>
              </View>
              <ProgressCircle
                percent={Number(item.winrate)}
                radius={50}
                borderWidth={8}
                color={colors.primary}
                shadowColor="#DDD"
                bgColor="#FFF">
                <Text style={[appStyles.boldText]}>{item.winrate}%</Text>
              </ProgressCircle>
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default TeamDetailScreen;
