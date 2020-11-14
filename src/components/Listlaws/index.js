import React from 'react';

import {
  Content,
  Header,
  TextHeader,
  Body,
  TextInfoBody,
  TextContentBody,
  Footer,
  TextFooter,
} from './styles';

function Listlaws({data, hanleDetailsLaws}) {
  return (
    <Content onPress={() => hanleDetailsLaws(data)}>
      <Header>
        <TextHeader>
          {data.lei_tipo}: {data.lei_numero}/{data.lei_exercicio}
        </TextHeader>
      </Header>
      <Body>
        <TextInfoBody>Número: </TextInfoBody>
        <TextContentBody>{data.lei_numero}</TextContentBody>
      </Body>
      <Body>
        <TextInfoBody>Data: </TextInfoBody>
        <TextContentBody>{data.lei_data}</TextContentBody>
      </Body>
      <Footer>
        <TextFooter>{data.lei_resumo}</TextFooter>
      </Footer>
    </Content>
  );
}

export default Listlaws;
