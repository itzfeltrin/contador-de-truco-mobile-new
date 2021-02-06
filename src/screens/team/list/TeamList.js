import React, {useState, useCallback} from 'react';
import {
  StatusBar,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {TeamItem} from '../../../components/team/item';
import {MyIcon} from '../../../components/my-icon';

import {useRecoilState} from 'recoil';
import {teamState} from '../../../recoil/atoms';
import axios from 'axios';

import {appStyles, colors} from '../../../assets/styles/appstyles';
import styles from './styles';

const TeamListScreen = (props) => {
  const {navigation} = props;

  const [teams, setTeams] = useRecoilState(teamState);
  const [refreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    try {
      let {data} = await axios.get('team');
      setTeams(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <View style={[styles.root]}>
      <StatusBar barStyle="dark-content" />
      <MyIcon
        name="espadao"
        style={[styles.backgroundSVG]}
        fill={colors.primaryLighter}
      />
      <View style={styles.container}>
        <Text style={[appStyles.semiBoldText, styles.title]}>times</Text>
        <TouchableOpacity
          style={styles.buttonBox}
          onPress={() => navigation.navigate('Team', {screen: 'Edit'})}>
          <Text style={[appStyles.regularText, styles.buttonText]}>
            + adicionar novo
          </Text>
        </TouchableOpacity>
        <FlatList
          data={teams}
          renderItem={({item}) => (
            <TeamItem navigation={navigation} item={item} />
          )}
          keyExtractor={(item) => item._id.toString()}
          style={[styles.list]}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </View>
  );
};

export default TeamListScreen;
