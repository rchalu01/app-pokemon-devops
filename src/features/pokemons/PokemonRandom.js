import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectOnePokemon, statusQuery, getPokemonById} from "./PokemonsSlice"
import {DetailsPokemonComponent} from "../components/DetailsPokemonComponent";

export const PokemonRandom = () => {
    const pokemon = useSelector(selectOnePokemon);
    const status = useSelector(statusQuery);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemonById()).then();
    }, [dispatch])

    let renderedPokemon = <div>Aucun résultat</div>;

    if (status === 'loading') {
        renderedPokemon = <div>Recherche en cours ...</div>
    } else if (status === 'succeeded') {
        renderedPokemon = <DetailsPokemonComponent pokemon={pokemon}/>
    }

    return (
        <div>
            {renderedPokemon}
        </div>
    )
}
