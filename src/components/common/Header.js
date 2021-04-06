import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import menu from '../../assets/icons/menu_icon.png';
import menus from '../../assets/icons/menus.png';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <TouchableOpacity
                    style={styles.iconOne}
                    onPress={() => { }}
                >
                    <Image source={menu} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.iconOne}
                    onPress={() => { }}
                >
                    <Image source={menus} style={styles.iconOther} />
                </TouchableOpacity>
            </View>
            <View style={styles.motifText}>
                <Text style={styles.text}>Motif de non conformité</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA',
        opacity: 1,
        paddingHorizontal: wp('10%'),
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: hp('15%'),
    },
    icon: {
        width: wp('5%'),
        height: hp('2%'),
    },
    iconOther: {
        width: wp(' 5%'),
        height: hp('2%'),
    },
    iconOne: {
        top: hp('2%')
    },
    motifText:{
        bottom:hp('3%')
    },
    text:{
        color:'black',
        fontWeight:'bold',
        fontSize:wp('5%')
    }
});

export default Header;
