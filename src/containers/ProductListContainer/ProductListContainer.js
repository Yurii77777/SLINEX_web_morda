import { useEffect, useState } from "react";

import { Box, Grid } from "@mui/material/";
import { useLocation } from "react-router-dom";

import { LoaderComponent } from "../../components/UIelements/LoaderComponent/LoaderComponent";
import { PreviewProductItem } from "../../components/PreviewProductItem/PreviewproductItem";

import { useFetch } from "../../hooks/useFetch";

import { prepareDataForRender } from "../../utils/prepareDataForRender";

import { API } from "../../constants/API";

// import { theme } from "./ProductListContainerTheme";

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
                    {products.map(
                        ({ id, productName, primeImg, stock, rrp_UAH }) => {
                            return (
                                <PreviewProductItem
                                    key={id}
                                    id={id}
                                    productName={productName}
                                    primeImg={primeImg}
                                    stock={String(stock)}
                                    rrp_UAH={rrp_UAH}
                                    category={category}
                                />
                            );
                        }
                    )}
                </Grid>
            )}
        </Box>
    );
};
