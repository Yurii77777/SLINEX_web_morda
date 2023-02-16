import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material/";

import { HeaderContainer } from "../../containers/HeaderContainer/HeaderContainer";
import { ProductListContainer } from "../../containers/ProductListContainer/ProductListContainer";
import { MainPage } from "../../pages/MainPage/MainPage";
import { ProductDetailPage } from "../../pages/ProductDetailPage/ProductDetailPage";

import { theme } from "./AppTheme";

export const App = () => {
    const tg = window.Telegram.WebApp;

    useEffect(() => {
        tg.ready();
    }, [tg]);

    return (
        <Box sx={theme.wrapper}>
            <HeaderContainer />

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
                <Route
                    path="/product/:id"
                    element={<ProductDetailPage />}
                ></Route>
            </Routes>
        </Box>
    );
};
