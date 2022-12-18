import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material/";
import { Close } from "@mui/icons-material/";

import { MainPage } from "../../pages/MainPage/MainPage";

import { theme } from "./AppTheme";

export const App = () => {
    const tg = window.Telegram.WebApp;

    useEffect(() => {
        tg.ready();
    }, [tg]);

    const onClose = () => {
        tg.close();
    };

    return (
        <Box sx={theme.wrapper}>
            <Close sx={theme.closeBtn} onClick={onClose} />

            <Routes>
                <Route path="/" element={<MainPage />}></Route>
            </Routes>
        </Box>
    );
};
