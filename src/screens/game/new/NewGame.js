import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {ErrorBox} from '../../../components/error-box';
import Icon from 'react-native-vector-icons/MaterialIcons';

import axios from 'axios';
import {checkErrors} from '../../../util/helpers';
import {translate} from '../../../util/translation';

import {appStyles} from '../../../assets/styles/appstyles';
import styles from './styles';

const NewGameScreen = (props) => {
  const {navigation} = props;

  const [teamList, setTeamList] = useState([]);
  const [errors, setErrors] = useState([]);
  const [form, setForm] = useState({
    teamOne: [],
    teamTwo: [],
  });

  useEffect(() => {
    axios
      .get('team')
      .then((res) => {
        setTeamList(res.data);
      })
      .catch(() => {
        Toast.show('Algo deu errado :c');
      });
  }, []);

  const handleSubmit = () => {
    let keys = checkErrors(form);
    setErrors(keys);
    if (!keys.length > 0) {
      navigation.navigate('Game', {
        teams: {
          teamOne: teamList.find((el) => el?.['_id'] === form.teamOne?.[0]),
          teamTwo: teamList.find((el) => el?.['_id'] === form.teamTwo?.[0]),
        },
      });
      setForm({
        teamOne: [],
        teamTwo: [],
      });
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.root}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={[styles.container]}>
          <Text style={[styles.title, appStyles.semiBoldText]}>
            selecione dois times
          </Text>
          <View style={styles.selectContainer}>
            <View style={styles.selectBox}>
              <Text style={[styles.selectTitle, appStyles.semiBoldText]}>
                time um
              </Text>
              <SectionedMultiSelect
                styles={{
                  selectToggle: styles.select,
                  selectToggleText: appStyles.regularText,
                  searchTextInput: appStyles.regularText,
                  item: styles.item,
                  selectedItem: styles.selectedItem,
                  button: styles.confirmButtonContainer,
                  chipContainer: styles.chipContainer,
                  chipText: styles.chipText,
                  chipIcon: styles.chipText,
                }}
                items={teamList.filter(
                  (el) => el?.['_id'] !== form.teamTwo?.[0],
                )}
                IconRenderer={Icon}
                uniqueKey="_id"
                displayKey="nickname"
                selectText="selecione um time"
                selectedText="time selecionado"
                searchPlaceholderText="procure times"
                confirmText="confirmar"
                selectedItems={form.teamOne}
                onSelectedItemsChange={(value) =>
                  setForm((form) => ({...form, teamOne: value}))
                }
                showCancelButton={false}
                hideConfirm={true}
                itemFontFamily={{fontFamily: 'Poppins-Regular'}}
                confirmFontFamily={{fontFamily: 'Poppins-Regular'}}
                single={true}
              />
            </View>
            <View style={styles.selectBox}>
              <Text style={[styles.selectTitle, appStyles.semiBoldText]}>
                time dois
              </Text>
              <SectionedMultiSelect
                styles={{
                  selectToggle: styles.select,
                  selectToggleText: appStyles.regularText,
                  searchTextInput: appStyles.regularText,
                  item: styles.item,
                  selectedItem: styles.selectedItem,
                  button: styles.confirmButtonContainer,
                  chipContainer: styles.chipContainer,
                  chipText: styles.chipText,
                  chipIcon: styles.chipText,
                }}
                items={teamList.filter(
                  (el) => el?.['_id'] !== form.teamOne?.[0],
                )}
                IconRenderer={Icon}
                uniqueKey="_id"
                displayKey="nickname"
                selectText="selecione um time"
                selectedText="time selecionado"
                searchPlaceholderText="procure times"
                confirmText="confirmar"
                selectedItems={form.teamTwo}
                onSelectedItemsChange={(value) =>
                  setForm((form) => ({...form, teamTwo: value}))
                }
                showCancelButton={false}
                hideConfirm={true}
                itemFontFamily={{fontFamily: 'Poppins-Regular'}}
                confirmFontFamily={{fontFamily: 'Poppins-Regular'}}
                single={true}
              />
            </View>
          </View>
        </ScrollView>
        <View style={{marginHorizontal: 16}}>
          {errors.length > 0 && (
            <ErrorBox items={errors.map((el) => translate[el])} />
          )}
          <TouchableOpacity style={[styles.buttonBox]} onPress={handleSubmit}>
            <Text style={[styles.buttonText, appStyles.regularText]}>
              começar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default NewGameScreen;
