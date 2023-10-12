import { auth } from "../config";
/* firebase */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential.user.uid);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential.user.uid);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getUser = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            return true;
        } else {
            return false;
        }
    });
};
