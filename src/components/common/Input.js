import React from 'react'
import { View, StyleSheet, TextInput, Text, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import error from '../../assets/icons/error.png';

const Input = ({ placeholder, placeholderTextColor, secureTextEntry, value, onChangeText, borderColorError, ErrorMessage }) => {
    return (
        <View style={[styles.container, { borderColor: borderColorError }]}>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                style={styles.textInput}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
            />
            {ErrorMessage ? 
            <View style={styles.cardError}>
                <Text style={styles.error} >Le mot de passe est incorrect</Text>
                <Image source={error} style={styles.image}/>
            </View> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderRadius: wp('3%'),
        borderColor: '#C3D3D4',
        width: wp('80%')
    },
    textInput: {
        paddingHorizontal: wp('10%')
    },
    error: {
        position: 'absolute',
        width:wp('55%'),
        height:hp('3%'),
        backgroundColor:'#D1463C',
        textAlign:'center',
        borderRadius:8,
        color:'white',
    },
    cardError:{
        alignItems:'flex-end',
        bottom:hp('5%'),
        right:wp('10%'),
    },
    image:{
        width:20,
        height:20,
        position:'absolute',
        right:wp('-6%'),
    }
});

export default Input;
