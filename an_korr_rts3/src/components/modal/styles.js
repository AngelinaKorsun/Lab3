import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ModalStyle = styled.View`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
`;

export const ModalTextStyled = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BtnWrap = styled.View`
  margin-top: ${props => props.marginTop || 'auto'};
  margin-right: ${props => props.marginRight || '0'}px;
  margin-left: ${props => props.marginLeft || '0'}px;
`;
