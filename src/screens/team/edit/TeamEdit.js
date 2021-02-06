import React, {useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Toast from 'react-native-simple-toast';
import {Formik} from 'formik';

import axios from 'axios';
import * as yup from 'yup';

import {appStyles} from '../../../assets/styles/appstyles';
import styles from './styles';

const TeamEditScreen = (props) => {
  const {navigation} = props;

  const [initial] = useState({
    name: '',
    nickname: '',
  });

  const schema = yup.object().shape({
    name: yup.string().required('Preencha o campo'),
    nickname: yup.string().required('Preencha o campo'),
  });

  const handleSubmit = useCallback((values) => {
    let obj = {...values};
    let message = 'Time adicionado com sucesso';

    axios
      .post('team', obj)
      .then(() => {
        navigation.navigate('Team', {screen: 'List'});
      })
      .catch(() => {
        message = 'Algo deu errado, tente novamente';
      })
      .finally(() => {
        Toast.show(message, Toast.LONG);
      });
  });

  let nicknameRef;

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <>
          <TouchableOpacity
            style={[styles.goBackButton]}
            onPress={() => navigation.navigate('Team')}>
            <Text style={[appStyles.boldText, styles.goBackText]}>
              &#x21A9; times
            </Text>
          </TouchableOpacity>
          <Text style={[styles.title, appStyles.semiBoldText]}>novo time</Text>
        </>
        <Formik
          initialValues={initial}
          enableReinitialize={true}
          validationSchema={schema}
          onSubmit={handleSubmit}>
          {({values, errors, handleChange, handleSubmit}) => (
            <>
              <View style={styles.inputBox}>
                <TextInput
                  placeholder="nome"
                  style={[appStyles.regularText, styles.inputText]}
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onSubmitEditing={() => nicknameRef.focus()}
                />
                {errors.name && (
                  <Text style={[appStyles.regularText, styles.errorText]}>
                    {errors.name}
                  </Text>
                )}
              </View>
              <View style={styles.inputBox}>
                <TextInput
                  placeholder="apelido"
                  style={[appStyles.regularText, styles.inputText]}
                  value={values.nickname}
                  onChangeText={handleChange('nickname')}
                  ref={(ref) => {
                    nicknameRef = ref;
                  }}
                  onSubmitEditing={() => handleSubmit(values)}
                />
                {errors.nickname && (
                  <Text style={[appStyles.regularText, styles.errorText]}>
                    {errors.nickname}
                  </Text>
                )}
              </View>
              <TouchableOpacity
                style={[styles.buttonBox]}
                onPress={handleSubmit}>
                <Text style={[styles.buttonText, appStyles.regularText]}>
                  confirmar
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default TeamEditScreen;
