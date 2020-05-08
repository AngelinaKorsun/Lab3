import styled from 'styled-components';

export const ButtonContainer = styled.TouchableOpacity`
  flex: ${props => props.flex || 'none'};
  width: auto;
  height: auto;
  padding: 12px;
  border-radius: 10px;
  background-color: ${props => props.backgroundColor || 'white'};
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: ${props => props.textColor || 'black'};
  text-align: center;
`;
