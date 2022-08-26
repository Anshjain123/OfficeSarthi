import { View, Text } from 'react-native'
import React from 'react';



import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const Direct = () => {
    const AttendanceStack = createNativeStackNavigator();
    return (

        <AttendanceStack.Navigator initialRouteName='mapscreen'>
            
        </AttendanceStack.Navigator>

    )
}

export default Direct