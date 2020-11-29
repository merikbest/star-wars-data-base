import React from 'react';

import {withRouter} from "react-router-dom"
import Row from "../row/row";
import {PersonList} from "../sw-components";
import PersonDetails from "../sw-components/person-details";

const PeoplePage = ({history, match}) => {

    const {id} = match.params;

    return (
        <Row
            leftElement={<PersonList onItemSelected={(id) => history.push(id)}/>}
            rightElement={<PersonDetails itemId={id}/>}/>
    );
};

export default withRouter(PeoplePage);