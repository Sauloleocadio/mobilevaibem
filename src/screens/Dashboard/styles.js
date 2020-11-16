import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 50px;
  margin-bottom: 80px;
`;

export const ContainerList = styled.View``;

export const List = styled.FlatList`
  margin-top: 2px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 10px;
`;

export const Logo = styled.Image`
  height: 60px;
  width: 60%;
`;

export const AreaInput = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  width: 60%;
  background: #00cdcf;
`;

export const ButtonSearch = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  height: 40px;
  width: 40px;
  background: #00cdcf;
  margin-left: 20px;
`;

export const InputSearch = styled.TextInput.attrs({
  placeholderTextColor: '#FFFFFF',
})`
  flex: 1;
  font-size: 12px;
  margin-left: 10px;
  color: #8b25c4;
`;

export const ButtonInputSearch = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  height: 50px;
  width: 50px;
  background: #8b25c4;
`;

export const ButtonAdd = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  height: 40px;
  width: 40px;
  background: #00cdcf;
`;
