import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import SwapiService from "../../services/swdb-service";
import ErrorBoundary from "../error-boundary/error-boundary";
import {SwapiServiceProvider} from "../sw-service-context/sw-service-context";
import PeoplePage from "../pages/people-page";
import PlanetsPage from "../pages/planets-page";
import StarshipPage from "../pages/starship-page";
import DummySwapiService from "../../services/dummy-swapi-service";
import StarshipDetails from "../sw-components/starship-details";
import LoginPage from "../pages/login-page";
import SecretPage from "../pages/secret-page";

import "./app.css"

class App extends Component {
    state = {
        swapiService: new SwapiService(),
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    };

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService;
            return {
                swapiService: new Service()
            };
        });
    };

    render() {
        const {isLoggedIn} = this.state;

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app container">
                            <Header onServiceChange={this.onServiceChange}/>
                            <RandomPlanet/>
                            <Switch>
                                <Route path="/" render={() => <h2>Welcome to Star Wars DB</h2>} exact/>
                                <Route path="/people/:id?" component={PeoplePage}/>
                                <Route path="/planets/" component={PlanetsPage}/>
                                <Route path="/starships/" component={StarshipPage} exact/>
                                <Route path="/starships/:id"
                                       render={({match}) => {
                                           const {id} = match.params;
                                           return <StarshipDetails itemId={id}/>
                                       }}/>
                                <Route path="/login"
                                       render={() => (
                                           <LoginPage
                                               isLoggedIn={isLoggedIn}
                                               onLogin={this.onLogin}/>
                                       )}/>
                                <Route path="/secret"
                                       render={() => (
                                           <SecretPage isLoggedIn={isLoggedIn}/>
                                       )}/>
                                {/*<Redirect to="/"/>*/}
                                <Route render={() => <h2>Page not found</h2>} />
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}

export default App;
