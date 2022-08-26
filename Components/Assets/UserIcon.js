import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const UserIcon = (props) => {
    return (
        <FontAwesome onPress={props.onPress} style={[styles.icon, props.style]} name='camera' />
    )
}

export default UserIcon;

const styles = StyleSheet.create({
    icon: {
        color: 'rgb(83, 90, 246)',
        fontSize: 30,
        paddingRight: 15
    }
})