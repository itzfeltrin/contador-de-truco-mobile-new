import React from 'react';
import {StatusBar, View, Text, TouchableOpacity, FlatList} from 'react-native';
import {MyIcon} from '../../components/my-icon';

import {appStyles, colors} from '../../assets/styles/appstyles';
import styles from './styles';

import {data} from '../../data/menus';

const HomeScreen = (props) => {
  const {navigation} = props;

  const MenuItem = (props) => {
    const {item} = props;

    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(item.route)}>
        <MyIcon
          name={item.ico}
          width={96}
          height={96}
          fill={colors.primaryLighter}
          style={styles.svg}
        />
        <Text style={[styles.buttonText, appStyles.regularText]}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={[styles.root]}>
        <Text style={[styles.title, appStyles.semiBoldText]}>
          contador de truco
        </Text>
        <FlatList
          data={data.filter((item) => item.route !== 'Home')}
          renderItem={(props) => <MenuItem {...props} />}
          keyExtractor={(_, index) => index.toString()}
          style={styles.buttonGroup}
        />
      </View>
    </>
  );
};

export default HomeScreen;
