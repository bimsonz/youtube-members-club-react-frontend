importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp(// For Firebase JS SDK v7.20.0 and later, measurementId is optional
{
    apiKey: "AIzaSyAzDmrdiQ4FJd7NMKOVU4wuuXUWz2387Qs",
    authDomain: "splitgate-club.firebaseapp.com",
    projectId: "splitgate-club",
    storageBucket: "splitgate-club.appspot.com",
    messagingSenderId: "627302450409",
    appId: "1:627302450409:web:74d54795453efc93991c78",
    measurementId: "G-L2P527SMTM"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});