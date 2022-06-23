import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../auth/pages/LoginPage";
import RegisterPage from "../auth/pages/RegisterPage";

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />

            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    );
};

export default AuthRoutes;
