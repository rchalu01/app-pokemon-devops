import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
    types, type, getType, getPokemonByUrl
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

    const listTypesPokemons = typesPokemons.map(type => (
        <div>
            <li className={"list-group-item"} key={type} onClick={() => handleType(type)}>
                <div className={"row"}>
                    <p className={"col"}>{type}</p>
                </div>
            </li>
        </div>
    ));

    return (
        <div>
            <h2>types</h2>
            {listTypesPokemons}
            <h2>liste paginée</h2>
            <PaginatedList
                list={pokemons}
                itemsPerPage={10}
                renderList={(list) => (
                    <>
                        {list.map(item => {
                            return (
                                <div>
                                    <span
                                        onClick={() => handleDetailsPokemon(item.pokemon.url)}>{item.pokemon.name}</span>
                                </div>
                            );
                        })}
                    </>
                )}
            />
        </div>
    )
}
