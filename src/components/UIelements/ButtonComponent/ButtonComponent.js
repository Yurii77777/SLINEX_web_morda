import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import PT from "prop-types";

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    "&:hover": {
        backgroundColor: grey[700],
    },
}));

export const ButtonComponent = ({
    btnTitle,
    variant,
    disabled = false,
    size,
    onClickHandler,
}) => {
    return (
        <ColorButton
            disabled={disabled}
            variant={variant}
            size={size}
            onClick={() => {
                onClickHandler && onClickHandler();
            }}
        >
            {btnTitle}
        </ColorButton>
    );
};

ButtonComponent.propTypes = {
    variant: PT.oneOf(["text", "contained", "outlined"]).isRequired,
    btnTitle: PT.string.isRequired,
    disabled: PT.bool,
    size: PT.oneOf(["small", "medium", "large"]).isRequired,
    onClickHandler: PT.func,
};
