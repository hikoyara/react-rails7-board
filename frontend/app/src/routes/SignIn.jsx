import * as React from "react";
import SignInForm from "../components/SignInForm";
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
                navigate("/home");
            } else {
                console.log("ログインしていません。");
            }
        };

        register();
    }, [navigate]);

    return <SignInForm />;
}
