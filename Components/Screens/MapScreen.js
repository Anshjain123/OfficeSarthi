import { StyleSheet, Text, View, StatusBar, Alert } from 'react-native'
import React from 'react'
import { useState, useEffect, useLayoutEffect, useRef, useContext } from 'react'
import { AuthContext } from '../../AuthProvider';
import * as Location from 'expo-location';
import MapView, { Circle, Marker, MarkerAnimated } from 'react-native-maps';
import { ScaledSheet, } from 'react-native-size-matters';
import { Button } from '@rneui/base';
import { FontAwesome } from '@expo/vector-icons';
import { getDistance, getPreciseDistance } from 'geolib';

const MapScreen = ({ navigation }) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const { isLoggedIn } = useContext(AuthContext);
    const [dist, setdist] = useState(0)


    const Mapref = useRef(null)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [navigation])
    useEffect(() => {
        async function getlocation() {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }
            let location = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.Highest
            });
            setLocation(location);
            // console.log(Mapref.current.animateCamera);

            const loc = await Mapref.current.animateCamera({ center: { "latitude": location.coords.latitude, "longitude": location.coords.longitude } });
            var dis = getDistance(
                {latitude:location.coords.latitude, longitude:location.coords.longitude},
                {latitude:location.coords.latitude+0.00000001, longitude:location.coords.longitude}
            )
            // console.log(loc);
            setdist(dis);
            const reigon = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.00207,
                longitudeDelta: 0.00207,
            }
            const animate = await Mapref.current.animateToRegion(reigon, 2000);
            // console.log(location)

        }
        getlocation();


    }, [])

    const HandleNavigateCamera =()=>{
        if(dist <= 100) {
            navigation.navigate("camera")
        } else {
            Alert.alert("You are not within 100m radius of your company")
        }
    }

    return (
        <View style={{ height: '100%', backgroundColor: 'white' }} >
            <StatusBar />
            {/*
            <View style={styles.back__icon}>
                <FontAwesome name="arrow-circle-left" onPress={() => navigation.goBack()} size={40} color="#5379f6" />
            </View>
    */}
            <View style={styles.MapScreen}>
                <MapView ref={Mapref} style={styles.map} showsMyLocationButton={true} followsUserLocation={true} zoomEnabled={true} zoomControlEnabled={true} showsCompass={true} loadingEnabled={true} >
                    {location && <Circle
                        center={{ "latitude": location.coords.latitude, "longitude": location.coords.longitude }}
                        radius={100}
                        strokeColor="#5379f6"
                        strokeWidth={0.8}
                    />}

                    {location && <MarkerAnimated
                        coordinate={
                            {
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude,
                            }
                        }
                    >
                    </MarkerAnimated>}
                </MapView>
            </View>
            <View style={styles.btn}>
                <Button title="Continue" type='outline' disabled={(location && dist <= 100 ? false : true)} onPress={() => HandleNavigateCamera()} />
                
            </View>

        </View>

    )
}

export default MapScreen

const styles = ScaledSheet.create({
    map: {
        height: '100%',
        width: '100%'
    },
    MapScreen: {
        height: '90%',
        zIndex: -1,
        marginTop: '-60@ms'
    },
    btn: {
        padding: '10@ms'
    },
    back__icon: {
        zIndex: 1,
        marginTop: '15@ms',
        marginLeft: '15@ms'
    }
})