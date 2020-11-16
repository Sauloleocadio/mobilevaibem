import React from 'react';

import {
  Content,
  ContainerInfo,
  TextTitle,
  TextInfo,
  Footer,
  ButtonDelete,
  ButtonEdit,
  ButtonRoute,
  TextRoute,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

function Listestablishment({data, handleDelete, handleEdit, handleRouting}) {
  return (
    <Content>
      <ContainerInfo>
        <TextTitle>Estabelecimento:</TextTitle>
        <TextInfo>{data.description}</TextInfo>
      </ContainerInfo>
      <ContainerInfo>
        <TextTitle>Endereço:</TextTitle>
        <TextInfo>{data.place}</TextInfo>
      </ContainerInfo>
      <ContainerInfo>
        <TextTitle>Horário de funcionamento:</TextTitle>
        <TextInfo>{data.hour}</TextInfo>
      </ContainerInfo>
      <ContainerInfo>
        <TextTitle>Telefone:</TextTitle>
        <TextInfo>{data.telephone}</TextInfo>
      </ContainerInfo>
      <Footer>
        <ButtonRoute onPress={() => handleRouting(data)}>
          <TextRoute>Ver localização</TextRoute>
        </ButtonRoute>
        <ButtonEdit onPress={() => handleEdit(data)}>
          <Icon name="edit" size={20} color="#FFFFFF" />
        </ButtonEdit>
        <ButtonDelete onPress={() => handleDelete(data)}>
          <Icon name="delete" size={20} color="#FFFFFF" />
        </ButtonDelete>
      </Footer>
    </Content>
  );
}

export default Listestablishment;
