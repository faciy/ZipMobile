import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Input from '../common/Input';
import padlock from '../../assets/icons/padlock.png';
import Eye from '../common/Eye';

const Password = ({securityText, setSecurityText, value, onChangeText, borderColorError, ErrorMessage}) => {
    return (
        <View>
            <View style={styles.password}>
                    <Image 
                    source={padlock}
                    style={styles.padlock}
                    />
                    <Input 
                    ErrorMessage={ErrorMessage}
                    borderColorError={borderColorError}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={securityText}
                    placeholder='Mot de passe'
                    placeholderTextColor='black'
                    />
                    {ErrorMessage ? null : <Eye setSecurityText={setSecurityText} secureTextEntry={securityText} />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    padlock:{
        width:wp('5%'),
        height:hp('3%'),
        position:'absolute',
        left:wp('3%'),
        top:hp('2%'),
        tintColor:'#0073F7'
    },
    password:{
       top:hp('5%'),
       flexDirection:'row',
       alignItems:'center'
    }
  });

export default Password;
