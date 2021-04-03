import React from 'react'
import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import photo from '../assets/icons/YvesBoah.jpg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const About = () => {
    return (
        <ImageBackground source={photo} style={styles.container}>
            <View style={styles.containerAbout}>
                <ScrollView style={styles.textCard}>
                    <Text style={{fontSize:30}}>A propos</Text>
                    <Text>L’histoire des consoles de jeux vidéo en Amérique du Nord est fascinante. Le marché des consoles de jeux vidéo est rapidement passé de rien à une phase de boom géant. Peu de temps après, cependant, il a été mis en péril par un mélange d’orgueil et de mauvaises idées. Heureusement, pour les amateurs de jeux, l’industrie a été sauvée par une obscure entreprise basée au Japon.
                    Le boom de la console a commencé en 1980 lorsque Atari a lancé la console de jeu « Atari 2600 », qui avait un astuce brillante pour sa campagne de vente. Il comprenait une copie gratuite du jeu « Space Invaders » avec chaque Atari 2600. Space Invaders était extrêmement populaire dans les salles d’arcade à cette époque, donc les consommateurs étaient ravis de pouvoir le jouer dans leur maison. En conséquence, Atari 2600 ventes ont monté en flèche. D’autres entreprises ont sauté sur le marché des consoles de jeux vidéo et ont produit leurs propres consoles à vendre. Les ordinateurs domestiques tels que le Commodore et la série Apple sont également devenus populaires parce qu’ils pouvaient jouer à des jeux et utiliser d’autres types de logiciels. Les consoles de jeux vidéo et les ordinateurs personnels se trouvaient dans presque toutes les maisons nord-américaines au début des années 1980. Bien que le marché des jeux vidéo ait atteint le point de saturation, de nombreuses entreprises ont ignoré cette réalité et ont continué à fabriquer des consoles et de nouveaux jeux à une vitesse vertigineuse. Un effondrement était imminent.
L’échec de no</Text>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerAbout: {
        height: hp('100%'),
        marginStart: hp('3%'),
        marginEnd: hp('3%'),
        marginTop: hp('3%'),
        backgroundColor: 'white',
        borderRadius: hp('2%')
    },
    textCard:{
        padding:hp('3%')
    }
});

export default About;
