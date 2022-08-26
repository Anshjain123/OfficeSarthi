import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import NotIdentified from './NotIdentified'
import { AuthContext } from '../../AuthProvider';
import Identified from './Identified'
import CustomButton from '../Assets/CustomButton';
import { FontAwesome } from '@expo/vector-icons';

const IsVerified = (props) => {
    const [loading, setLoading] = useState(false)
    const [toVerify, setToVerify] = useState(false)
    const [identified, setIdentified] = useState(false)
    const { isLoggedIn } = useContext(AuthContext)
    useEffect(() => {
        if (props.photo) {
            setLoading(false);
            setToVerify(true);
            setIdentified(true);
            // setIdentified(false); 
            // api calls to verify the image
        }
    }, [props.photo])

    if (toVerify && loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size='large' color='#5379f6' />
                <View>
                    <Text style={styles.loaderText}>
                        Verifying Details
                    </Text>
                </View>
            </View>
        )
    }
    if (toVerify && !loading && identified) {
        return (
            <Identified navigation={props.navigation} />
        )
    }
    if (toVerify && !loading && !identified) {
        return (
            <NotIdentified navigation={props.navigation} />
        )
    }
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, paddingRight: 10 }} >Location verified</Text>
                    <FontAwesome style={{ fontSize: 20 }} name='check' />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 20 }}>Please click a photo for Identification</Text>
                </View>


            </View>

            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                <CustomButton onPress={() => props.navigation.navigate("camera")} title="Click a Photo" />
            </View>

        </View>
    )
}

export default IsVerified

const styles = StyleSheet.create({
    loaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loaderText: {
        fontSize: 20,
        paddingLeft: 10
    }
})