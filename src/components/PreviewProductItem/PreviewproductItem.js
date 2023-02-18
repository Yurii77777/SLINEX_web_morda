import { Box, Grid, Paper, IconButton } from "@mui/material/";
import { styled } from "@mui/material/styles";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";
import PT from "prop-types";

import { ProductTitleComponent } from "../UIelements/ProductTitleComponent/ProductTitleComponent";
import { ButtonComponent } from "../UIelements/ButtonComponent/ButtonComponent";
import { PriceContainer } from "../../containers/PriceContainer/PriceContainer";

import { theme } from "./PreviewproductItemTheme";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export const PreviewProductItem = ({
    productName,
    primeImg,
    stock,
    rrp_UAH,
    id,
    category,
}) => {
    const isInStock = stock !== "0" ? true : false;

    return (
        <Grid item xs={6} md={3}>
            <Item sx={theme.contentContainer}>
                <ProductTitleComponent
                    productName={productName}
                    variant={"h2"}
                />

                <Box component="img" alt="productName" src={primeImg} />

                <PriceContainer isInStock={isInStock} rrp_UAH={rrp_UAH} />

                <Box sx={theme.btnsContainer}>
                    <Link to={`/product/${id}`} state={{ id, category }}>
                        <ButtonComponent
                            btnTitle={"Детально"}
                            variant={"contained"}
                            size={"small"}
                        />
                    </Link>

                    <IconButton aria-label="Add to shopping cart" size="large">
                        <LocalMallIcon fontSize="inherit" />
                    </IconButton>
                </Box>
            </Item>
        </Grid>
    );
};

PreviewProductItem.propTypes = {
    id: PT.number.isRequired,
    productName: PT.string.isRequired,
    primeImg: PT.string.isRequired,
    stock: PT.string.isRequired,
    rrp_UAH: PT.number.isRequired,
    category: PT.string.isRequired,
};
