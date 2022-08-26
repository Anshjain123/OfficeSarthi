import { View, Text, Pressable, StyleSheet,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const CustomButton = (props) => {
    return (
        <View style={[styles.buttonContainer, props.style]}  >
            <TouchableOpacity
                onPress={props.onPress}

            >
                <Text style={[styles.buttonContent, props.textStyle]}>{props.title}</Text>
            </TouchableOpacity>
        </View>

    )
}



const styles = StyleSheet.create({
    buttonContainer: {
        height: 41,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        elevation: 4,
        width: 230,
        backgroundColor: '#6200EE',
        shadowColor: 'black',
        shadowOpacity: 0.175,
        borderRadius: 2,
        shadowOffset: { width: 1, height: 1 },
    },
    buttonContent: {
        color: 'white',
        fontSize: 20,
        textTransform: 'capitalize'
    }
})

export default CustomButton;