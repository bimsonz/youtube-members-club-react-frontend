import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { onMessage, getMessaging } from "firebase/messaging";


const fireBaseConfig = {
    apiKey: "AIzaSyAzDmrdiQ4FJd7NMKOVU4wuuXUWz2387Qs",
    authDomain: "splitgate-club.firebaseapp.com",
    projectId: "splitgate-club",
    storageBucket: "splitgate-club.appspot.com",
    messagingSenderId: "627302450409",
    appId: "1:627302450409:web:74d54795453efc93991c78",
    measurementId: "G-L2P527SMTM"
};

export const app = initializeApp(fireBaseConfig)

const messaging = getMessaging(app);

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });

export const auth = getAuth()
export default app
