import 'react-native-gesture-handler';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { SafeAreaAndroid } from './Components/AndroidSafeView';
import { useContext, useState } from 'react';
import PhotoCaptureScreen from './Components/Screens/PhotoCaptureScreen';
import MapScreen from './Components/Screens/MapScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './Components/Screens/LoginScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Components/Screens/HomeScreen';
import LoggedIn from './LoggedIn';
import LogoScreen from './Components/Screens/AttendenceMarkedSuccessfullyScreen';
import CameraScreen from './Components/Screens/CameraScreen';
import LandingScreen from './Components/Screens/LandingScreen';
import RegisterScreen from './Components/Screens/RegisterScreen';

import Direct from './Direct';
import AuthProvider, { AuthContext } from './AuthProvider';

const Root = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    const Drawer = createDrawerNavigator();
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    //const [signedIn, setSignedIn] = useState(true)
    return (
        <>
            <StatusBar />
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    {!isLoggedIn ? (
                        <>
                            <Stack.Screen name="Home" component={HomeScreen} />
                            <Stack.Screen name="register" component={RegisterScreen} />
                            <Stack.Screen name="Login" component={LoginScreen} />
                        </>

                    ) : (
                        <Stack.Screen screenOptions={{ headerShown: false }} name="LoggedIn" component={LoggedIn} />
                    )
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default Root