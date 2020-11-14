import styled from 'styled-components/native';
import Modal from 'react-native-modal';

export const Container = styled.View``;

export const ModalNetInfo = styled(Modal)``;

export const ContainerModalNetInfo = styled.View`
  width: 100%;
  height: 140px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #22d5d6;
`;

export const TextInfo = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const ButtonInfo = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
`;

export const TextCloseInfo = styled.Text`
  color: #22d5d6;
  width: 100px;
  text-align: center;
  font-weight: bold;
`;
