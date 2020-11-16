import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 14px;
`;

export const Form = styled.KeyboardAvoidingView``;

export const AreaInput = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 100%;
  background: rgba(0, 0, 0, 0.09);
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#8b25c4',
})`
  flex: 1;
  font-size: 16px;
  margin-left: 10px;
  color: #8b25c4;
`;

export const ButtonForm = styled(Button)`
  margin-top: 10px;
`;
