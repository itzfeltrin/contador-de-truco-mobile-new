import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from '../components/drawer';

// home
import {HomeScreen} from '../screens/home';
// game
import {GameScreen} from '../screens/game/main';
import {NewGameScreen} from '../screens/game/new';
// history
import {HistoryScreen} from '../screens/history';
// ranking
import {RankingScreen} from '../screens/ranking';
// team
import {TeamListScreen} from '../screens/team/list';
import {TeamDetailScreen} from '../screens/team/detail';
import {TeamEditScreen} from '../screens/team/edit';

const GameStack = createStackNavigator();
const GameScreenStack = () => (
  <GameStack.Navigator headerMode={false}>
    <GameStack.Screen name="NewGame" component={NewGameScreen} />
    <GameStack.Screen name="Game" component={GameScreen} />
  </GameStack.Navigator>
);

const TeamStack = createStackNavigator();
const TeamScreenStack = () => (
  <TeamStack.Navigator headerMode={false}>
    <TeamStack.Screen name="List" component={TeamListScreen} />
    <TeamStack.Screen name="Detail" component={TeamDetailScreen} />
    <TeamStack.Screen name="Edit" component={TeamEditScreen} />
  </TeamStack.Navigator>
);

const Drawer = createDrawerNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Game"
          component={GameScreenStack}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="History"
          component={HistoryScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Ranking"
          component={RankingScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Team"
          component={TeamScreenStack}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
