import React, {useCallback, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {MyIcon} from '../my-icon';

import {useRecoilState} from 'recoil';
import {teamState} from '../../recoil/atoms';
import axios from 'axios';

import {appStyles} from '../../assets/styles/appstyles';
import styles from './styles';

import {data} from '../../data/menus';

const DrawerContent = (props) => {
  const {navigation} = props;

  const [_, setTeams] = useRecoilState(teamState);

  const handleGetTeams = useCallback(async () => {
    try {
      let {data} = (await axios.get('team')) || [];
      data = data.map((item) => {
        let obj = {...item};
        obj.winrate = ((obj.wins / obj.played) * 100).toFixed(2);
        return obj;
      });
      setTeams(data);
    } catch (err) {
      console.log(err);
    }
  }, [setTeams]);

  useEffect(() => {
    handleGetTeams();
  }, [handleGetTeams]);

  const MenuItem = (props) => {
    const {item} = props;

    return (
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => {
          navigation.navigate(item.route);
        }}>
        <MyIcon name={item.ico} width={24} height={24} fill="#106618" />
        <Text style={styles.drawerItemLabel}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.drawerSection}>
        <FlatList
          data={data}
          renderItem={(props) => <MenuItem {...props} />}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
      <Text style={[styles.label, appStyles.regularText]}>
        por pedro feltrin e bolívar braga
      </Text>
    </View>
  );
};

export default DrawerContent;
