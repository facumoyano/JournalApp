import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const drawerWidth = 280;

const JournalLayout = ({ children }) => {
    return (
        <Box
            sx={{ display: "flex" }}
            className="animate__animated animate__fadeIn animate__faster"
        >
            <Navbar drawerWidth={drawerWidth} />

            <SideBar drawerWidth={drawerWidth} />

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};

export default JournalLayout;
