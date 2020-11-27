import React, {Component} from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swdb-service";
import ErrorBoundary from "../error-boundary/error-boundary";
import {SwapiServiceProvider} from "../sw-service-context/sw-service-context";

import "./app.css"
import PeoplePage from "../pages/people-page";
import PlanetsPage from "../pages/planets-page";
import StarshipPage from "../pages/starship-page";

class App extends Component {
    state = {
        showRandomPlanet: true,
        hasError: false,
        swapiService: new SwapiService()
    };

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ? null : SwapiService;
            console.log(Service);
        });
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

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="stardb-app container">
                        <Header onServiceChange={this.onServiceChange}/>
                        <RandomPlanet/>
                        <PeoplePage/>
                        <PlanetsPage/>
                        <StarshipPage/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}

export default App;
