import { StatusBar, StyleSheet } from "react-native";

export const SafeAreaAndroid = StyleSheet.create({
    SafeArea: {
        paddingTop:StatusBar.currentHeight
    }
}) 