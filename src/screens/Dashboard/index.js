import React, {useEffect} from 'react';
import {View, Text, Alert} from 'react-native';

import api from '../../services/api';

// import { Container } from './styles';

function Dashboard() {
  useEffect(() => {
    let isCancelled = false;
    async function loadDatabase() {
      try {
        await api
          .get('establishment')
          .then(function (response) {
            if (!isCancelled) {
              console.log('deu bom');
              console.log(response.data);
            }
          })
          .catch(function (error) {
            const errorStatus = error.response.status;
            if (errorStatus === 400) {
              Alert.alert('Não foi possivel achar essa requisição.');
            } else {
              Alert.alert('Usuário sem conexão, verifique sua internet!');
            }
            return false;
          });
      } catch (e) {
        Alert.alert('Usuário sem conexão ,verifique sua internet');
        console.log(e);
      }
    }

    loadDatabase();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <View>
      <Text>Rodando</Text>
    </View>
  );
}

export default Dashboard;
