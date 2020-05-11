import React, {useState} from 'react';
import {View} from 'react-native';
import RouteGroup from '../../components/route-group/RouteGroup';
import {Container, Title, XCenter} from './styles';
import Btn from '../../components/btn/Btn';
import Input from '../../components/input/Input';
import MModal from '../../components/modal/MModal';
import factorizationFermats from '../../utils/fermats/factorization';
import Toast from 'react-native-simple-toast';
import {factorizeValid} from '../../utils/validation';

const Lab31 = ({navigator}) => {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [factorized, setFactorized] = useState('');
  const [errors, setErrors] = useState({});

  const onPress = () => {
    const {isValid, errors} = factorizeValid(inputValue);

    if (isValid) {
      setErrors({});
      const [res, errStr] = factorizationFermats(Number(inputValue));
      errStr === ''
        ? setFactorized(`${inputValue} = ${res.x} * ${res.y}`)
        : setFactorized(errStr);
      Toast.show(res.time);
      setShowModal(true);
    } else setErrors(errors);
  };

  const onChangeText = text => setInputValue(text);
  return (
    <Container>
      <XCenter marginTop={100}>
        <Title fontSize={45}>Лабораторна робота 3.1</Title>
        <Title padding={10} marginTop={10}>
          РЕАЛІЗАЦІЯ ЗАДАЧІ РОЗКЛАДАННЯ ЧИСЛА НА ПРОСТІ МНОЖНИКИ (ФАКТОРИЗАЦІЯ
          ЧИСЛА)
        </Title>
        <Input
          error={errors.factorization}
          value={inputValue}
          onChangeText={onChangeText}
          placeholder="Введіть число"
        />
        <Btn
          backgroundColor="#55b2d4"
          onPress={onPress}
          textColor="white"
          title="Обчислити"
        />
      </XCenter>
      <View style={{opacity: 0}}>
        {showModal && (
          <MModal
            showModal={showModal}
            setShowModal={setShowModal}
            text={`Результат:  ${factorized}`}
          />
        )}
      </View>
      <RouteGroup marginBottom={50} navigator={navigator} />
    </Container>
  );
};

export default Lab31;
