import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Conformite = () => {
    return (
        <View>
             < View style={styles.textConformite}>
                <View style={styles.conformite}>
                    <Text>ok</Text>
                    <Text style={styles.textOne} numberOfLines={1}>Le produit n'est pas ce que j'ai demandélgliyfjhfjbdbhgbd</Text>
                </View>
                <View style={styles.barBottom}></View>
                {/* bloc two  */}
                <View style={styles.conformite}>
                    <Text>ok</Text>
                    <Text numberOfLines={1} style={styles.text}>L'état du produit s'est degradéii lgugugiugugouguigugdégradé</Text>
                </View>
                <View style={styles.barBottom}></View>
                {/* bloc three  */}
                <View style={styles.conformite}>
                    <Text>ok</Text>
                    <Text numberOfLines={1} style={styles.text}>Mon produit s'est endommagé lgugugiugugouguigugJJJJdégradé</Text>
                </View>
                <View style={styles.barBottom}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textConformite: {
        height: hp('25%'),
        backgroundColor: 'white',
        paddingHorizontal: wp('6%'),
    },
    conformite: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: wp('4%')
    },
    barBottom: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginRight: wp('3%'),
        marginLeft: wp('3%')
    },
    text: {
        right: wp('14%'),
    },
    textOne: {
        right: wp('16%')
    },
    textTwo: {
        // right:wp('36%')
    }
});

export default Conformite
