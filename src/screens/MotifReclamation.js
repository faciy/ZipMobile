import React from 'react'
import { View, Image, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BodyMotif from '../components/basics/BodyMotif';
import Conformite from '../components/common/Conformite';
import Header from './../components/common/Header';

const MotifReclamation = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Conformite />
            <BodyMotif />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default MotifReclamation;
