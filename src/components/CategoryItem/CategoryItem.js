import React from "react";

import PT from "prop-types";
import { ListItem, Box } from "@mui/material/";

import { theme } from "./CategoryItemTheme";

export const CategoryItem = ({ imgSrc, categoryName }) => (
    <ListItem sx={theme.itemWrapper}>
        <Box
            component="img"
            src={imgSrc}
            alt={categoryName}
            sx={theme.categoryImg}
        />
    </ListItem>
);

CategoryItem.propTypes = {
    imgSrc: PT.string.isRequired,
    categoryName: PT.string.isRequired,
};
