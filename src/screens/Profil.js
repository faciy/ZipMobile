import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ProfilHeader from '../components/common/ProfilHeader';
import photo from '../assets/icons/YvesBoah.jpg';

const Profil = () => {
    return (
        <View style={styles.container}>
            <ProfilHeader />
            <View style={styles.body}>
                <View style={styles.blocId}>
                    <View style={styles.cardProfil}>
                        <Image source={photo} style={styles.photo} />
                    </View>
                    <View style={styles.textId}>
                        <Text style={{ fontWeight: 'bold' }}>indépendant</Text>
                    </View>
                    <View style={styles.name}>
                        <Text numberOfLines={1} style={{ fontSize: 20, fontWeight: 'bold' }}>Emnick N'guessan</Text>
                    </View>
                </View>
                <View >
                    <View style={styles.bar}></View>
                    <View style={styles.course}>
                        <View style={{ alignItems: 'center', bottom: hp('3%') }}>
                            <Text style={{ fontWeight: 'bold' }}>3250</Text>
                            <Text>Total courses</Text>
                        </View>
                        <View style={{ alignItems: 'center', bottom: hp('3%') }}>
                            <Text style={{ fontWeight: 'bold' }}>65.350</Text>
                            <Text>Commisssion</Text>
                        </View>
                    </View>
                    <View style={styles.info}>
                        <Text style={{ fontWeight: 'bold' }}>Mes informations</Text>
                        <View style={styles.barTop}></View>
                    </View>
                    <View style={styles.infoId}>
                        <View style={{ top: hp('3%') }}>
                            <Text style={styles.textInfo}>+225 59599905</Text>
                            <Text style={styles.textInfo}>YannickZip@gmail.com</Text>
                            <Text style={styles.textInfo}>Permis B</Text>
                            <Text style={styles.textInfo}>Engin Moto</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 4,
        backgroundColor: 'grey'
    },
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
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginStart: hp('3%'),
        marginEnd: hp('3%'),
        bottom: hp('25%')
    },
    barTop: {
        bottom: hp('8%'),
        height: hp('10%'),
        left: wp('50%'),
        width: wp('0.3%'),
        backgroundColor: 'grey',
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
        fontWeight: 'bold'
    },
    photo: {
        width: wp('30%'),
        height: hp('15%'),
        borderRadius: hp('10%'),
    }

});

export default Profil;
