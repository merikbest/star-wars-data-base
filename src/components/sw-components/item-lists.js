import React from 'react';

import ItemList from "../item-list/item-list";
import withData, {widthData} from "../hoc-helpers/with-data"
import SwapiService from "../../services/swdb-service";

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;

const PersonList = withData(ItemList, getAllPeople);
const PlanetList = withData(ItemList, getAllPlanets);
const StarshipList = withData(ItemList, getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};