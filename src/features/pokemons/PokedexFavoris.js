import {PokemonsList} from "./PokemonsList";
import {PokemonDetails} from "./PokemonDetails";
import React from "react";
import {PokemonsListFavoris} from "./PokemonsListFavoris";

export const PokedexFavoris = () => {
    return (
        <div className={'container-fluid'}>
            <div className={'row'}>
                <div className={'col'}>
                    <PokemonsListFavoris/>
                </div>
                <div className={'col'}>
                    <PokemonDetails/>
                </div>
            </div>
        </div>
    );
}
