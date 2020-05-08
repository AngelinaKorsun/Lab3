import styled from 'styled-components';
export {Error} from '../../constants/styles';

export const TextInputStyled = styled.TextInput`
  flex: ${props => props.flex || 'none'};
  height: 60px;
  font-size: 20px;
  min-width: ${props => props.minWidth || '350'}px;
`;
