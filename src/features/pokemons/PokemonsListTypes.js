import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
    types, type, getType, getPokemonByUrl, addPokemonFavoris
} from "./PokemonsSlice"
import {PaginatedList} from "react-paginated-list";

export const PokemonsListTypes = () => {

    const typesPokemons = useSelector(types);
    const typePokemon = useSelector(type);

    const [pokemons, setPokemons] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type/' + typePokemon).then(res => res.json()).then(result => {
            setPokemons(result.pokemon);
        })
    })

    const handleType = async (type) => {
        dispatch(getType({type: type}));
    }

    const handleDetailsPokemon = async (url) => {
        dispatch(getPokemonByUrl({urlPokemon: url}));
    }

    const handleAjoutFavoris = async (pokemon) => {
        dispatch(addPokemonFavoris({pokemon: pokemon}));
    }

    const listTypesPokemons = typesPokemons.map(type => (
        <p className={"col list-group-item list-group-item-action"} key={type}
           onClick={() => handleType(type)}>{type}</p>
    ));

    return (
        <div>
            <h2>types</h2>
            <div className={"container list-group"}>
                <div className={"row"}>
                    {listTypesPokemons}
                </div>
            </div>
            <h2>liste paginée</h2>
            <PaginatedList
                list={pokemons}
                itemsPerPage={10}
                renderList={(list) => (
                    <>
                        {list.map(item => {
                            return (
                                <li className={"list-group-item"} key={item.pokemon.name}>
                                    <div className={"row"}>
                                        <p className={"col"}
                                           onClick={() => handleDetailsPokemon(item.pokemon.url)}>{item.pokemon.name}</p>
                                        <span onClick={() => handleAjoutFavoris(item.pokemon)}>Ajouter au favoris</span>
                                    </div>
                                </li>
                            );
                        })}
                    </>
                )}
            />
        </div>
    )
}
