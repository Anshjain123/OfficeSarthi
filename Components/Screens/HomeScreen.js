import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, Dimensions, ScrollView } from 'react-native'
import React, { useLayoutEffect, useEffect, useContext } from 'react'
import { Button } from '@rneui/base';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import { db, auth } from "../../Firebase/firebase"
import { AuthContext } from '../../AuthProvider';


const { width, height } = Dimensions.get('window')
const HomeScreen = ({ route, navigation }) => {
  const { isLoggedIn, setIsLoggedIn, state, dispatch } = useContext(AuthContext)
  console.log(route.params);
  useEffect(() => {
    let unsubscribe = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        console.log(authuser)


        dispatch({
          payload: {
            id: authuser.email,
            name: authuser.displayName
          }

        })


        // console.log(authuser.email, authuser.displayName); 

        setIsLoggedIn(true);
      }
    })
    return unsubscribe;
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Home',
      headerShadowVisible: false,
      headerShown: false,
      swipeEnabled: false
    })
  }, [navigation])


  return (
    <View style={styles.homescreen__header} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={{ paddingBottom: 50 }}>
          <Text style={styles.header__text} >
            OfficeSarthi
          </Text>
          <Text style={styles.header__descText}>
            Your smart attendance tracker
          </Text>
        </View>
        <View style={[styles.homescreen__image, styles.image__view]}>
          <Image style={styles.homescreen__image} source={require("../images/attendance.jpg")} />
        </View>
      </View>

      {/* <View>
        <Text style={styles.display__text}>
          Mark Attendance
        </Text>
        <Text style={{ textAlign: 'center', color: 'gray' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, corrupti?
        </Text>
      </View> */}
      <View style={styles.homescreen__bottombtn}>
        {/* <Button color="#6200EE" title="Login" type="outline" onPress={() => navigation.navigate("Login")} raised containerStyle={{ width: 140 }} /> */}
        <View style={{ display: 'flex', flex: 3 }}>
          <Button color="#6200EE" title="Login to Continue" onPress={() => navigation.navigate("Login")} raised containerStyle={{ width: 350 }} />
        </View>
        <View style={{ flex: 1, flexDirection: 'row', borderTopWidth: 0.3, width: "100%", justifyContent: "center", alignItems: 'center', borderTopColor: 'grey' }}>
          <Text style = {{color:'grey'}}>New to OfficeSarthi?</Text>
          {/* <Text }></Text> */}
          <TouchableOpacity onPress={() => navigation.navigate("register")}>
            <Text style={{ fontWeight: '800' }}>  Register here</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}
export default HomeScreen

const styles = ScaledSheet.create({

  homescreen__image: {
    width: width - 60,
    height: height / (3.5),
    display: 'flex',
    alignSelf: 'center',
    borderRadius: "15@ms"
  },
  homescreen__bottombtn: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: width,
    flex: 4,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  homescreen__header: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'scroll',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    flex: 1,
    height: '100%',
  },
  header__text: {
    textAlign: 'center',
    fontSize: '35@ms',
    fontFamily: 'normal',
  },
  header__descText: {
    textAlign: 'center',
    fontSize: '15@ms',
    color: 'gray'
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 8
  },
  display__text: {
    textAlign: 'center',
    fontSize: '20@ms',
  },
  image__view: {
    elevation: '15@ms',
  }

})