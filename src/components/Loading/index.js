import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Container, TextContainer} from './styles';

function Loading() {
  return (
    <Container>
      <ActivityIndicator color="#8b25c4" size={60} />
      <TextContainer>Carregando informações...</TextContainer>
    </Container>
  );
}

export default Loading;
