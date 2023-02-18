import { Paper, Box } from "@mui/material/";
import PT from "prop-types";

export const MUIcarouselItem = ({ altText, imageSrc }) => {
    return (
        <Paper>
            <Box component="img" alt={altText} src={imageSrc} />
        </Paper>
    );
};

MUIcarouselItem.propTypes = {
    altText: PT.string,
    imageSrc: PT.string.isRequired,
};
