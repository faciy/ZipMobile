import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const InfoProfil = ({number, email,permis,engin}) => {
    return (
        <View>
            <View style={styles.info}>
                <Text style={{ fontWeight: 'bold' }}>Mes informations</Text>
                <View style={styles.barTop}></View>
            </View>
            <View style={styles.infoId}>
                <View style={{ top: hp('3%') }}>
                    <Text style={styles.textInfo}>+225 {number}</Text>
                    <Text numberOfLines={1} style={styles.textInfo}>{email}</Text>
                    <Text style={styles.textInfo}>Permis {permis} </Text>
                    <Text style={styles.textInfo}>Engin {engin}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    barTop: {
        bottom: hp('8%'),
        height: hp('10%'),
        left: wp('50%'),
        width: wp('0.3%'),
        backgroundColor: '#DADEE3',
        position: 'absolute'
    },
    info: {
        paddingHorizontal: hp('5X%'),
        bottom: hp('15%')
    },
    infoId: {
        height: hp('30%'),
        backgroundColor: 'white',
        bottom: hp('13%'),
        paddingHorizontal: hp('10%'),
    },
    textInfo: {
        padding: wp('3%'),
        color:'#282F39'
    },
    photo: {
        width: wp('30%'),
        height: hp('15%'),
        borderRadius: hp('10%'),
    },
    colorText:{
        color:'#7F7F7F'
    }

});

export default InfoProfil
