import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

const ConnectButton = ({ title }) => {
    return (
        <View style={styles.container}>
            <LinearGradient 
            start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
             colors={['#2568B0', '#44ACDA']}
                style={styles.gradiant}>
                <TouchableOpacity
                    onPress={() => { }}
                    style={styles.connect}
                >
                    <Text style={styles.title}>{title}</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: hp('8%'),
    },
    connect: {
        height: hp('8%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: wp('3%'),
        borderColor: '#C3D3D4',
    },
    title: {
        color: 'white'
    },
    gradiant: {
        borderRadius: wp('3%'),
    }
});

export default ConnectButton;
