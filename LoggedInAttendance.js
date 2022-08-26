import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './Components/Screens/LandingScreen';
import PhotoCaptureScreen from './Components/Screens/PhotoCaptureScreen';
import MapScreen from './Components/Screens/MapScreen';
import CameraScreen from './Components/Screens/CameraScreen';
import LogoScreen from './Components/Screens/AttendenceMarkedSuccessfullyScreen';

const LoggedInAttendance = ({ navigation }) => {
    const CustomStack = createNativeStackNavigator();
    return (
        <CustomStack.Navigator initialRouteName='Attendance' screenOptions={{ headerShown: false }}>
            <CustomStack.Screen name='Attendance' component={LandingScreen} />
            <CustomStack.Screen name='mapscreen' component={MapScreen} />
            <CustomStack.Screen name="photocapture" component={PhotoCaptureScreen} />
            <CustomStack.Screen name="camera" component={CameraScreen} />
            <CustomStack.Screen name="AttendanceMarked" component={LogoScreen} />

        </CustomStack.Navigator>
    )
}

export default LoggedInAttendance