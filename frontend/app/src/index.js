import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
/* routes */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Board from "./routes/Board";

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
