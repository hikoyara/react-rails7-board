import { db } from "../config";
/* firebase */
import { collection, addDoc } from "firebase/firestore";

export const createMember = async (id, password) => {
    try {
        const member = await addDoc(collection(db, "members"), {
            id,
            password,
        });
        console.log("組合員登録成功");
        return member;
    } catch (error) {
        console.error("組合員登録エラー", error);
        throw error;
    }
};
