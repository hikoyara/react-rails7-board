import { auth } from "../config";
/* firebase */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export const signUp = async (email, password) => {
    // createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         console.log(userCredential.user.uid);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("サインアップ成功", userCredential.user.uid);
        return userCredential;
    } catch (error) {
        console.error("サインアップエラー", error);
        throw error;
    }
};

export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("サインイン成功", userCredential.user.uid);
        return userCredential;
    } catch (error) {
        console.error("サインインエラー", error);
        throw error;
    }
};

export const getUser = async () => {
    return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    });
};

export const logout = async () => {
    try {
        await signOut(auth);
        return true;
    } catch (error) {
        console.error("ログアウトエラー:", error);
        return false;
    }
};
