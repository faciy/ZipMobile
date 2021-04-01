import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const OtherButton = ({ title, button }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={button}
            >
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: hp('15%'),
    },
    title:{
        textDecorationLine:'underline'
    }
});

export default OtherButton;
