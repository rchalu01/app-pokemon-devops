import React from "react";
import {useDispatch} from "react-redux";
import {
    getPokemonByUrl,
    addPokemonFavoris
} from "../pokemons/PokemonsSlice"

export const ListPokemonsComponent = ({pokemons}) => {
    const dispatch = useDispatch();

    const handleDetailsPokemon = async (url) => {
        dispatch(getPokemonByUrl({urlPokemon: url}));
    }

    const handleAjoutFavoris = async (pokemon) => {
        dispatch(addPokemonFavoris({pokemon: pokemon}));
    }
    return (
        pokemons.map(pokemon => (
            <div>
                <li className={"list-group-item"} key={pokemon.name}>
                    <div className={"row"}>
                        <p className={"col"} onClick={() => handleDetailsPokemon(pokemon.url)}>{pokemon.name}</p>
                        <span onClick={() => handleAjoutFavoris(pokemon)}>Ajouter au favoris</span>
                    </div>
                </li>
            </div>
        ))
    )
}
