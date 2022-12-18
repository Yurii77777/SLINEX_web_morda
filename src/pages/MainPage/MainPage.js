import React from "react";

import { List } from "@mui/material/";

import { CategoryItem } from "../../components/CategoryItem/CategoryItem";

import { theme } from "./MainPageTheme";
import { categories } from "../../constants/categories";

export const MainPage = () => {
    return (
        <List sx={theme.contentContainer}>
            {categories.map(({ id, categoryImage, categoryName }) => (
                <CategoryItem
                    key={id}
                    imgSrc={categoryImage}
                    categoryName={categoryName}
                />
            ))}
        </List>
    );
};
