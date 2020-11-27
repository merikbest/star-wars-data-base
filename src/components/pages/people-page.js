import React, {Component} from 'react';

import Row from "../row/row";
import {PersonList} from "../sw-components";
import PersonDetails from "../sw-components/person-details";

class PeoplePage extends Component {
    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem});
    }

    render() {
        const {selectedItem} = this.state;

        return (
            <Row
                leftElement={<PersonList onItemSelected={this.onItemSelected} />}
                rightElement={<PersonDetails itemId={selectedItem}/>}/>
        );
    }
}

export default PeoplePage;