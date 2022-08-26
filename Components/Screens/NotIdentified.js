import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../Assets/CustomButton'

const NotIdentified = ({ navigation }) => {
    const instructions = [
        'Lighting is proper',
        'Face is in the Image',
        'Image is not blurry',
        'Multiple faces are not present'
    ]
    const renderItemComponent = (item) => {
        return (
            <Text style={styles.instructionsText}>{item.index + 1}. {item.item}</Text>
        )

    }
    const reTake = () => {
        navigation.navigate("camera");
    }
    return (
        <View style={styles.superContainer} >

            <View style={styles.instructionsContainer}>

                <View style={styles.notIdentifiedButton}>
                    <Text style={styles.notIdentifiedButtonText}>Not Identified</Text>
                </View>
                <View style={styles.instructionsTextContainer}>
                    <Text style={styles.instructionsHeadingText}>Please be carefull that image meets the following criteria</Text>
                    <FlatList
                        renderItem={(item) => renderItemComponent(item)}
                        data={instructions}
                    />
                </View>

            </View>
            <View style={{ display: "flex", flexDirection: 'column', flex: 2, paddingBottom: 8 }}>
                <View style={styles.buttonsContainer}>
                    <CustomButton style={{ width: 170 }} onPress={() => reTake()} title='Retake Photo' />
                    <CustomButton style={{ width: 170 }} title='Contact Admin' />
                </View>

            </View>



        </View>
    )
}

export default NotIdentified;

const styles = StyleSheet.create({
    superContainer: {
        flex: 1
    },
    instructionsContainer: {
        alignItems: 'center',
        flex: 4
    },
    instructionsText: {
        fontSize: 18,
        paddingTop: 10
    },
    instructionsHeadingText: {
        fontSize: 20,
        textAlign: 'center'
    },
    buttonsContainer: {
        flex: 2,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    notIdentifiedButton: {
        height: 40,
        width: 250,
        borderRadius: 30,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    notIdentifiedButtonText: {
        color: 'white',
        fontSize: 18,
    },
    instructionsTextContainer: {
        alignItems: 'center',
        paddingTop: 20
    }
})