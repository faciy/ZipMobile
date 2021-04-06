import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import location from '../../assets/icons/location.png';
import MapViewDirections from 'react-native-maps-directions';

const Body = () => {

    const origin={latitude:5.316667,longitude: -4.033333}
    const destination ={latitude: 6.816667,longitude: -5.283333}

    const departMarker = () => (
        <Marker
            coordinate={{
                latitude: 5.316667,
                longitude: -4.033333,}}
            anchor={{ x: 0.5, y: 0.5 }}
        >
            <View style={styles.markerTwo}></View>
        </Marker>
    )

    const destinationMarker = () => (
        <Marker
            coordinate={{
                latitude: 6.816667,
                longitude: -5.283333 }}
            anchor={{ x: 0.5, y: 0 }}
            flat={true}
        // rotation={angle}
        >
        <View style={styles.markerOne}></View>
        </Marker>
    )
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
            >
                {departMarker()}
                {destinationMarker()}
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={'AIzaSyAhPChpg-KlwTXSj3U31e23LCHUcZzvELQ'}
                    strokeWidth={3}
                    strokeColor="black"
                />
            </MapView>

        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        height: hp('100%')
    },
    iconDepart: {
        width: 25,
        height: 25,
    },
    markerOne:{
        backgroundColor:'blue',
        width:wp('3%'),
        height:hp('2%'),
        borderRadius:hp('5%')
    },
    markerTwo:{
        backgroundColor:'green',
        width:wp('3%'),
        height:hp('2%')
    }
});

export default Body;
