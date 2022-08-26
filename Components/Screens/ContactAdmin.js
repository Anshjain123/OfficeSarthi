import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Avatar, Button, Input } from '@rneui/base'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { moderateScale } from 'react-native-size-matters';
const ContactAdmin = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Contact Admin',
            headerShadowVisible: false,
            swipeEnabled: true,
            headerRight: () => (
                <View>
                    <Avatar rounded source={{ uri: "https://wallpaperaccess.com/full/749931.jpg" }} containerStyle={{ marginRight: 20 }} />
                </View>
            ),
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#3700B3'
            }
        })
    }, [])

    return (
        <KeyboardAvoidingView style={{ backgroundColor: 'white', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            <View style={{ flex: 0.2 }}>
                <Text style={{ color: '#6200EE', fontSize: moderateScale(45, 0.5), textAlign: 'center', fontWeight: '700' }}>Write your issues here <MaterialIcons name="contact-support" size={42} color="#673AB7" /></Text>
            </View>
            <View style={{ flex: 0.7, padding: 15 }}>
                <ScrollView style={{ height: '100%', display: 'flex', flexDirection: 'column' }} showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 0.2 }}>
                        <Input
                            placeholder='Full Name or Employee Id'
                            label="Enter your Name or Employee Id"
                            labelStyle={{
                                color: 'black',
                                marginBottom: 15
                            }}
                            leftIcon={<FontAwesome name="user" size={24} color="gray" style={{ marginRight: 5 }} />}
                        />
                    </View>
                    <View style={{ flex: 0.2 }}>
                        <Input
                            placeholder='Issue'
                            label="Write your issue"
                            labelStyle={{
                                color: 'black',
                                marginBottom: 15
                            }}
                            leftIcon={<MaterialIcons name="contact-support" size={24} color="gray" style={{ marginRight: 5 }} />}
                        />
                    </View>
                    <View>
                        <Input
                            placeholder='Description'
                            label="Describe your issue"
                            labelStyle={{
                                color: 'black',
                                marginBottom: 15
                            }}
                            leftIcon={<MaterialIcons name="description" size={24} color="gray" style={{ marginRight: 5 }} />}
                        />
                    </View>
                    <View>
                        <Button raised={true} color="#6200EE" type="solid" title="Submit" onPress={() => console.log("Upload Submit button clicked")} />
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}

export default ContactAdmin

const styles = StyleSheet.create({})