import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNetInfo} from '@react-native-community/netinfo';

import {
  Container,
  ModalNetInfo,
  ContainerModalNetInfo,
  TextInfo,
  ButtonInfo,
  TextCloseInfo,
} from './styles';

export default function NetworkInformation() {
  const netInfo = useNetInfo();
  const [showmodal, setShowmodal] = useState(false);
  const [messageConnection, setMessageConnection] = useState('Connected');

  useEffect(() => {
    if (netInfo.isConnected) {
      setShowmodal(false);
    } else {
      setMessageConnection('Sem conexão com a internet =(');
      setShowmodal(true);
    }
  }, [netInfo]);

  function closedModal() {
    setShowmodal(false);
  }

  return (
    <Container>
      {showmodal ? (
        <ModalNetInfo isVisible={showmodal}>
          <ContainerModalNetInfo>
            <Icon name="wifi" size={40} color="#FFF" />
            <TextInfo>{messageConnection}</TextInfo>
            <ButtonInfo onPress={closedModal}>
              <TextCloseInfo>Fechar</TextCloseInfo>
            </ButtonInfo>
          </ContainerModalNetInfo>
        </ModalNetInfo>
      ) : (
        <></>
      )}
    </Container>
  );
}
