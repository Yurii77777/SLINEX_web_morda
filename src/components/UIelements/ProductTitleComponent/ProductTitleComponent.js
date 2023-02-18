import { Typography } from "@mui/material/";
import PT from "prop-types";

import { theme } from "./ProductTitleComponentTheme";

export const ProductTitleComponent = ({ productName, variant }) => {
    return (
        <Typography variant={variant} sx={theme.title}>
            {productName}
        </Typography>
    );
};

ProductTitleComponent.propTypes = {
    variant: PT.string.isRequired,
    productName: PT.string.isRequired,
};
