import Carousel from "react-material-ui-carousel";
import PT from "prop-types";

import { MUIcarouselItem } from "./MUIcarouselItem";

export const MUIcarouselComponent = ({ items = [] }) => {
    return (
        <Carousel>
            {items.map(({ altText, imageSrc }, i) => (
                <MUIcarouselItem
                    key={i}
                    altText={altText}
                    imageSrc={imageSrc}
                />
            ))}
        </Carousel>
    );
};

MUIcarouselComponent.propTypes = {
    items: PT.array.isRequired,
};
