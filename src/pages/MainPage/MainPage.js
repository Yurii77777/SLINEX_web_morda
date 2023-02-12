import React from "react";

import { List } from "@mui/material/";
import { Link } from "react-router-dom";

import { CategoryItem } from "../../components/CategoryItem/CategoryItem";

import { theme } from "./MainPageTheme";
import { CATEGORIES } from "../../constants/categories";

export const MainPage = () => {
    return (
        <List sx={theme.contentContainer}>
            {CATEGORIES.map(({ id, categoryImage, categoryName, url }) => (
                <Link key={id} to={url} state={{ category: url }}>
                    <CategoryItem
                        imgSrc={categoryImage}
                        categoryName={categoryName}
                    />
                </Link>
            ))}
        </List>
    );
};
