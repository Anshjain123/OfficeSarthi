import { View, Text, Switch, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react';
import UserIcon from '../Assets/UserIcon';

const SettingsScreen = ({ navigation }) => {
    const [locationAccess, setLocationAccess] = useState(false)
    const [cameraAccess, setCameraAccess] = useState(false)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <UserIcon style={{ color: 'white' }} />
                )
            },
            headerStyle: {
                backgroundColor: 'rgb(83, 90, 246)'
            },
            headerTintColor: 'white'

        })
    }, [])
    return (
        <View style={styles.superContainer}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Settings</Text>
            </View>
            <View style={styles.accessContainer}>
                <View style={styles.switchContainer}>
                    <Text style={{ fontSize: 25, fontWeight: '500', color: 'rgb(83, 110, 246)', paddingRight: 20 }}>Location Access :</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "rgb(83, 110, 246)" }}
                        onValueChange={() => setLocationAccess(!locationAccess)}
                        value={locationAccess}
                    />
                </View>
                <View style={styles.switchContainer}>
                    <Text style={{ fontSize: 25, fontWeight: '500', color: 'rgb(83, 110, 246)', paddingRight: 20 }}>Camera Access :</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "rgb(83, 110, 246)" }}
                        onValueChange={() => setCameraAccess(!cameraAccess)}
                        value={cameraAccess}
                    />
                </View>
                <View style={styles.extra}>

                </View>
            </View>
        </View>
    )
}

export default SettingsScreen

styles = StyleSheet.create({
    superContainer: {
        flex: 1
    },
    headingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    accessContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    switchContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    heading: {
        fontSize: 55,
        fontWeight: '500',
        color: 'rgb(83, 120, 246)'
    },
    extra: {
        flex: 2
    }
})