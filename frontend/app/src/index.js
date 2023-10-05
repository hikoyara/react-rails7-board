import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
/* routes */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Board from "./routes/Board";
/* firebase */
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDR6FWcPKZn3J0WiLqyXKDISMR2CDV_rvs",
    authDomain: "boardapp-56c15.firebaseapp.com",
    projectId: "boardapp-56c15",
    storageBucket: "boardapp-56c15.appspot.com",
    messagingSenderId: "696519991355",
    appId: "1:696519991355:web:a87a2f7d4e59496b2fbc1e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/board" element={<Board />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
