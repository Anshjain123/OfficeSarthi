import { View, Text, SafeAreaView, Pressable, StyleSheet } from 'react-native';
import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';
import FaceDetection from '../FaceDetection';
import axios from 'axios';
import { storage } from "../../Firebase/firebase";
import { ref, uploadBytes, uploadBytesResumable } from "firebase/storage";



const CameraScreen = ({ navigation }) => {
    let cameraRef = useRef(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [imageUpload, setimageUpload] = useState(null)
    const [type, setType] = useState(CameraType.front);
    useEffect(() => {
        const getPermission = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status)
        }
        getPermission();
    }, [])
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [navigation])
    const takePhoto = async () => {
        const res = await cameraRef.current.takePictureAsync({ quality: 0.5 })
        // const formData = new FormData()
        // console.log(res); 
        // formData.append('photo', 'Image Upload');
        // formData.append('file_attachment', res.uri); 

        
        // let response = await fetch("http://localhost:5000/users",{
        //     method:'post',
        //     body:formData,
        //     headers:{
        //         'Content-Type':"multipart/form-data"
        //     }
        // })

        // let resJson = await response.json();
        // console.log(resJson); 
        // let uploadImage = async () => {
        //     //Check if any file is selected or not
        //     if (singleFile != null) {
        //       //If file selected then create FormData
        //       const fileToUpload = singleFile;
        //       const data = new FormData();
        //       data.append('name', 'Image Upload');
        //       data.append('file_attachment', fileToUpload);
        //       let res = await fetch(
        //         'http://localhost//webservice/user/uploadImage',
        //         {
        //           method: 'post',
        //           body: data,
        //           headers: {
        //             'Content-Type': 'multipart/form-data; ',
        //           },
        //         }
        //       );
        //       let responseJson = await res.json();
        //       if (responseJson.status == 1) {
        //         alert('Upload Successful');
        //       }
        //     } else {
        
        navigation.navigate('photocapture', { uri: res.uri })

    }
    return (
        <View style={styles.cameraContainer}>
            <Camera
                ref={cameraRef}
                onCameraReady={() => console.log("F")}
                type={type}
                style={styles.camera}
            >
                <View style={styles.cameraButtonContainer}>
                    <Pressable
                        style={styles.cameraButton}
                        onPress={takePhoto}
                    />
                </View>

            </Camera>
        </View >
    )
}

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1
    },
    camera: {
        flex: 1
    },
    cameraButton: {
        position: 'absolute',
        bottom: 70,
        width: 80,
        height: 80,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 100,
    },
    cameraButtonContainer: {
        flex: 1
    }
})

export default CameraScreen