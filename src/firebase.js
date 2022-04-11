import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAq4GVyEwRplQ7G2DIYVYn5S-0gsDTbZ60",
    authDomain: "fir-react-auth-fab61.firebaseapp.com",
    projectId: "fir-react-auth-fab61",
    storageBucket: "fir-react-auth-fab61.appspot.com",
    messagingSenderId: "51831720084",
    appId: "1:51831720084:web:68272f8796efbb6f468c81"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;