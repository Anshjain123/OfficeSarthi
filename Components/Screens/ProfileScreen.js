import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import CustomButton from '../Assets/CustomButton'
import UserIcon from '../Assets/UserIcon'

const ProfileScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Profile',
      headerShadowVisible: false,
      swipeEnabled: true,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#3700B3'
      }
    })
  }, [])
  return (
    <View style={styles.superContainer}>

      <View style={styles.photoContainer}>
        <View style={styles.photoIconContainer}>
          <Pressable
            style={styles.photoIconFlexContainer}
            android_ripple={{ color: 'white', borderless: true }}
          >
            <UserIcon style={styles.userIcon} />
          </Pressable>
        </View>
      </View>
      <View style={styles.detailsContainer} >
        <Text style={styles.detailsText} >Name - username</Text>
        <Text style={[styles.detailsText, { textTransform: 'uppercase' }]}>DOB - 12/12/12</Text>
        <Text style={styles.detailsText}>Employee ID - 6465</Text>
        <Text style={styles.detailsText}>Address - N/A</Text>
      </View>
      <View style={styles.buttonContainer} >
        <CustomButton title='Back' />
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  superContainer: {
    flex: 1
  },
  photoContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  photoIconContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6200EE',
    borderRadius: 300,
    width: 250,
    height: 250,
  },
  photoIconFlexContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  detailsContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'center'
  },
  detailsText: {
    fontSize: 25,
    fontWeight: '600',
    textTransform: 'capitalize'

  },
  userIcon: {
    color: 'white',
    fontSize: 60,
    paddingLeft: 20
  }
})