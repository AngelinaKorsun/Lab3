import React from 'react';
import {Picker} from 'react-native';

const PickerSelect = ({onValueChange, selectedValue, options}) => (
  <Picker
    mode="dialog"
    selectedValue={selectedValue}
    style={{height: 60, fontSize: 20, minWidth: 120}}
    onValueChange={onValueChange}>
    {Array.isArray(options) &&
      options.map(({label, value}, i) => (
        <Picker.Item key={i} label={label} value={value} />
      ))}
  </Picker>
);
export default PickerSelect;
