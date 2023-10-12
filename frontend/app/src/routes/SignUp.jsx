import * as React from "react";
import SignUpForm from "../components/SignUpForm";
import { useEffect } from "react";
/* lib */
import { getUser } from "../lib/firebase/auth";
/* router */
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const navigate = useNavigate();
    useEffect(() => {
        const register = async () => {
            const user = await getUser();
            if (user) {
                navigate("/board");
            } else {
                console.log("ログインしていません。");
            }
        };

        register();
    }, [navigate]);

    return <SignUpForm />;
}
