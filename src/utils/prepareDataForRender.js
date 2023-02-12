export const prepareDataForRender = (products = []) => {
    let result = [];
    const isProductsData = !!products.length;

    if (!isProductsData) {
        return result;
    }

    const keysForDataObjects = products[0];
    products.shift();

    result = products.map((row) =>
        row.reduce(
            (result, field, index) => ({
                ...result,
                [keysForDataObjects[index]]: field,
            }),
            {}
        )
    );

    return result;
};
