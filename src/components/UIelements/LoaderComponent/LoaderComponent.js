import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { theme } from "./LoaderComponentTheme";

export const LoaderComponent = () => {
    return (
        <Box sx={theme.container}>
            <CircularProgress color="inherit" />
        </Box>
    );
};
