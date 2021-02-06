import React, {useState, useEffect, useCallback} from 'react';
import {StatusBar, View, Text, FlatList, RefreshControl} from 'react-native';
import {TeamItem} from '../../components/team/item';

import axios from 'axios';

import {appStyles} from '../../assets/styles/appstyles';
import styles from './styles';

const RankingScreen = (props) => {
  const {navigation, route} = props;
  const cache = route?.params?.cache;

  const [teamList, setTeamList] = useState([]);
  const [refreshing] = useState(false);

  useEffect(() => {
    axios
      .get('team/ranking')
      .then((res) => {
        setTeamList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cache]);

  const onRefresh = useCallback(() => {
    axios
      .get('team/ranking')
      .then((res) => {
        setTeamList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View contentInsetAdjustmentBehavior="automatic" style={[styles.root]}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={[styles.title, appStyles.semiBoldText]}>ranking</Text>
        <FlatList
          data={teamList}
          renderItem={({item}) => (
            <TeamItem navigation={navigation} item={item} />
          )}
          keyExtractor={(item) => item['_id'].toString()}
          style={styles.list}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </View>
  );
};

export default RankingScreen;
