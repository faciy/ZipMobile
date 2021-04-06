import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import photo from '../../assets/icons/YvesBoah.jpg';

const CardProfil = ({ name, effCourse, commission, statut }) => {
    return (
        <View>
            <View style={styles.blocId}>
                <View style={styles.cardProfil}>
                    <Image source={photo} style={styles.photo} />
                </View>
                <View style={styles.textId}>
                    <Text numberOfLines={1} style={{ fontWeight: 'bold' }}>{statut}</Text>
                </View>
                <View style={styles.name}>
                    <Text numberOfLines={1} style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
                </View>
            </View>
            <View style={styles.bar}></View>
            <View style={styles.course}>
                <View style={{ alignItems: 'center', bottom: hp('3%') }}>
                    <Text style={{ fontWeight: 'bold' }}>{effCourse}</Text>
                    <Text style={styles.colorText}>Total courses</Text>
                </View>
                <View style={{ alignItems: 'center', bottom: hp('3%') }}>
                    <Text style={{ fontWeight: 'bold' }}>{commission}</Text>
                    <Text style={styles.colorText}>Commisssion</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    blocId: {
        backgroundColor: 'white',
        height: hp('30%'),
        marginStart: hp('3%'),
        marginEnd: hp('3%'),
        borderRadius: hp('3%'),
        bottom: hp('15%'),
        alignItems: 'center',
        borderColor: 'grey',
        borderWidth: 0.5
    },
    cardProfil: {
        width: wp('30%'),
        height: hp('15%'),
        borderRadius: hp('10%'),
        bottom: hp('8%'),
    },
    textId: {
        bottom: hp('9%'),
        backgroundColor: 'white'
    },
    name: {
        bottom: hp('8%')
    },
    course: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: wp('10%'),
        bottom: hp('20%')
    },
    bar: {
        borderBottomColor: '#DADEE3',
        borderBottomWidth: 1,
        marginStart: hp('3%'),
        marginEnd: hp('3%'),
        bottom: hp('25%')
    },
    photo: {
        width: wp('30%'),
        height: hp('15%'),
        borderRadius: hp('10%'),
    },
    colorText: {
        color: '#7F7F7F'
    }
});

export default CardProfil
