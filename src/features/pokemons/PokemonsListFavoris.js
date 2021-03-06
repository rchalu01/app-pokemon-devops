import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
    pokemonsFavoris, deletePokemonFavoris, getPokemonByUrl
} from "./PokemonsSlice"
import {PaginatedList} from "react-paginated-list";

export const PokemonsListFavoris = () => {

    const listPokemonsFavoris = useSelector(pokemonsFavoris);

    const dispatch = useDispatch();

    const [pokemons, setPokemons] = useState(listPokemonsFavoris);
    const [query, setQuery] = useState('');

    useEffect(() => {

    }, []);

    const handleDeleteFavoris = async (pokemon) => {
        dispatch(deletePokemonFavoris({pokemon: pokemon}));
        let listPokemons = pokemons;
        listPokemons = listPokemons.filter(pokemonItem => pokemonItem.name !== pokemon.name);
        setPokemons(listPokemons);
    }
    const handleDetailsPokemon = async (url) => {
        dispatch(getPokemonByUrl({urlPokemon: url}));
    }

    const handleInput = e => setQuery(e.target.value);

    const handleSearch = async () => {
        if (query) {
            let listPokemonsNonFiltree = [];
            let queryRegex = new RegExp(query);

            pokemons.forEach(function (pokemon) {
                if (queryRegex.test(pokemon.name)) {
                    listPokemonsNonFiltree.push(pokemon);
                }
            });
            setPokemons(listPokemonsNonFiltree);
        } else {
            setPokemons(listPokemonsFavoris);
        }
    }

    return (
        <div>
            <div className={"input-group my-3"}>
                <input
                    type={"text"}
                    className={"form-control"}
                    placeholder={"Your Search ..."}
                    onChange={handleInput}
                />
                <div className={"input-group-append"}>
                    <button
                        className={"btn btn-outline-secondary"}
                        type={"button"}
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>
            <PaginatedList
                list={pokemons}
                itemsPerPage={10}
                renderList={(list) => (
                    <>
                        {list.map(item => {
                            return (
                                <li className={"list-group-item"} key={item.name}>
                                    <div className={"row"}>
                                        <p className={"col"}
                                           onClick={() => handleDetailsPokemon(item.url)}>{item.name}</p>
                                        <span onClick={() => handleDeleteFavoris(item)}>Supprimer des favoris</span>
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
