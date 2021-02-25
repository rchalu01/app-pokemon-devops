import {PokemonDetails} from "./PokemonDetails";
import React from "react";
import {PokemonsListTypes} from "./PokemonsListTypes";

export const PokedexParType = () => {
    return (
        <div className={'container-fluid'}>
            <div className={'row'}>
                <div className={'col'}>
                    <PokemonsListTypes/>
                </div>
                <div className={'col'}>
                    <PokemonDetails/>
                </div>
            </div>
        </div>
    );
}
