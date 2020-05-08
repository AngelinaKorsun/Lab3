import styled from 'styled-components';

export const ButtonGroup = styled.View`
  margin-top: ${props => props.marginTop || '0'}px;
  margin-bottom: ${props => props.marginBottom || '0'}px;
  flex-direction: row;
  justify-content: center;
  margin-right: 20px;
  position: absolute;
  bottom: 0;
  margin-left: 20px;
`;
