import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  borderWidth: 1,
})`
  padding: 0 0px 0 15px;
  height: 50px;
  background: #ffffff;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  border-color: #ccc;
`;

export const ButtonInput = styled.TouchableOpacity``;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#ccc',
})`
  flex: 1;
  font-size: 16px;
  margin-left: 10px;
  color: #363636;
`;
