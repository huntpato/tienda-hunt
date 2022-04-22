import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAjAL-wrDXQc5VLtbygpnbyvv8u7OZu2RA",
  authDomain: "viveruskicoder.firebaseapp.com",
  projectId: "viveruskicoder",
  storageBucket: "viveruskicoder.appspot.com",
  messagingSenderId: "849610987732",
  appId: "1:849610987732:web:96d115ca19b45581528341"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}