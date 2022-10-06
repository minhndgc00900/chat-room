import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-nXmPxQdpuN9Z0pIOWB1sacf6hwNZg7w",
  authDomain: "chat-room-98748.firebaseapp.com",
  projectId: "chat-room-98748",
  storageBucket: "chat-room-98748.appspot.com",
  messagingSenderId: "370097747557",
  appId: "1:370097747557:web:25b6f19f8f60acf660b88c",
  measurementId: "G-F16WELFC8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

async function loginWithGoogle() {
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);

        const { user } = await signInWithPopup(auth, provider);
        console.log(22, user);
        return { uid: user.uid, displayName: user.displayName };
    } catch (error) {
        if (error.code !== 'auth/cancelled-popup-request') {
            console.error(error);
        }
        return null;
    }
}

export { loginWithGoogle };