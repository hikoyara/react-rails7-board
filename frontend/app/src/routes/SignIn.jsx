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
        getUser && navigate("/board");
    }, [navigate]);

    return <SignInForm />;
}
