import { useEffect, useState } from "react";

// import PT from 'prop-types';
import { Box, Grid, Paper } from "@mui/material/";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

import { LoaderComponent } from "../components/UIelements/LoaderComponent/LoaderComponent";

import { useFetch } from "../hooks/useFetch";

import { prepareDataForRender } from "../utils/prepareDataForRender";

import { API } from "../constants/API";

// import { theme } from './ProductListContainerTheme';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export const ProductListContainer = () => {
    const [category, setCategory] = useState(null);
    const [products, setProducts] = useState([]);

    const location = useLocation();
    const { request, isLoading, error } = useFetch();

    const isProducts = !!products?.length;

    // Get needed category to render
    useEffect(() => {
        if (location.state) {
            const { category } = location.state;
            const formatedCategory = category.substring(1, category.length);

            setCategory(formatedCategory);
        }
    }, [location]);

    useEffect(() => {
        const getProducts = async () => {
            const url = `${API.BASE_URL}${API.GET_PRODUCTS}?category=${category}`;

            try {
                const { status, data } = await request(url);

                if (status !== 200) {
                    // TODO: Handle errors
                }

                const preparedProductsData = prepareDataForRender(data || []);
                setProducts(preparedProductsData || []);
            } catch (error) {
                // We already handle errors in useFetch hook
                console.log("[error.message]", error.message);
            }
        };

        if (category) {
            getProducts();
        }
    }, [category, request]);

    console.log("[products]", products);

    return (
        <Box>
            {isLoading && <LoaderComponent />}

            {!isLoading && isProducts && (
                <Grid container spacing={2}>
                    {products.map(({ productName, primeImg }) => {
                        return (
                            <Grid item xs={6} md={3}>
                                <Item>
                                    <Box
                                        component="img"
                                        alt="productName"
                                        src={primeImg}
                                    />
                                </Item>
                            </Grid>
                        );
                    })}
                </Grid>
            )}
        </Box>
    );
};

// ProductListContainer.propTypes = {

// };
