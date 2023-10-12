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
        getUser && navigate("/board");
    }, [navigate]);

    return <SignUpForm />;
}
