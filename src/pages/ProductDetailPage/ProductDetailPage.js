import { useEffect, useState } from "react";

import { Paper, Box, Typography, CardMedia } from "@mui/material/";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
// import PT from 'prop-types';

import { LoaderComponent } from "../../components/UIelements/LoaderComponent/LoaderComponent";
import { ProductTitleComponent } from "../../components/UIelements/ProductTitleComponent/ProductTitleComponent";
import { MUIcarouselComponent } from "../../components/MUIcarousel/MUIcarouselComponent";
import { PriceContainer } from "../../containers/PriceContainer/PriceContainer";

import { useFetch } from "../../hooks/useFetch";

import { prepareDataForRender } from "../../utils/prepareDataForRender";

import { API } from "../../constants/API";

import { theme } from "./ProductDetailPageTheme";

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
    const [carouselData, setCarouselData] = useState(null);

    const location = useLocation();
    const { request, isLoading, error } = useFetch();

    const productTitle = productData?.productName || "";
    const isInStock = productData?.stock !== "0" ? true : false;
    const rrpUAH = productData?.rrp_UAH || "";
    const shortDescription = productData?.shortDescription_UA || "";
    const keyFeatures = productData?.keyFeatures_UA.replace(/;/g, ";\n") || "";
    const videoReview = productData?.videoPresentation;

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
                    preparedProductsData.filter(({ id }) => id === productId)[0]
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

    useEffect(() => {
        if (productData) {
            const { additionalImgs, productName } = productData;
            const carouselData = additionalImgs.split(",").map((imageSrc) => {
                return {
                    imageSrc,
                    productName,
                };
            });

            setCarouselData(carouselData);
        }
    }, [productData]);

    return (
        <Box sx={theme.contentContainer}>
            {isLoading && <LoaderComponent />}

            {!isLoading && (
                <ProductTitleComponent
                    productName={productTitle}
                    variant={"h1"}
                />
            )}

            {carouselData && <MUIcarouselComponent items={carouselData} />}
            {productData && (
                <>
                    <PriceContainer isInStock={isInStock} rrp_UAH={rrpUAH} />

                    <Item>
                        <Typography sx={theme.shortDescription}>
                            {shortDescription}
                        </Typography>
                        <Typography sx={theme.keyFeatures}>
                            {keyFeatures}
                        </Typography>
                    </Item>

                    <Item>
                        <CardMedia
                            component="iframe"
                            src={videoReview}
                            loading="lazy"
                        />
                    </Item>
                </>
            )}
        </Box>
    );
};

// ProductDetailPage.propTypes = {

// };
