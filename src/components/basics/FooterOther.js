import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import panneauOrange from '../../assets/icons/panneau_orange.png';
import ConnectButton from '../common/ConnectButton';

const FooterOther = ({code, duree, distance}) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.code}>{code}</Text>
            </View>
            <View style={styles.infoTimeAndDistance}>
                <Text style={styles.text}>{duree}</Text>
                <Text style={styles.text}>{distance}</Text>
            </View>
            <View style={styles.button}>
                <ConnectButton 
                button={() => console.log('Accepter la course')}
                title='Terminer la course' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        top:hp('2%'),
    },
    button:{
        bottom:hp('4%')
    },
    code:{
        textAlign:'center',
        fontSize:wp('6%'),
        color:'green'
    },
    infoTimeAndDistance:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:hp('3%')
    },
    text:{
        fontWeight:'bold',
        fontSize:18
    }
});



export default FooterOther;
