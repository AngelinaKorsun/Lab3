import React from 'react';
import {ButtonGroup} from './styles';
import Btn from '../btn/Btn';

const SKY_BLUE = '#55b2d4';

const RouteGroup = ({marginBottom, navigator}) => {
  const onPressNavigator = route => navigator.push(route);

  return (
    <ButtonGroup marginBottom={marginBottom}>
      <Btn
        flex={1}
        backgroundColor={SKY_BLUE}
        onPress={() => onPressNavigator('Lab31')}
        textColor="white"
        title="Lab31"
      />
      <Btn
        flex={1}
        backgroundColor={SKY_BLUE}
        onPress={() => onPressNavigator('Lab32')}
        textColor="white"
        title="Lab32"
      />
      <Btn
        flex={1}
        backgroundColor={SKY_BLUE}
        onPress={() => onPressNavigator('Lab33')}
        textColor="white"
        title="Lab33"
      />
    </ButtonGroup>
  );
};

export default RouteGroup;
