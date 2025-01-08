import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    getAuth
 } from "firebase/auth";
import { addDoc,
     collection, 
     getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA624OMwDJNU0QyvPZubSZXmpGvIxffi3E",
  authDomain: "netflix-clone-96aff.firebaseapp.com",
  projectId: "netflix-clone-96aff",
  storageBucket: "netflix-clone-96aff.firebasestorage.app",
  messagingSenderId: "497775036150",
  appId: "1:497775036150:web:34b25ed50aed2609d94ed7"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 

const signUp = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });

   } catch (error) {
    console.log(error);
    alert(error);
   }
}


const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword (auth, email, password);
    } catch (error) {
        console.log(error);
        alert(error);

    }
}

const logout =()=> {
    signOut(auth);
}

export{auth, login, logout, signUp , db};