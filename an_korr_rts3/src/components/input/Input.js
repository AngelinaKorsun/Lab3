import React, {useState} from 'react';
import {View} from 'react-native';
import {Error, TextInputStyled} from './styles';
const BLUE = '#55b2d4';
const LIGHT_GRAY = '#8d8d8d';

const Input = ({
  flex,
  minWidth,
  value,
  error,
  onChangeText,
  placeholder,
  onFocus,
  onBlur,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = e => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };
  const handleBlur = e => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };

  return (
    <View style={{minHeight: 90}}>
      <TextInputStyled
        flex={flex}
        minWidth={minWidth}
        placeholder={placeholder}
        selectionColor={BLUE}
        keyboardType="number-pad"
        underlineColorAndroid={isFocused ? BLUE : LIGHT_GRAY}
        onFocus={handleFocus}
        value={value}
        onChangeText={onChangeText}
        onBlur={handleBlur}
      />
      {error && <Error>{error}</Error>}
    </View>
  );
};

export default Input;
