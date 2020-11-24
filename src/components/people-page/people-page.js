import React, {Component} from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import SwapiService from "../../services/swdb-service";
import Row from "../row/row";
import ErrorBoundary from "../error-boundary/error-boundary";

class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedPerson: 3,
    };

    onPersonSelected = (selectedPerson) => {
        this.setState({selectedPerson});
    };

    render() {
        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>
                {(item) => (
                    `${item.name} (${item.birthYear})`
                )}
            </ItemList>
        );

        const personDetails = (
            <ErrorBoundary>
                <ItemDetails itemId={this.state.selectedPerson}/>
            </ErrorBoundary>
        );

        return (
            <Row leftElement={itemList} rightElement={personDetails}/>
        );
    }
}

export default PeoplePage;