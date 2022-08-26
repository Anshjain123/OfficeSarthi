import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyAF_rUz6ZWDS_w6Molr6Pgr5HW4vAg3Dd0",
    authDomain: "officesarthi-bafae.firebaseapp.com",
    projectId: "officesarthi-bafae",
    storageBucket: "officesarthi-bafae.appspot.com",
    messagingSenderId: "583674071117",
    appId: "1:583674071117:web:d210f7e221ec8a2a3cf404"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app); 
