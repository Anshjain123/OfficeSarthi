import { View, Text } from 'react-native'
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './Components/Screens/ProfileScreen';
import AttendanceScreen from './Components/Screens/AttendanceScreen';
import ContactAdmin from './Components/Screens/ContactAdmin';
import CustomDrawer from './Components/CustomDrawer';
import { Octicons } from '@expo/vector-icons';
import AboutScreen from './Components/Screens/AboutScreen';

import LoggedInAttendance from './LoggedInAttendance';


const LoggedIn = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator initialRouteName="AttendanceCustom" screenOptions={{ drawerType: 'back', drawerLabelStyle: { marginLeft: -17 }, drawerStyle: { width: 320, borderWidth: 3, borderColor: '#673AB7' } }} drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen name="AttendanceCustom" component={LoggedInAttendance} options={{ drawerIcon: () => (<Octicons name="dot-fill" size={20} color="#3700B3" />) }} />
            <Drawer.Screen name="About" component={AboutScreen} options={{ drawerIcon: () => (<Octicons name="dot-fill" size={20} color="#3700B3" />) }} />
            <Drawer.Screen name="Profile" component={ProfileScreen} options={{ drawerIcon: () => (<Octicons name="dot-fill" size={20} color="#3700B3" />) }} />
            <Drawer.Screen name="prevAttendance" component={AttendanceScreen} options={{ drawerIcon: () => (<Octicons name="dot-fill" size={20} color="#3700B3" />) }} />
            <Drawer.Screen name="contactadmin" component={ContactAdmin} options={{ drawerIcon: () => (<Octicons name="dot-fill" size={20} color="#3700B3" />) }} />

        </Drawer.Navigator>
    )
}

export default LoggedIn;