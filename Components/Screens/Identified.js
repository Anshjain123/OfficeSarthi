import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../Assets/CustomButton'

const Identified = ({ navigation }) => {
    return (
        <View style={styles.superContainer}>
            <View style={styles.identifiedContainer}>
                <View style={styles.identifiedButton}>
                    <Text style={styles.identifiedButtonText}>Successfully identified</Text>
                </View>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.detailsText}>Name : jagjit</Text>
                <Text style={styles.detailsText}>Dept : ee</Text>
                <Text style={styles.detailsText}>Age : 0</Text>
                <Text style={styles.detailsText}>Etc</Text>
                <Text style={styles.detailsText}>Age : 0</Text>
                <Text style={styles.detailsText}>Etc</Text>
                <View>
                    <Text style={styles.detailsText}>check in time</Text>
                </View>
            </View>
            <View style={styles.markAttendanceContainer}>
                <CustomButton onPress={() => navigation.navigate("AttendanceMarked")} style={{ width: 250 }} title='Mark Your Attendance' />
            </View>
        </View>
    )
}

export default Identified

const styles = StyleSheet.create({
    superContainer: {
        flex: 1,

    },
    identifiedContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailsContainer: {
        flex: 4,
        paddingLeft: 50,
        justifyContent: 'space-evenly'
    },
    identifiedButton: {
        height: 40,
        width: 250,
        borderRadius: 30,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailsText: {
        fontSize: 18
    },
    identifiedButtonText: {
        color: 'white',
        fontSize: 18,
    },
    markAttendanceContainer: {
        flex: 2,
        justifyContent: 'center'
    }
})