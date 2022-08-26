import { StyleSheet, View, Image, Text, SafeAreaView, Button, Alert, Pressable } from 'react-native'
import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';
import FaceDetection from '../FaceDetection';
import IsVerified from './IsVerified';
import CustomButton from '../Assets/CustomButton';
import UserIcon from '../Assets/UserIcon';


const PhotoCaptureScreen = ({ route, navigation }) => {
    let photo = route.params
    const [toDisplay, setToDisplay] = useState(false);
    const [cameraType, setCameraType] = useState("front");
    useLayoutEffect(() => {
        navigation.setOptions({
            title: '',
            headerShown: false
        })

    }, [navigation])

    const openCamera = () => {
        navigation.navigate("camera")
    }


    return (
        <SafeAreaView style={styles.superContainer}>
            <View style={styles.cameraContainer}>
                <View style={styles.photoContainer}>
                    <View style={{ borderRadius: 250, width: 250, height: 250, overflow: 'hidden' }}>
                        <Pressable
                            style={styles.photoIconContainer}
                            android_ripple={{ color: 'white', borderless: true }}
                            onPress={openCamera}
                        >
                            {photo ? (<Image source={{ uri: photo.uri }} style={styles.photo} />) : <UserIcon style={{ color: 'white', fontSize: 60, paddingLeft: 20 }} />}
                        </Pressable>
                    </View>


                </View>
                <View style={styles.cameraTypeContainer}>
                    <Text style={styles.cameraType}>{cameraType} camera</Text>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <IsVerified navigation={navigation} photo={photo} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    superContainer: {
        flex: 1,
    },
    cameraContainer: {
        flex: 6,
    },
    contentContainer: {
        flex: 5
    },
    photoContainer: {
        flex: 9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoIconContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6200EE',
        borderRadius: 250,
        width: 250,
        height: 250,
    },
    photoIconFlexContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20

    },
    photoIcon: {
        fontSize: 110,
        color: 'white',
        alignSelf: 'center',
    },
    photo: {
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 250,
        width: 250,
        height: 250,
    },
    cameraTypeContainer: {
        flex: 1,
        alignItems: 'center',
    },
    cameraType: {
        fontSize: 20,
        textTransform: 'capitalize'
    }
})

export default PhotoCaptureScreen