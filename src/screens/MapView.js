import React from 'react'
import { 
    View, ImageBackground, StyleSheet, Text, TouchableOpacity, Image 
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Footer from '../components/basics/Footer';
import Navbar from '../components/common/Navbar';
import Body from '../components/basics/Body';

const MapView = () => {
    return (
        <View style={styles.container}>
            <Navbar />
            <View style={styles.body}>
                <Body />
            </View>
            <View style={styles.footer}>
                <Footer 
                duree='35 min ' distance='4.5km' price='2500 Fcfa'
                placeOne='Cocody angré terminus 81'
                placeTwo='7è Tranche café de vervailles'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // height: hp('100%'),
        flex: 1
    },
    header: {
        flex: 1,
        height: hp('20%'),
        paddingHorizontal:wp('5%')
    },
    body: {
        flex: 2.5,
        // backgroundColor: 'blue',
        borderTopLeftRadius: wp('5%'),
        borderTopRightRadius: wp('5%'),
        // height: hp('100%')
    },
    footer: {
        flex: 2.5,
        backgroundColor: 'white',
        borderTopLeftRadius: wp('5%'),
        borderTopRightRadius: wp('5%'),
        paddingHorizontal:wp('10%')
    },
});


export default MapView;
