import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material/";

import { MainPage } from "../../pages/MainPage/MainPage";
import { ProductListContainer } from "../../containers/ProductListContainer";

import { theme } from "./AppTheme";

export const App = () => {
    const tg = window.Telegram.WebApp;

    useEffect(() => {
        tg.ready();
    }, [tg]);

    return (
        <Box sx={theme.wrapper}>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route
                    path="/videoIntercoms"
                    element={<ProductListContainer />}
                ></Route>
                <Route
                    path="/outdoorPanels"
                    element={<ProductListContainer />}
                ></Route>
            </Routes>
        </Box>
    );
};
