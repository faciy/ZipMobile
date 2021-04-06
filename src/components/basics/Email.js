import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,} from 'react-native-responsive-screen';
import Input from '../common/Input';
import email from '../../assets/icons/email.png';

const Email = ({borderColorError}) => {
    return (
        <View>
            <View style={styles.email}>
                    <Image 
                    source={email}
                    style={styles.emailLogo}
                    />
                    <Input 
                    borderColorError={borderColorError}
                    placeholder='Email ou Téléphone'
                    placeholderTextColor='black'
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    emailLogo:{
        width:wp('5%'),
        height:hp('2%'),
        position:'absolute',
        left:wp('3%'),
        tintColor:'#0073F7'
    },
    email:{
       top:hp('3%'),
       flexDirection:'row',
       alignItems:'center'
    }
  });

export default Email;
