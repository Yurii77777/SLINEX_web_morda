import { Box, Typography } from "@mui/material/";
import PT from "prop-types";

import { theme } from "./PriceContainerTheme";

export const PriceContainer = ({ isInStock, rrp_UAH }) => {
    return (
        <Box sx={theme.container}>
            <Typography
                sx={
                    isInStock
                        ? theme.isInStockParagraph
                        : theme.outOfStockParagraph
                }
            >
                {isInStock ? "В наявності" : "Очікуємо"}
            </Typography>

            <Typography sx={theme.priceParagraph}>{rrp_UAH} грн</Typography>
        </Box>
    );
};

PriceContainer.propTypes = {
    isInStock: PT.bool.isRequired,
    rrp_UAH: PT.number.isRequired,
};
