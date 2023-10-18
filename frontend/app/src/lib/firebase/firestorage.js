import { db } from "../config";
/* firebase */
import { collection, addDoc, Timestamp, onSnapshot, query, orderBy } from "firebase/firestore";

export const createMember = async (id, password) => {
    try {
        const member = await addDoc(collection(db, "members"), {
            id,
            password,
            state: "Unauthenticated",
            updatedAt: Timestamp.fromDate(new Date()),
        });
        console.log("組合員登録成功");
        return member;
    } catch (error) {
        console.error("組合員登録エラー", error);
        throw error;
    }
};

export const getMembers = async (callback) => {
    try {
        const ref = collection(db, "members");
        const q = query(ref, orderBy("updatedAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const membersData = [];
            snapshot.forEach((doc) => {
                membersData.push({
                    id: doc.data().id,
                    state: doc.data().state,
                    updatedAt: doc.data().updatedAt,
                });
            });
            callback(membersData);
        });
        return unsubscribe;
    } catch (error) {
        console.error("組合員取得エラー", error);
        throw error;
    }
};
