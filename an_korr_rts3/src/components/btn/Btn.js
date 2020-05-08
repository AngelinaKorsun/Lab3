import React from 'react';
import {ButtonContainer, ButtonText} from './styles';

const Btn = ({flex, onPress, textColor, title, backgroundColor}) => (
  <ButtonContainer
    flex={flex}
    onPress={onPress}
    backgroundColor={backgroundColor}>
    <ButtonText textColor={textColor}>{title}</ButtonText>
  </ButtonContainer>
);
export default Btn;
