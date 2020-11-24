import React, {Component} from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swdb-service";
import ErrorBoundary from "../error-boundary/error-boundary";
import Row from "../row/row";
import ItemDetails, {Record} from "../item-details/item-details";

import "./app.css"

class App extends Component {
    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    componentDidCatch() {
        this.setState({hasError: true});
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={this.swapiService.getPerson}
                getImageUrl={this.swapiService.getPersonImage}>

                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={3}
                getData={this.swapiService.getStarship}
                getImageUrl={this.swapiService.getStarshipImage}>

                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>
        );

        const planetDetails = (
            <ItemDetails
                itemId={5}
                getData={this.swapiService.getPlanet}
                getImageUrl={this.swapiService.getPlanetImage}/>
        );

        return (
            <ErrorBoundary>
                <div className="stardb-app container">
                    <Header/>
                    {/*{planet}*/}
                    <Row rightElement={planetDetails} leftElement={personDetails}/>
                    {/*<PeoplePage/>*/}
                </div>
            </ErrorBoundary>
        );
    }
}

export default App;
