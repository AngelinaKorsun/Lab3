import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #e0ffff;
`;
export const Error = styled.Text`
  color: red;
`;

export const Title = styled.Text`
  padding: ${props => props.padding || '0'}px;
  font-size: ${props => props.fontSize || '20'}px;
  font-weight: 500;
  text-align: center;
  color: #4682b4;
  margin-top: ${props => props.marginTop || '0'}px;
`;
export const XCenter = styled.View`
  flex: 1;
  align-items: center;
`;
