import React, {useState, useRef, useEffect} from 'react';
import {Alert} from 'react-native';
import api from '../../services/api';

import Background from '../../components/Background';

import {Container, Form, ButtonForm, AreaInput, Input} from './styles';

function Establishment({navigation}) {
  const inputplace = useRef(null);
  const inputhour = useRef(null);
  const inputtelephone = useRef(null);

  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [place, setPlace] = useState('');
  const [hour, setHour] = useState('');
  const [telephone, setTelephone] = useState('');

  useEffect(() => {
    function loadEditDataNavigation() {
      const id = navigation.getParam('id');
      if (id !== undefined) {
        const descriptionnav = navigation.getParam('description');
        const placenav = navigation.getParam('place');
        const hournav = navigation.getParam('hour');
        const telephonenav = navigation.getParam('telephone').toString();

        setDescription(descriptionnav);
        setPlace(placenav);
        setHour(hournav);
        setTelephone(telephonenav);
      }
    }

    loadEditDataNavigation();

    return () => {
      loadEditDataNavigation();
    };
  }, [navigation]);

  async function handleSaveEstablishment() {
    if (description === '') {
      Alert.alert('Estabelecimento não informado');
      return false;
    }

    if (place === '') {
      Alert.alert('Localização não informada');
      return false;
    }

    if (hour === '') {
      Alert.alert('Horário não informado');
      return false;
    }

    if (telephone === '') {
      Alert.alert('Telefone não informado');
      return false;
    }

    setLoading(true);

    const id = navigation.getParam('id');

    if (id !== undefined) {
      try {
        await api
          .put(`establishment/${id}`, {
            description: description,
            place: place,
            hour: hour,
            telephone: telephone,
          })
          .then(function (response) {
            setLoading(false);
            Alert.alert('Registro alterado com sucesso!');
            navigation.navigate('Dashboard');
          })
          .catch(function (error) {
            const errorStatus = error.response.status;
            if (errorStatus === 400) {
              setLoading(false);
              Alert.alert('Não foi possivel achar essa requisição.');
            } else {
              setLoading(false);
              Alert.alert(
                'Usuário sem conexão, verifique sua internet!',
                'Deseja salvar novamente?',
                [
                  {
                    text: 'Sim',
                    onPress: () => handleSaveEstablishment(),
                  },
                  {
                    text: 'Aguardar',
                    onPress: () => {},
                    style: 'cancel',
                  },
                ],
                {cancelable: false},
              );
            }
            return false;
          });
      } catch (e) {
        setLoading(false);
        Alert.alert(
          'Usuário sem conexão, verifique sua internet!',
          'Deseja salvar novamente?',
          [
            {
              text: 'Sim',
              onPress: () => handleSaveEstablishment(),
            },
            {
              text: 'Aguardar',
              onPress: () => {},
              style: 'cancel',
            },
          ],
          {cancelable: false},
        );
      }
    } else {
      console.log('rodou');
      try {
        await api
          .post('establishment', {
            description: description,
            place: place,
            hour: hour,
            telephone: parseInt(telephone),
          })
          .then(function (response) {
            setLoading(false);
            Alert.alert('Registro salvo com sucesso!');
          })
          .catch(function (error) {
            const errorStatus = error.response.status;
            if (errorStatus === 400) {
              setLoading(false);
              Alert.alert('Não foi possivel achar essa requisição.');
            } else {
              setLoading(false);
              Alert.alert(
                'Usuário sem conexão, verifique sua internet!',
                'Deseja salvar novamente?',
                [
                  {
                    text: 'Sim',
                    onPress: () => handleSaveEstablishment(),
                  },
                  {
                    text: 'Aguardar',
                    onPress: () => {},
                    style: 'cancel',
                  },
                ],
                {cancelable: false},
              );
            }
            return false;
          });
      } catch (e) {
        setLoading(false);
        Alert.alert(
          'Usuário sem conexão, verifique sua internet!',
          'Deseja salvar novamente?',
          [
            {
              text: 'Sim',
              onPress: () => handleSaveEstablishment(),
            },
            {
              text: 'Aguardar',
              onPress: () => {},
              style: 'cancel',
            },
          ],
          {cancelable: false},
        );
      }
    }
  }

  return (
    <Background>
      <Container>
        <Form>
          <AreaInput>
            <Input
              textAlignVertical="center"
              placeholder="Estabelecimento"
              autoCorrect={true}
              value={description}
              onChangeText={(text) => setDescription(text)}
              onSubmitEditing={() => inputplace.current.focus()}
            />
          </AreaInput>
          <AreaInput>
            <Input
              ref={inputplace}
              textAlignVertical="center"
              placeholder="Localização"
              autoCorrect={true}
              value={place}
              onChangeText={(text) => setPlace(text)}
              onSubmitEditing={() => inputhour.current.focus()}
            />
          </AreaInput>
          <AreaInput>
            <Input
              ref={inputhour}
              textAlignVertical="center"
              placeholder="Horário de funcionamento"
              autoCorrect={true}
              value={hour}
              onChangeText={(text) => setHour(text)}
              onSubmitEditing={() => inputtelephone.current.focus()}
            />
          </AreaInput>
          <AreaInput>
            <Input
              keyboardType="numeric"
              ref={inputtelephone}
              textAlignVertical="center"
              placeholder="Telefone"
              autoCorrect={true}
              value={telephone}
              onChangeText={(text) => setTelephone(text)}
            />
          </AreaInput>
        </Form>
        <ButtonForm loading={loading} onPress={() => handleSaveEstablishment()}>
          Salvar
        </ButtonForm>
      </Container>
    </Background>
  );
}

Establishment.navigationOptions = ({navigation}) => ({
  title: 'Cadastro',
});

export default Establishment;
