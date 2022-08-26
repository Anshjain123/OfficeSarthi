import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, TouchableNativeFeedback, Dimensions } from 'react-native'
import React, { useContext, useLayoutEffect, useState, useEffect } from 'react'
import { Image, Input } from "@rneui/themed";
import { Button } from "@rneui/base";
import { useHeaderHeight } from '@react-navigation/elements';
import { AuthContext } from '../../AuthProvider';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from "../../Firebase/firebase"
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



const LoginScreen = ({ navigation }) => {
  const { isLoggedIn, setIsLoggedIn, state, dispatch, setisverified } = useContext(AuthContext)

  

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Login",
      headerStyle: { backgroundColor: '#3700B3' },
      headerTitleStyle: { color: "white" },
      headerTintColor: "white",
      headerTitleAlign: 'center',
    })
  }, [navigation])
  const headerHeight = useHeaderHeight();

  const { width, height } = Dimensions.get('window');


  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("")

  const HandleLogin = () => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch({
          payload: {
            id: email,
            name: userCredential.user.displayName
          }
        })
        setIsLoggedIn(!isLoggedIn);
        setisverified(false); 
        // console.log(userCredential);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  return (
    <KeyboardAvoidingView style={{ padding: 20, width: '100%', height: height - headerHeight, display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }} >
      <View style={{ display: 'flex', flexDirection: "column", flex: 0.6, justifyContent: 'space-around' }} >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View >
            <Text style={{ fontSize: 40, color: '#3700B3' }}>Welcome back!</Text>
          </View>

          <View>

            <View>
              <Input
                placeholder='Full Name'
                label="Enter your Name"
                labelStyle={{ color: 'black', marginBottom: 5 }}
                leftIcon={<FontAwesome name="user" size={24} color="grey" />}
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

            <View style={{ marginBottom: 15 }}>
              <Button disabled={(password.length <= 5 || email === "") ? true : false} raised color="#5379f6" type="outline" title="Continue" TouchableComponent={TouchableNativeFeedback} onPress={() => HandleLogin()} />
            </View>
          </View>
        </ScrollView>



      </View>
    </KeyboardAvoidingView>


  )
}

export default LoginScreen

const styles = StyleSheet.create({})