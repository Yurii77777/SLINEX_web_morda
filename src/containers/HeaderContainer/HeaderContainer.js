import { Box, Paper, IconButton } from "@mui/material/";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
// import PT from 'prop-types';

import { theme } from "./HeaderContainerTheme";
import slinexLogo from "../../assets/img/slinex_logo.svg";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export const HeaderContainer = () => {
    return (
        <Item sx={theme.container}>
            <Link
                to="/"
                title="Перейти на головну сторінку"
                style={theme.logoImg}
            >
                <Box component="img" alt="productName" src={slinexLogo} />
            </Link>

            <Box>
                <IconButton aria-label="Додати в корзину" size="large">
                    <ShoppingCartIcon fontSize="inherit" />
                </IconButton>
            </Box>
        </Item>
    );
};

// HeaderContainer.propTypes = {

// };
