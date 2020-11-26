import React from "react";

import ItemDetails, {Record} from "../item-details/item-details";
import withSwService from "../hoc-helpers/with-sw-service";

const StarshipDetails = (props) => {
    return (
        <ItemDetails
            {...props}>
            <Record field="model" label="Model"/>
            <Record field="manufacturer" label="Manufacturer"/>
            <Record field="length" label="Length"/>
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
};

export default withSwService(StarshipDetails, mapMethodsToProps);