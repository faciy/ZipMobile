import React,{useState} from 'react'
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import logoZip from '../assets/icons/logoZip.png';
import Email from '../components/basics/Email';
import Password from '../components/basics/Password';
import ConnectButton from '../components/common/ConnectButton';
import OtherButton from '../components/common/OtherButton';
import bg from '../assets/images/bg.png';

const LoginScren = () => {

    const [securityText, setsecurityText] = useState(true)

    return (
        <ScrollView>
            <View style={styles.container}>
                    <ImageBackground source={bg} style={styles.header}>
                        <Text style={styles.text}>wwww.zip.com</Text>
                        <View style={styles.logoContainer}>
                            <Image
                                source={logoZip}
                                style={styles.logoZip}
                            />
                        </View>
                    </ImageBackground>
                <View style={styles.body}>
                    <View style={styles.containerTextInput}>
                        <Email />
                        <Password securityText={securityText}
                        setSecurityText={setsecurityText}
                        />
                        <ConnectButton title='Se connecter' />
                        <View style={styles.otherButton}>
                            <OtherButton
                                button={() => console.log('ok')}
                                title='Mot de passe oublié'
                            />
                            <Text style={styles.bar}>|</Text>
                            <OtherButton
                                button={() => console.log('non')}
                                title='Contacter le support'
                            />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: hp('100%'),
    },
    header: {
        flex: 3,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        height:hp('100%'),
    },
    body: {
        flex: 3,
        backgroundColor: 'white',
        borderTopLeftRadius: wp('5%'),
        borderTopRightRadius: wp('5%'),
        paddingHorizontal: wp('10%'),
    },
    logoContainer: {
        top: hp('5%')
    },
    logoZip: {
        width: wp('20%'),
        height: hp('10%'),
        top:hp('5%')
    },
    text: {
        color: 'white',
        top:hp('5%')
    },
    otherButton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    bar: {
        top: hp('15%')
    }
});


export default LoginScren;
