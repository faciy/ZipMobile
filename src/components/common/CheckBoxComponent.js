import React, {useState} from 'react'
import { View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const CheckBoxComponent = ({value, onValueChange}) => {

    return (
        <CheckBox
            tintColors={{ true: '#44ACDA', false: 'grey' }}
            disabled={false}
            value={value}
            onValueChange={(newValue) => onValueChange(newValue)}
        />
    )
}

export default CheckBoxComponent;
