import { useEffect, useState } from "react";

import { Paper } from "@mui/material/";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
// import PT from 'prop-types';

import { LoaderComponent } from "../../components/UIelements/LoaderComponent/LoaderComponent";

import { useFetch } from "../../hooks/useFetch";

import { prepareDataForRender } from "../../utils/prepareDataForRender";

import { API } from "../../constants/API";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export const ProductDetailPage = () => {
    const [productId, setProductId] = useState(null);
    const [category, setCategory] = useState(null);
    const [productData, setProductData] = useState(null);

    const location = useLocation();
    const { request, isLoading, error } = useFetch();

    useEffect(() => {
        if (location.state) {
            const { id, category } = location.state;

            setProductId(id);
            setCategory(category);
        }
    }, [location?.state]);

    useEffect(() => {
        const getProducts = async () => {
            const url = `${API.BASE_URL}${API.GET_PRODUCTS}?category=${category}`;

            try {
                const { status, data } = await request(url);

                if (status !== 200) {
                    // TODO: Handle errors
                }

                const preparedProductsData = prepareDataForRender(data || []);
                setProductData(
                    preparedProductsData.filter(({ id }) => id === productId)
                );
            } catch (error) {
                // We already handle errors in useFetch hook
                console.log("[error.message]", error.message);
            }
        };

        if (productId) {
            getProducts();
        }
    }, [productId, category, request]);

    return <Item>{isLoading && <LoaderComponent />}</Item>;
};

// ProductDetailPage.propTypes = {

// };
