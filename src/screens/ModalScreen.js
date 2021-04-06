import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ModalScreen = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const ChangeModalVisible = (bool) => {
        setIsModalVisible(bool)
    }

    const CloseModal = (bool) => {
        setIsModalVisible(bool)
    }

    const Validate = () => {
        console.log('Validate')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => ChangeModalVisible(true)}
                style={styles.modalBtn}
            >
                <Text>Modal</Text>
            </TouchableOpacity>
            <Modal
                transparent={true}
                animationType='slide'
                visible={isModalVisible}
                onRequestClose={() => ChangeModalVisible(false)}
            >
                <View
                    disabled={true}
                    style={styles.containerModal}
                >
                    <View style={styles.modalContainer}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', top: hp('3%') }}>Avez vous des réclamations?</Text>
                        <Text style={styles.message}>L’histoire des consoles de jeux vidéo en Amérique du Nord est fa été mis en péril par un mélange d’orgueil et de mauvaises idées. </Text>
                    </View>
                    <View style={styles.buttonCard}>
                        <TouchableOpacity
                            onPress={() => CloseModal(false)}
                            style={styles.connectOne}
                        >
                            <Text style={{color:'#44ACDA'}}>Non</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => Validate()}
                            style={[styles.connectOne, {borderColor: '#44ACDA',
                            backgroundColor:'#44ACDA',
                            left:wp('5%')}]}
                        >
                            <Text style={styles.title}>Oui</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#95989A'
    },
    modalBtn: {
        backgroundColor: 'red'
    },
    modalContainer: {
        height: hp('25%'),
        width: wp('80%'),
        paddingTop: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: wp('10%')
    },
    buttonCard: {
        top: hp('8%'),
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
        backgroundColor:'#44ACDA',
        backgroundColor:'white',
        borderColor: '#44ACDA',
        right:wp('5%')
    },
    title: {
        color: 'white'
    },
    message:{
        textAlign: 'center', 
        top: hp('5%'), 
        color:'#7F7F7F'
    }
});

export default ModalScreen;
