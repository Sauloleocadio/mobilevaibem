import React, {useCallback, useEffect, useState} from 'react';
import {Alert, StyleSheet, Keyboard, LogBox} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigationFocus} from 'react-navigation';

import api from '../../services/api';
import Background from '../../components/Background';
import Loading from '../../components/Loading';

import Listestablishment from '../../components/Listestablishment';

import {
  Container,
  ContainerList,
  Header,
  Logo,
  AreaInput,
  ButtonSearch,
  InputSearch,
  ButtonInputSearch,
  ButtonAdd,
  List,
} from './styles';

LogBox.ignoreLogs(['Unrecognized WebSocket']);

function Dashboard({navigation, isFocused}) {
  const [loading, setLoading] = useState(true);
  const [establishment, setEstablishment] = useState([]);
  const [showsearch, setShowsearch] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    loadDatabase();
    return () => {
      loadDatabase();
    };
  }, [loadDatabase, isFocused]);

  const loadDatabase = useCallback(async () => {
    try {
      await api
        .get('establishment')
        .then(function (response) {
          console.log(response.data);
          setEstablishment(response.data);
          setLoading(false);
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
              'Deseja conectar novamente?',
              [
                {
                  text: 'Sim',
                  onPress: () => loadDatabase(),
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
        'Deseja conectar novamente?',
        [
          {
            text: 'Sim',
            onPress: () => loadDatabase(),
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
  }, []);

  const keyExtractor = (item, index) => String(index);
  const renderItem = ({item}) => (
    <Listestablishment
      data={item}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      handleRouting={handleRouting}
    />
  );

  function handleShowSearch(show) {
    if (show) {
      setShowsearch(show);
    } else {
      setSearch('');
      loadDatabase();
      setShowsearch(show);
    }
  }

  function handleEdit(data) {
    navigation.navigate('Establishment', {
      id: data._id,
      description: data.description,
      place: data.place,
      hour: data.hour,
      telephone: data.telephone,
    });
  }

  function handleRouting(data) {
    navigation.navigate('Establishmentlocation', {
      place: data.place,
    });
  }

  function handleDelete(data) {
    Alert.alert(
      'Deseja realmente apagar esse registro?',
      `Estabelecimento: ${data.description}`,
      [
        {
          text: 'Não',
          onPress: () => {},
          style: 'cancel',
        },
        {text: 'Sim', onPress: () => answerHandleDelete(data)},
      ],
      {cancelable: false},
    );
  }

  async function answerHandleDelete(data) {
    setLoading(true);
    console.log(data._id);
    try {
      await api
        .delete('establishment', {
          data: {
            id: data._id,
          },
        })
        .then(function (response) {
          console.log(response.data.message);
          let newfilter = establishment.filter(
            (array) => array._id !== data._id,
          );
          setEstablishment([...newfilter]);
          setLoading(false);
          Alert.alert(response.data.message);
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
              'Deseja deletar novamente?',
              [
                {
                  text: 'Sim',
                  onPress: () => handleDelete(),
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
        'Deseja deletar novamente?',
        [
          {
            text: 'Sim',
            onPress: () => handleDelete(),
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

  async function handleSearch() {
    if (search.length === 0) {
      return false;
    }
    setLoading(true);
    Keyboard.dismiss();
    try {
      await api
        .get('establishmentfilterplace', {
          params: {
            place: search,
          },
        })
        .then(function (response) {
          console.log(response.data.length);
          setEstablishment(response.data);
          setLoading(false);

          if (response.data.length === 0) {
            Alert.alert('Nenhum estabelecimento encontrado com a localização.');
          }
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
              'Deseja pesquisar novamente?',
              [
                {
                  text: 'Sim',
                  onPress: () => handleSearch(),
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
        'Deseja pesquisar novamente?',
        [
          {
            text: 'Sim',
            onPress: () => handleSearch(),
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

  return (
    <Background>
      <Container>
        <Header>
          {showsearch ? (
            <>
              <AreaInput>
                <InputSearch
                  textAlignVertical="center"
                  placeholder="Pesquisar localização"
                  autoCorrect={true}
                  value={search}
                  onChangeText={(text) => setSearch(text)}
                  onSubmitEditing={() => handleSearch()}
                />
                <ButtonInputSearch onPress={() => handleSearch()}>
                  <Icon name="search" size={25} color="#FFFFFF" />
                </ButtonInputSearch>
              </AreaInput>
              <ButtonSearch onPress={() => handleShowSearch(false)}>
                <Icon name="clear" size={25} color="#FFFFFF" />
              </ButtonSearch>
            </>
          ) : (
            <>
              <Logo
                source={require('../../assets/logo.png')}
                style={styles.stretch}
              />
              <ButtonSearch onPress={() => handleShowSearch(true)}>
                <Icon name="search" size={25} color="#FFFFFF" />
              </ButtonSearch>
            </>
          )}
          <ButtonAdd onPress={() => navigation.navigate('Establishment')}>
            <Icon name="add" size={25} color="#FFFFFF" />
          </ButtonAdd>
        </Header>
        {loading ? (
          <Loading />
        ) : (
          <ContainerList>
            <List
              data={establishment}
              showsVerticalScrollIndicator={false}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
            />
          </ContainerList>
        )}
      </Container>
    </Background>
  );
}

const styles = StyleSheet.create({
  stretch: {
    resizeMode: 'stretch',
  },
});

Dashboard.navigationOptions = {
  headerShown: false,
  headerBackTitleVisible: false,
};

export default withNavigationFocus(Dashboard);
