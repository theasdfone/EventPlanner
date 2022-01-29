import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAckH0jz6LcATvMN366HhKrNcdmhlN-D6s",
    authDomain: "event-planning-app-f5523.firebaseapp.com",
    projectId: "event-planning-app-f5523",
    storageBucket: "event-planning-app-f5523.appspot.com",
    messagingSenderId: "847644464674",
    appId: "1:847644464674:web:57269191d9ecbdd491dc7b",
    measurementId: "G-L6N7BCTTQ4"
};

export const app = initializeApp(firebaseConfig);