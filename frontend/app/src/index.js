import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
/* routes */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Home from "./routes/Home";
/** Member **/
import Members from "./routes/Member/Members";
import MemberCreate from "./routes/Member/MemberCreate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/members" element={<Members />} />
                <Route path="/member/create" element={<MemberCreate />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
