import React from 'react'
import { View, Text,StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import bg from '../../assets/images/bg.png';
import leftchevron from '../../assets/icons/left-chevron.png';

const ProfilHeader = () => {
    return (
            <ImageBackground source={bg} style={styles.header}>
                <View style={styles.headerText}>
                    <TouchableOpacity
                        onPress={() => {}}
                        style={styles.touch}
                    >
                        <Image source={leftchevron} style={styles.arrow} />
                        <Text style={styles.text}>Retour</Text>
                    </TouchableOpacity>
                    <Text style={[styles.text, { right: wp('16%') }]}>Mes informations</Text>
                </View>
            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 2,
        paddingHorizontal: wp('5%')
    },
    text: {
        color: 'white',
    },
    headerText: {
        top: hp('3%'),
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    arrow: {
        width: wp('5%'),
        height: hp('2%'),
        right: wp('3%'),
        tintColor: 'white'
    },
    touch: {
        flexDirection: 'row',
        right: ('6%'),
        alignItems: 'center'
    },
});

export default ProfilHeader;
