import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {
    urlPokemon
} from "./PokemonsSlice"
import {DetailsPokemonComponent} from "../components/DetailsPokemonComponent";

export const PokemonDetails = () => {
    const url = useSelector(urlPokemon);

    // state
    const [pokemonItem, setPokemonItem] = useState('');

    useEffect(() => {
        fetch(url).then(res => res.json()).then(result => {
            setPokemonItem(result);
        })
    });

    let detailsPokemons = '';
    if(pokemonItem !== ''){
        detailsPokemons = <DetailsPokemonComponent pokemon={pokemonItem}/>;
    }


    return (
        <div>
            {detailsPokemons}
        </div>
    );
}
