import React from "react";
import { Route, Routes } from "react-router-dom";
import JournalRoutes from "../journal/routes/JournalRoutes";
import AuthRoutes from "./AuthRoutes";

const AppRouter = () => {
    return (
        <Routes>
            {/* // Login y registro */}
            <Route path="/auth/*" element={<AuthRoutes />} />

            {/* JournalApp */}
            <Route path="/*" element={<JournalRoutes />} />
        </Routes>
    );
};

export default AppRouter;
