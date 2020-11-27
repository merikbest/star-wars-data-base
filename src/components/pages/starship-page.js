import React, {Component} from 'react';

import Row from "../row/row";
import {StarshipList} from "../sw-components";
import StarshipDetails from "../sw-components/starship-details";

class StarshipPage extends Component {
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
                leftElement={<StarshipList onItemSelected={this.onItemSelected} />}
                rightElement={<StarshipDetails itemId={selectedItem}/>}/>
        );
    }
}

export default StarshipPage;