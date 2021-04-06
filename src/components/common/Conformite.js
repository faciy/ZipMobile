import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CheckBoxComponent from '../common/CheckBoxComponent';

const Conformite = () => {

    const [toggleCheckBoxOne, setToggleCheckBoxOne] = useState(false)
    const [toggleCheckBoxTwo, setToggleCheckBoxTwo] = useState(false)
    const [toggleCheckBoxThree, setToggleCheckBoxThree] = useState(false)

    return (
        <View>
            < View style={styles.textConformite}>
                <View style={styles.conformite}>
                    <CheckBoxComponent 
                    value={toggleCheckBoxOne}
                    onValueChange={setToggleCheckBoxOne}
                    />
                    <Text style={styles.textOne} numberOfLines={1}>Le produit n'est pas ce que j'ai demandélgliyfjhfjbdbhgbd</Text>
                </View>
                <View style={styles.barBottom}></View>
                {/* bloc two  */}
                <View style={styles.conformite}>
                    <CheckBoxComponent 
                    value={toggleCheckBoxTwo}
                    onValueChange={setToggleCheckBoxTwo}
                    />
                    <Text numberOfLines={1} style={styles.text}>L'état du produit s'est degradéii lgugugiugugouguigugdégradé</Text>
                </View>
                <View style={styles.barBottom}></View>
                {/* bloc three  */}
                <View style={styles.conformite}>
                    <CheckBoxComponent 
                    value={toggleCheckBoxThree}
                    onValueChange={setToggleCheckBoxThree}
                    />
                    <Text numberOfLines={1} style={styles.text}>Mon produit s'est endommagé</Text>
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
        margin: wp('4%'),
        alignItems:'center'
    },
    barBottom: {
        borderBottomColor: '#D4D4D4',
        borderBottomWidth: 1,
        marginRight: wp('3%'),
        marginLeft: wp('3%')
    },
    text: {
        right: wp('14%'),
        color: '#7F7F7F'
    },
    textOne: {
        right: wp('16%'),
        color: '#7F7F7F'
    },
    textTwo: {
        // right:wp('36%')
    }
});

export default Conformite
