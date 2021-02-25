import {PokemonsList} from "./PokemonsList";
import {PokemonDetails} from "./PokemonDetails";
import React from "react";

export const Pokedex = () => {
    return (
        <div className={'container-fluid'}>
            <div className={'row'}>
                <div className={'col'}>
                    <PokemonsList/>
                </div>
                <div className={'col'}>
                    <PokemonDetails/>
                </div>
            </div>
        </div>
    );
}
