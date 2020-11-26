import React from 'react';

import ItemDetails, {Record} from "../item-details/item-details";
import withSwService from "../hoc-helpers/with-sw-service";

const PersonDetails = (props) => { //{itemId, swapiService}
    // const {getPerson, getPersonImage} = swapiService;
    return (
        <ItemDetails
            {...props}
            // вместо
            // itemId={itemId}
            // getData={getPerson}
            // getImageUrl={getPersonImage}>
        >
            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
};

export default withSwService(PersonDetails, mapMethodsToProps);