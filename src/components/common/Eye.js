import React, { useState } from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import invisible from '../../assets/icons/invisible.png';
import eye from '../../assets/icons/eye.png';


const Eye = ({secureTextEntry, setSecurityText}) => {
    return (
        <View style={styles.invisible}>
            <TouchableOpacity
                onPress={() => setSecurityText(!secureTextEntry)}
            >
                {secureTextEntry ?
                    <Image
                        style={styles.iconEye}
                        source={invisible}
                    /> :
                    <Image
                        style={styles.iconEye}
                        source={eye}
                    />
                }

            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    invisible: {
        position: 'absolute',
        left: wp('70%'),
    },
    iconEye: {
        width: wp('5%'),
        height: hp('2%'),
        tintColor: 'grey'
    }
});

export default Eye;
