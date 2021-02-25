import './App.scss';
import React from "react";
import {PokemonsList} from "./features/pokemons/PokemonsList";
import {PokemonRandom} from "./features/pokemons/PokemonRandom";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Pokedex} from "./features/pokemons/Pokedex";
import {PokemonsListTypes} from "./features/pokemons/PokemonsListTypes";
import {PokedexParType} from "./features/pokemons/PokedexParType";
import {PokedexFavoris} from "./features/pokemons/PokedexFavoris";
import {RouterNavigation} from "./features/components/RouterNavigation";

function App() {
    return (
        <RouterNavigation/>
    );
}

export default App;
