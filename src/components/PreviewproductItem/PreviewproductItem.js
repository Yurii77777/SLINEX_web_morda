import { Box, Grid, Paper, Typography, IconButton } from "@mui/material/";
import { styled } from "@mui/material/styles";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PT from "prop-types";

import { ButtonComponent } from "../UIelements/ButtonComponent/ButtonComponent";

import { theme } from "./PreviewproductItemTheme";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export const PreviewproductItem = ({
    productName,
    primeImg,
    stock,
    rrp_UAH,
}) => {
    const isInStock = stock !== "0" ? true : false;

    return (
        <Grid item xs={6} md={3}>
            <Item sx={theme.contentContainer}>
                <Typography variant="h2" sx={theme.title}>
                    {productName}
                </Typography>

                <Box component="img" alt="productName" src={primeImg} />

                <Box sx={theme.descriptionContainer}>
                    <Typography
                        sx={
                            isInStock
                                ? theme.isInStockParagraph
                                : theme.outOfStockParagraph
                        }
                    >
                        {isInStock ? "В наявності" : "Очікуємо"}
                    </Typography>

                    <Typography sx={theme.priceParagraph}>
                        {rrp_UAH} грн
                    </Typography>
                </Box>

                <Box sx={theme.btnsContainer}>
                    <ButtonComponent
                        btnTitle={"Детально"}
                        variant={"contained"}
                        size={"small"}
                    />

                    <IconButton aria-label="Add to shopping cart" size="large">
                        <LocalMallIcon fontSize="inherit" />
                    </IconButton>
                </Box>
            </Item>
        </Grid>
    );
};

PreviewproductItem.propTypes = {
    productName: PT.string.isRequired,
    primeImg: PT.string.isRequired,
    stock: PT.string.isRequired,
    rrp_UAH: PT.number.isRequired,
};
