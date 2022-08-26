import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect, useLayoutEffect, useContext } from 'react';
import { AuthContext } from '../../AuthProvider';
import CustomButton from '../Assets/CustomButton';
import UserIcon from '../Assets/UserIcon';
import { db, auth } from "../../Firebase/firebase"
import { addDoc, setDoc, serverTimestamp, doc, collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";



const LandingScreen = ({ route, navigation }) => {
    const [time, setTime] = useState("");
    const [date, setDate] = useState(new Date().toDateString())
    const [timeRemaining, SetTimeRemaining] = useState("")
    const [checkedIn, setCheckedIn] = useState(false)
    const { state, isverified, setisverified } = useContext(AuthContext)
    const [checkintime, setcheckintime] = useState([]);
    const [cnt, setcnt] = useState(0)
    const [flag, setflag] = useState(false)
    // console.log(state);


    useEffect(() => {

        const init = async () => {
            const q = await query(collection(db, `id-${state.id}`), orderBy("timestamp", "desc"), limit(1));
            const querySnapshot = await getDocs(q);
            // console.log(querySnapshot.data());

            querySnapshot.forEach((doc) => {

                const newDoc = doc.data();

                if (cnt === 0) {
                    console.log("--------------------------")
                    console.log(newDoc);
                    if (newDoc.CheckIn) {
                        const date = new Date(newDoc.CheckIn.seconds * 1000).toLocaleTimeString();
                        setcheckintime(date);
                        setCheckedIn(true);
                    } else if (newDoc.CheckOut) {
                        setCheckedIn(false);
                    }
                }
                let temp = cnt + 1;
                setcnt(temp);


            })
        }

        

        { state !== undefined && init() };


    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <UserIcon />
                )
            }
        })
    }, [])
    console.log(state);
    const HandleIn = async () => {

        if (!isverified) {
            navigation.navigate("mapscreen")
        } else if (state !== undefined) {
            const docData = {
                CheckIn: serverTimestamp(),
                timestamp: serverTimestamp(),
            }
            const docRef = await addDoc(collection(db, `id-${state.id}`), docData);

            const q = await query(collection(db, `id-${state.id}`), orderBy("timestamp", "desc"), limit(1));
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {

                const newDoc = doc.data();
                if (cnt === 0) {
                    console.log(doc.data(), "kmrvgijnerqto");
                    if (newDoc.CheckIn) {
                        const date = new Date(newDoc.CheckIn.seconds * 1000).toLocaleTimeString();
                        // console.log(newD)
                        setcheckintime(date);
                        setCheckedIn(true);
                    } else if (newDoc.CheckOut) {

                        setCheckedIn(false);
                    }
                }
                setcnt(cnt + 1);

            })

            setCheckedIn(true);
        }

    }

    const HandleOut = async () => {

        const docData = {
            CheckOut: serverTimestamp(),
            timestamp: serverTimestamp(),
        }

        const docRef = await addDoc(collection(db, `id-${state.id}`), docData);

        const q = await query(collection(db, `id-${state.id}`), orderBy("timestamp", "desc"), limit(1));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            const newDoc = doc.data();
            if (cnt === 0) {
                if (newDoc.CheckOut) {
                    setCheckedIn(false);
                } else {
                    setCheckedIn(true);
                }
            }
            setcnt(cnt + 1);

        })
        setCheckedIn(false);
        setisverified(false);
    }

    let user = (state !== undefined && state.name);
    // console.log(state); 
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer} >
                <Text style={styles.text} >
                    Welcome {user}
                </Text>
                {!checkedIn &&
                    <Text style={[styles.text, { fontSize: 22, fontWeight: 'normal', paddingBottom: 20 }]}>
                        Let's get to work! :)
                    </Text>
                }
                <Text style={[styles.text, { fontSize: 27, paddingBottom: 5 }]}>
                    {date}

                </Text>
            </View>
            {checkedIn &&
                <View style={styles.timeContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                        <Text style={[styles.text, { fontSize: 22, textTransform: 'capitalize', paddingRight: 10 }]}>
                            check in time :-
                        </Text>
                        <Text style={[styles.text, { fontSize: 22, textTransform: 'capitalize', color: 'green' }]}>
                            {checkintime}
                        </Text>
                    </View>

                </View>

            }

            {!checkedIn &&
                <View style={styles.buttonsContainer}>
                    <CustomButton onPress={() => HandleIn()} title='Check-in' />
                </View>
            }
            {checkedIn &&
                <View style={styles.buttonsContainer}>
                    <CustomButton title='checkout' onPress={() => HandleOut()} textStyle={{ fontSize: 22, fontWeight: '500' }} style={{ backgroundColor: 'red', height: 50 }} />
                </View>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    buttonsContainer: {
        flex: 4,
    },
    text: {
        fontSize: 45,
        fontWeight: '600',
        color: 'rgb(83, 100, 246)',
        paddingBottom: 10
    },
    timeContainer: {
        alignItems: 'center',
        flex: 2,
        justifyContent: 'center'
    }
})

export default LandingScreen