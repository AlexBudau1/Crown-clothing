import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA0kcndv6RDWJ4rSckX3QrhYYkYObv_Pc4",
    authDomain: "crown-clothing-db-78482.firebaseapp.com",
    projectId: "crown-clothing-db-78482",
    storageBucket: "crown-clothing-db-78482.appspot.com",
    messagingSenderId: "1085225521429",
    appId: "1:1085225521429:web:274e003e3508fd2e15991c"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {

    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...additionalInformation
            });
        }catch(error){
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
     
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}