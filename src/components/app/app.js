import React, {Component} from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swdb-service";
import ErrorBoundary from "../error-boundary/error-boundary";

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from "../sw-components";

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

        const left = (
            <div>
                <PersonList>
                    {({name}) => <span>{name}</span>}
                </PersonList>

                <StarshipList>
                    {({name}) => <span>{name}</span>}
                </StarshipList>

                <PlanetList>
                    {({name}) => <span>{name}</span>}
                </PlanetList>
            </div>
        );

        const right = (
            <div>
                {/*<PersonDetails itemId={5}/>*/}

                {/*<StarshipDetails itemId={5}/>*/}

                {/*<PlanetList itemId={9}/>*/}
            </div>
        );


        return (
            <ErrorBoundary>
                <div className="stardb-app container">
                    <Header/>

                    <PersonList>
                        {({name}) => <span>{name}</span>}
                    </PersonList>

                    <StarshipList>
                        {({name}) => <span>{name}</span>}
                    </StarshipList>

                    <PlanetList>
                        {({name}) => <span>{name}</span>}
                    </PlanetList>

                    <PersonDetails itemId={11}/>

                    <StarshipDetails itemId={9}/>

                    <PlanetDetails  itemId={5}/>

                    {/*{planet}*/}
                    {/*<Row leftElement={left} rightElement={right}/>*/}
                    {/*<PeoplePage/>*/}
                </div>
            </ErrorBoundary>
        );
    }
}

export default App;
