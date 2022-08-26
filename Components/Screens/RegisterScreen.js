import { Image, Input } from "@rneui/themed";
import { View, Text, Button, TouchableNativeFeedback, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native'
import React, { useState, useContext } from 'react';
import { useHeaderHeight } from '@react-navigation/elements';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AuthContext } from '../../AuthProvider';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import { db, auth } from "../../Firebase/firebase"
const RegisterScreen = ({ navigation }) => {
    const headerHeight = useHeaderHeight();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [photoURL, setphotoURL] = useState("");
    const [name, setname] = useState("")
    const { width, height } = Dimensions.get('window');
    const { setIsLoggedIn, dispatch, isLoggedIn  } = useContext(AuthContext);
    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((authuser) => {
                updateProfile(authuser.user, {
                    photourl: photoURL ||
                        "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
                })
                dispatch({
                    payload:{
                        id:email,
                        name:name
                    }
                })

            }).catch((err) => alert(err.message))

            setIsLoggedIn(!isLoggedIn);

    }

    return (
        <KeyboardAvoidingView style={{ padding: 20, width: '100%', height: height - headerHeight, display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }} >
            <View style={{ display: 'flex', flexDirection: "column", flex: 0.6, justifyContent: 'space-around' }}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View>
                        <Input
                            placeholder='Full Name'
                            label="Enter your name"
                            labelStyle={{ color: 'black', marginBottom: 5 }}
                            leftIcon={{ type: 'Entypo', name: 'mail', color: 'gray', marginRight: 3 }}
                            keyboardType="default"
                            onChangeText={(text) => setname(text)}
                        />
                    </View>

                    <View>
                        <Input
                            placeholder='email@address.com'
                            label="Enter your mail"
                            labelStyle={{ color: 'black', marginBottom: 5 }}
                            leftIcon={{ type: 'Entypo', name: 'mail', color: 'gray', marginRight: 3 }}
                            keyboardType="email-address"
                            onChangeText={(text) => setemail(text)}
                        />
                    </View>
                    <View>
                        <Input
                            placeholder='Password'
                            label="Enter your Password"
                            labelStyle={{ color: 'black', marginBottom: 5 }}
                            leftIcon={<Entypo name="lock" size={24} color="grey" />}
                            keyboardType="visible-password"
                            secureTextEntry={true}
                            onChangeText={(pass) => setpassword(pass)}
                        />
                    </View>
                    <View>
                        <Input
                            placeholder='Photo upload'
                            label="Enter your Photo URL"
                            labelStyle={{ color: 'black', marginBottom: 5 }}
                            leftIcon={<Foundation name="photo" size={24} color="grey" />}
                            onChangeText={(text) => setphotoURL(text)}
                            keyboardType="number-pad"
                        />
                    </View>
                    <View>
                        <Button disabled={(email.length === 0 || password.length <= 5 ? true : false)} onPress={() => handleRegister()} raised color="#3700B3" type="solid" title="Continue" TouchableComponent={TouchableNativeFeedback} />
                    </View>
                </ScrollView>



            </View>
        </KeyboardAvoidingView >
    )
}

export default RegisterScreen