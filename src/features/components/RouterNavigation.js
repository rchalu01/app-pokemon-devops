import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {PokedexFavoris} from "../pokemons/PokedexFavoris";
import {Pokedex} from "../pokemons/Pokedex";
import {PokedexParType} from "../pokemons/PokedexParType";
import {PokemonRandom} from "../pokemons/PokemonRandom";
import React from "react";

export const RouterNavigation = () => {
    return (
        <Router>
            <div>
                <nav className={'navbar navbar-expand-lg navbar-light bg-light'}>
                    <ul className={'navbar-nav mr-auto'}>
                        <li className={'nav-item'}>
                            <Link className={'nav-link'} to="/">Un pokémon aléatoire</Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link className={'nav-link'} to="/tousLesPokemons">Tous les pokémons</Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link className={'nav-link'} to="/pokemonsParType">Pokémon par type</Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link className={'nav-link'} to="/pokemonsFavoris">Mes pokémons préférés</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/pokemonsFavoris">
                        <PokedexFavoris/>
                    </Route>
                    <Route path="/tousLesPokemons">
                        <Pokedex/>
                    </Route>
                    <Route path="/pokemonsParType">
                        <PokedexParType/>
                    </Route>
                    <Route path="/">
                        <PokemonRandom/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
