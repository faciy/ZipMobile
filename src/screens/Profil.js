import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import ProfilHeader from '../components/common/ProfilHeader';
import CardProfil from '../components/basics/CardProfil';
import InfoProfil from '../components/basics/InfoProfil';


const Profil = () => {
    return (
        <View style={styles.container}>
            <ProfilHeader />
            <View style={styles.body}>
                    <CardProfil 
                    name="Emnick N'guessan"
                    effCourse="3250"
                    commission="65.350 Fcfa"
                    statut="indépendant"
                    />
                    <InfoProfil 
                    number="68060990"
                    email="kouassicharlesothniel@gmail.com"
                    permis="B"
                    engin="Moto"
                    />
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
        backgroundColor: '#FAFAFA'
    },
});

export default Profil;
