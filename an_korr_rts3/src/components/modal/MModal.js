import React from 'react';
import {Dimensions, Modal, Text} from 'react-native';
import {Container, ModalStyle, BtnWrap, ModalTextStyled} from './styles';
import Btn from '../btn/Btn';

const MModal = ({text, showModal, setShowModal}) => {
  const {width, height} = Dimensions.get('window');

  return (
    <Container>
      <Modal transparent={true} animationType="fade" visible={showModal}>
        <Container backgroundColor="rgba(15, 15, 15, 0.425)">
          <ModalStyle width={width * 0.8} height={height * 0.15}>
            <ModalTextStyled>
              <Text>{text}</Text>
            </ModalTextStyled>

            <BtnWrap marginTop={'auto'} marginRight={80} marginLeft={80}>
              <Btn
                backgroundColor="#55b2d4"
                onPress={() => setShowModal(false)}
                textColor="white"
                title="Повернутися"
              />
            </BtnWrap>
          </ModalStyle>
        </Container>
      </Modal>
    </Container>
  );
};

export default MModal;
