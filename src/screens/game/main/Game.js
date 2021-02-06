import React, {useState, useEffect} from 'react';
import {StatusBar, View, Text, TouchableOpacity, Alert} from 'react-native';
import {TeamScore} from '../../../components/team/score';
import Toast from 'react-native-simple-toast';

import axios from 'axios';

import {appStyles} from '../../../assets/styles/appstyles';
import styles from './styles';

const GameScreen = (props) => {
  const {route} = props;
  const teams = route?.params?.teams;

  const [teamsData, setTeamsData] = useState({});

  useEffect(() => {
    setTeamsData({
      teamOne: {
        ...teams?.teamOne,
        score: 0,
      },
      teamTwo: {
        ...teams?.teamTwo,
        score: 0,
      },
    });
  }, [teams]);

  // less and plus buttons
  const handleClickButton = (team, action) => {
    switch (action) {
      case 'increase':
        setTeamsData((teamsData) => ({
          ...teamsData,
          [team]: {
            ...teamsData[team],
            score: teamsData[team].score + 1,
          },
        }));
        break;
      case 'decrease':
        setTeamsData((teamsData) => ({
          ...teamsData,
          [team]: {
            ...teamsData[team],
            score:
              teamsData[team].score > 0
                ? teamsData[team].score - 1
                : teamsData[team].score,
          },
        }));
        break;
      default:
        break;
    }
  };

  // reset scores
  const handleReset = () => {
    setTeamsData((teamsData) => ({
      teamOne: {
        ...teamsData.teamOne,
        score: 0,
      },
      teamTwo: {
        ...teamsData.teamTwo,
        score: 0,
      },
    }));
  };

  // handle finish button clicked
  const handleClickFinish = () => {
    if (teamsData.teamOne.score === teamsData.teamTwo.score) {
      Alert.alert(
        'finalizar partida',
        'deseja mesmo finalizar a partida sem um vencedor? essa partida não será computada',
        [
          {
            text: 'não',
            onPress: () => {},
            style: 'cancel',
          },
          {
            text: 'sim',
            onPress: handleReset,
          },
        ],
        {cancelable: true},
      );
    } else {
      Alert.alert(
        'finalizar partida',
        `deseja finalizar com esse placar: ${teamsData?.teamOne?.score} - ${teamsData?.teamTwo?.score}?`,
        [
          {
            text: 'não',
            onPress: () => {},
            style: 'cancel',
          },
          {
            text: 'sim',
            onPress: handleFinish,
          },
        ],
        {cancelable: true},
      );
    }
  };

  // finishing game (actually submitting it)
  const handleFinish = () => {
    let obj = {
      teamOneID: teamsData?.teamOne?.['_id'],
      teamTwoID: teamsData?.teamTwo?.['_id'],
      teamOneScore: teamsData?.teamOne?.score,
      teamTwoScore: teamsData?.teamTwo?.score,
    };

    axios
      .post('game', obj)
      .then(() => {
        Toast.show(
          `Partida finalizada, parabéns "${
            teamsData?.teamOne?.score > teamsData?.teamTwo?.score
              ? teamsData?.teamOne?.nickname
              : teamsData?.teamTwo?.nickname
          }"`,
        );
      })
      .catch(() => {
        Toast.show('Algo deu errado, tente novamente');
      });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View contentInsetAdjustmentBehavior="automatic" style={[styles.root]}>
        <View style={styles.container}>
          <Text style={[styles.title, appStyles.semiBoldText]}>
            {teamsData?.teamOne?.nickname}
          </Text>
          <Text style={[styles.title, appStyles.lightText]}>x</Text>
          <Text style={[styles.title, appStyles.semiBoldText]}>
            {teamsData?.teamTwo?.nickname}
          </Text>
          <View style={styles.scoreGroup}>
            <TeamScore
              item={teamsData?.teamOne}
              name="teamOne"
              handleClickButton={handleClickButton}
              marginRight={true}
            />
            <TeamScore
              item={teamsData?.teamTwo}
              name="teamTwo"
              handleClickButton={handleClickButton}
              marginLeft={true}
            />
          </View>
          <TouchableOpacity
            style={[styles.restartButton]}
            onPress={handleReset}>
            <Text
              style={[{fontSize: 16, color: '#000'}, appStyles.regularText]}>
              zerar
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.buttonBox]}
          onPress={handleClickFinish}>
          <Text style={[styles.buttonText, appStyles.regularText]}>
            finalizar
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default GameScreen;
