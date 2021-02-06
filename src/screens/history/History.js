import React, {useState, useEffect, useCallback} from 'react';
import {
  StatusBar,
  View,
  Text,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {GameItem} from '../../components/game/item';
import DateTimePicker from '@react-native-community/datetimepicker';

import axios from 'axios';
import {brDate} from '../../util/helpers';

import {appStyles} from '../../assets/styles/appstyles';
import styles from './styles';

const HistoryScreen = (props) => {
  const {route} = props;
  const cache = route?.params?.cache;

  const [refreshing] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const [gameList, setGameList] = useState([]);
  const [teamList, setTeamList] = useState([]);

  // get games
  const handleGetGame = useCallback(() => {
    let stringDate = JSON.stringify(date).replace(/"/g, '');
    axios
      .get(`game/${stringDate}`)
      .then((res) => {
        setGameList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cache, date]);

  // get teams
  const handleGetTeam = useCallback(() => {
    axios
      .get('team')
      .then((res) => {
        setTeamList(res.data);
      })
      .catch(() => {
        console.log(err);
      });
  }, [cache]);

  useEffect(() => {
    handleGetGame();
    handleGetTeam();
  }, [handleGetGame, handleGetTeam]);

  const onRefresh = useCallback(() => {
    axios
      .get('game')
      .then((res) => {
        setGameList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View contentInsetAdjustmentBehavior="automatic" style={[styles.root]}>
      {open && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={(_, date) => {
            setOpen(false);
            if (date) setDate(date);
          }}
        />
      )}
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={[styles.title, appStyles.semiBoldText]}>histórico</Text>
        <View
          style={[
            appStyles.row,
            appStyles.alignCenter,
            appStyles.justifyBetween,
            styles.dateBox,
          ]}>
          <Text style={[appStyles.regularText, appStyles.flex1]}>
            {brDate(date)}
          </Text>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={[appStyles.semiBoldText]}>escolha uma data</Text>
          </TouchableOpacity>
        </View>
        {gameList.length > 0 ? (
          <FlatList
            data={gameList}
            renderItem={({item}) => (
              <GameItem
                item={item}
                teamOne={teamList.find((el) => el._id === item.teamOneID)}
                teamTwo={teamList.find((el) => el._id === item.teamTwoID)}
              />
            )}
            keyExtractor={(item) => item['_id'].toString()}
            style={styles.list}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        ) : (
          <View style={styles.noneBox}>
            <Text style={[appStyles.regularText, styles.noneText]}>
              nenhuma partida foi jogada no dia selecionado
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default HistoryScreen;
