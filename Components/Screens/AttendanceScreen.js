import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Avatar, Image } from '@rneui/base';
import { Calendar } from 'react-native-calendars';
import { Octicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");

const AttendanceScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Preview Attendance',
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
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text style={styles.Calendar__text}>Calendar</Text>
      <Calendar
        style={styles.Calendar}
        theme={{

          backgroundColor: 'rgb(232, 234, 237)',
          calendarBackground: 'rgb(232, 234, 237)',
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'black',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: 'blue',
          indicatorColor: 'blue',
          textDayFontWeight: '500',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '500',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16
        }}

        enableSwipeMonths={true}
        markedDates={{
          '2022-07-06': { selected: true, marked: true, selectedColor: 'rgb(83, 189, 235)' },
          '2022-07-01': { selected: true, marked: true, selectedColor: '#FFC107' },
          '2022-07-07': { selected: true, marked: true, selectedColor: '#FF5722' },
        }}

      />
      <View style={styles.info}>
        <View style={styles.info}>
          <Octicons name="dot-fill" size={24} color="rgb(83, 189, 235)" style={{ marginRight: 5 }} />
          <Text>Present</Text>
        </View>

        <View style={styles.info}>
          <Octicons name="dot-fill" size={24} color="#FF5722" style={{ marginRight: 5 }} />
          <Text>Absent</Text>
        </View>

        <View style={styles.info}>
          <Octicons name="dot-fill" size={24} color="#FFC107" style={{ marginRight: 5 }} />
          <Text>Holiday</Text>
        </View>
      </View>
    </View>
  )
}

export default AttendanceScreen

const styles = ScaledSheet.create({
  container: {
    backgroundColor: 'white',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  container__text: {
    fontSize: '25@ms',
    textAlign: 'center',
    height: "auto",
    textAlignVertical: 'center',
    color: 'white',
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    margin: '6@ms',
    justifyContent: 'space-evenly',
  },
  Calendar: {
    paddingBottom: '5@ms',
    margin: "20@ms",
    elevation: 25,
    borderRadius: '20@ms',
  },
  Calendar__text: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: "25@ms",
    marginLeft: "25@ms",
    marginTop: "10@ms"
  },
})