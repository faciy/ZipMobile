import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Input = ({placeholder,placeholderTextColor, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput 
                secureTextEntry={secureTextEntry}
                style={styles.textInput}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderRadius:wp('3%'),
        borderColor:'#C3D3D4',
        width:wp('80%')
    },
    textInput:{
        paddingHorizontal:wp('10%')
    }
  });

export default Input;
