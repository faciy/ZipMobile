import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import panneauOrange from '../../assets/icons/panneau_orange.png';
import ConnectButton from '../common/ConnectButton';

const Footer = ({duree, distance,price,placeOne,placeTwo}) => {
    return (
        <View style={styles.container}>
            <View style={styles.tarifText}>
                <Text>
                    <Text style={styles.duree}>{duree}</Text> 
                    ({distance})</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            <View style={styles.containerPlace}>
                <Image source={panneauOrange} style={styles.panneau}/>
                <View style={styles.infoPlace}>
                    <Text style={styles.placeOne}>{placeOne}</Text>
                    <Text style={styles.placeTwo}>{placeTwo}</Text>
                </View>
            </View>
            <View style={styles.button}>
                <ConnectButton 
                button={() => console.log('Accepter la course')}
                title='Accepter la course' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        top:hp('2%'),
    },
    tarifText:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    duree:{
        fontWeight:'bold',
        fontSize:wp('6%'),
        color:'grey'
    },
    price:{
        top:hp('1%'),
        color:'grey'
    },
    containerPlace:{
        flexDirection:'row',
        top:hp('2%')
    },
    infoPlace:{
        paddingHorizontal:wp('4%'),
    },
    panneau:{
        height:hp('8%'),
        width:wp('6%')
    },
    placeOne:{
        fontWeight:'bold'
    },
    placeTwo:{
        top:hp('2%'),
        color:'grey'
    },
    button:{
        bottom:hp('4%')
    }
});



export default Footer;
