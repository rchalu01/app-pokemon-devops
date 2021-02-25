import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
    selectPokemons,
    statusQuery,
    numPage,
    nextPage,
    previousPage,
    getListPokemons,
    getListPokemonsQuery,
    incrementNumPage,
    decrementNumPage,
    resetNumPage
} from "./PokemonsSlice"
import {ListPokemonsComponent} from "../components/ListPokemonsComponent";

export const PokemonsList = () => {

    const pokemons = useSelector(selectPokemons);
    const status = useSelector(statusQuery);
    const numberPage = useSelector(numPage);
    const nextUrl = useSelector(nextPage);
    const previousUrl = useSelector(previousPage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListPokemons());
        return () => {
            dispatch(resetNumPage());
        }
    }, [])

    const handleNext = async () => {
        dispatch(getListPokemonsQuery(nextUrl));
        dispatch(incrementNumPage());
    }

    const handlePrev = async () => {
        if (numberPage > 1) {
            dispatch(getListPokemonsQuery(previousUrl));
            dispatch(decrementNumPage());
        }
    }

    let renderedPokemons = <div>Aucun résultat</div>;

    if (status === 'loading') {
        renderedPokemons = <div>Recherche en cours ...</div>
    } else if (status === 'succeeded') {
        renderedPokemons = <ListPokemonsComponent pokemons={pokemons}/>
    }

    return (
        <div>
            {renderedPokemons}
            <button
                className={"btn btn-outline-secondary"}
                type={"button"}
                onClick={handlePrev}
            >
                Précédent
            </button>
            <span>{numberPage}</span>
            <button
                className={"btn btn-outline-secondary"}
                type={"button"}
                onClick={handleNext}
            >
                Suivant
            </button>
        </div>
    )
}
