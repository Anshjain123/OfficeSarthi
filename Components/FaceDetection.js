import { ActivityIndicator, View, Text, StyleSheet, Button } from 'react-native'
import React, { useEffect, useState } from 'react';
import * as FaceDetector from 'expo-face-detector';
import Icon from 'react-native-vector-icons/FontAwesome';

const FaceDetection = (props) => {
    const [facesDetected, setFacesDetected] = useState(null);
    useEffect(() => {
        const performFaceDetection = async () => {
            const faceDetection = await FaceDetector.detectFacesAsync(props.imageUri);
            setFacesDetected(faceDetection.faces.length)
        }
        performFaceDetection()
    }, [props.imageUri])
    if (facesDetected === 1) {
        return (
            <View style={styles.resultcontainer}>
                <View style={styles.contentcontainer}>
                    <View>
                        <Icon style={styles.content} name='check' />
                    </View>
                    <View>
                        <Text style={styles.content}>
                            Face detection passed
                        </Text>
                    </View>
                </View>
                <View style={styles.buttoncontainer}>
                    <Button title='Mark Attendance' />
                </View>
            </View>

        )
    } else if (facesDetected === 0) {
        return (
            <View style={styles.resultcontainer}>
                <View style={styles.contentcontainer}>
                    <View>
                        <Icon style={styles.content} name='close' />
                    </View>
                    <View>
                        <Text style={styles.content}>
                            No Face Detected
                        </Text>
                    </View>
                </View>
            </View>
        )
    } else if (facesDetected > 1) {
        return (
            <View style={styles.resultcontainer}>
                <View style={styles.contentcontainer}>
                    <View>
                        <Icon style={styles.content} name='warning' />
                    </View>
                    <View>
                        <Text style={styles.content}>
                            Multiple Faces Detected
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View>
            <ActivityIndicator size="small" color="#0000ff" />
            <Text>Performing FaceDetection</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        fontSize: 19,
        paddingLeft: 8
    },
    contentcontainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    resultcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    buttoncontainer: {
        flex: 1
    }
})

export default FaceDetection