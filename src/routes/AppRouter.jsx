import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import useCheckAuth from "../hooks/useCheckAuth";
import CheckingAuth from "../ui/components/CheckingAuth";
import JournalRoutes from "../journal/routes/JournalRoutes";
import AuthRoutes from "./AuthRoutes";

const AppRouter = () => {
    const { status } = useCheckAuth();
    if (status === "checking") {
        return <CheckingAuth />;
    }
    return (
        <Routes>
            {status === "authenticated" ? (
                <Route path="/*" element={<JournalRoutes />} />
            ) : (
                <Route path="/auth/*" element={<AuthRoutes />} />
            )}

            <Route path="/*" element={<Navigate to="/auth/login" />} />
            {/* // Login y registro */}
            {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}

            {/* JournalApp */}
            {/* <Route path="/*" element={<JournalRoutes />} /> */}
        </Routes>
    );
};

export default AppRouter;
