import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-crop-picker';

const BodyMotif = () => {

    const [takePhoto, setTakePhoto] = useState(true)
    const [image, setImage] = useState('https://reactnative.dev/img/tiny_logo.png')

    const TakePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width:wp('10%') ,
            compressImageMaxHeight:300,
            compressImageMaxWidth:300,
            compressImageQuality:0.7,
            height:hp('5%'),
            cropping: true
          }).then(image => {
            console.log(image);
            setImage(image.path)
          });
    }

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
                        placeholderTextColor="#7D7D7D"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
                <View style={styles.cardPhoto}>
                    {takePhoto ? 
                    <TouchableOpacity
                    onPress={() => {
                        setTakePhoto(!takePhoto)
                        TakePhotoFromCamera() 
                    }}
                    >
                    <Text style={styles.textPhoto}>Prendre une photo</Text>
                    </TouchableOpacity>:
                    <TouchableOpacity
                    onPress={() => {TakePhotoFromCamera()}}
                        style={styles.image}
                    >
                        <Image source={{ uri:image
                        }} style={styles.uri} />
                    <Text style={[styles.textPhoto, {paddingLeft:wp('5%')}]}>Changer la photo</Text>
                    </TouchableOpacity>
                }
                </View>
                <View style={styles.buttonCard}>
                <TouchableOpacity onPress={() => {}} style={styles.connectOne}>
                    <Text style={{color:'#44ACDA'}}>Annuler</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={[styles.connectOne, {backgroundColor:'#44ACDA'}]}>
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
        backgroundColor: '#FAFAFA',
        paddingHorizontal: wp('10%'),
    },
    textAreaContainer: {
        borderColor: '#D4D4D4',
        borderWidth: 2,
        borderRadius: wp('5%'),
        backgroundColor: 'white',
        height: 150,
        top: hp('5%')
    },
    textArea: {
        paddingHorizontal: wp('4%'),
    },
    text: {
        color: '#707070'
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
        color:'#3369FF'
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
    title: {
        color: 'white'
    },
    image:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    uri:{
        width:wp('10%') ,
        height:hp('5%'), 
        borderRadius:hp('5%'), 
        borderColor:'grey',
        borderWidth:1
    }
});

export default BodyMotif;
