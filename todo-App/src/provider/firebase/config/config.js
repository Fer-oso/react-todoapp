import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBB1dwpGGgSCdwXMEN3zwJe9wXdsW4y-CM",
  authDomain: "react-todo-proyect.firebaseapp.com",
  projectId: "react-todo-proyect",
  storageBucket: "react-todo-proyect.appspot.com",
  messagingSenderId: "771326319793",
  appId: "1:771326319793:web:53cb5a531a864f55025690",
};

export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);

export const firebaseStore = getFirestore(firebaseApp);