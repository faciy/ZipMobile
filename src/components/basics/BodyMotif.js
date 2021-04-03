import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import photo from '../../assets/icons/YvesBoah.jpg';

const BodyMotif = () => {

    const [takePhoto, setTakePhoto] = useState(true)

    return (
        <View>
            <View style={styles.cardCommentaire}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Nous laisser un commentaire</Text>
                </View>
                <View style={styles.textAreaContainer}>
                    <TextInput
                        style={styles.textArea}
                        placeholder="Commentaire"
                        placeholderTextColor="black"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
                <View style={styles.cardPhoto}>
                    {takePhoto ? 
                    <TouchableOpacity
                    onPress={() => setTakePhoto(!takePhoto)}

                    >
                    <Text style={styles.textPhoto}>Prendre une photo</Text>
                    </TouchableOpacity>:
                    <TouchableOpacity
                    onPress={() => setTakePhoto(!takePhoto)}
                        style={styles.image}
                    >
                        <Image source={photo} style={{
                            width:wp('10%') ,height:hp('5%'), borderRadius:hp('5%')
                        }} />
                    <Text style={[styles.textPhoto, {paddingLeft:wp('5%')}]}>Prendre une photo</Text>
                    </TouchableOpacity>
                }
                </View>
                <View style={styles.buttonCard}>
                <TouchableOpacity
                    onPress={() => {}}
                    style={styles.connectOne}
                >
                    <Text style={styles.title}>Annuler</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {}}
                    style={styles.connectTwo}
                >
                    <Text style={styles.title}>Envoyer</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardCommentaire: {
        height: hp('100%'),
        backgroundColor: 'grey',
        paddingHorizontal: wp('10%'),
    },
    textAreaContainer: {
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: wp('5%'),
        backgroundColor: 'white',
        height: 150,
        top: hp('5%')
    },
    textArea: {
        paddingHorizontal: wp('4%')
    },
    text: {
        color: 'white'
    },
    textContainer: {
        top: hp('2%'),
        left: wp('5%')
    },
    cardPhoto: {
        top: hp('8%')
    },
    textPhoto: {
        textAlign: 'center',
        color:'#44ACDA'
    },
    buttonCard: {
        top: hp('10%'),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    connectOne: {
        height: hp('8%'),
        width:wp('35%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: wp('3%'),
        borderColor: '#44ACDA',
    },
    connectTwo: {
        height: hp('8%'),
        width:wp('35%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: wp('3%'),
        borderColor: '#44ACDA',
        backgroundColor:'#44ACDA'
    },
    title: {
        color: 'white'
    },
    image:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    }
});

export default BodyMotif;
