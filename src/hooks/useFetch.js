import { useState, useCallback } from "react";

export const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(
        async (url, method = "GET", body = null, headers = {}) => {
            setIsLoading(true);

            try {
                headers["Content-Type"] = "application/json";

                if (body) {
                    body = JSON.stringify(body);
                }

                const response = await fetch(url, { method, body, headers });
                const data = await response.json();

                if (!response) {
                    throw new Error(data.message || "Response error");
                }

                return data;
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        },
        []
    );

    return { isLoading, request, error };
};
