import React, {Component} from 'react';

import Row from "../row/row";
import {PlanetList} from "../sw-components";
import PlanetDetails from "../sw-components/planet-details";

class PlanetsPage extends Component {
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
                leftElement={<PlanetList onItemSelected={this.onItemSelected}/>}
                rightElement={<PlanetDetails itemId={selectedItem}/>}/>
        );
    }
}

export default PlanetsPage;