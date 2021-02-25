// variables de stockages d'états
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {client} from "../../api/client";

export const initialState = {
    listPokemons: [],
    nextPage: null,
    previousPage: null,
    numPage: 1,
    onePokemon: '',
    urlPokemon: '',
    status: '',
    types: ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'],
    type: 'normal',
    pokemonsFavoris: []
}

// Récupère la liste de tous les pokémons
export const getListPokemons = createAsyncThunk('pokemons/query',
    async () => {
        const response = await client.get('https://pokeapi.co/api/v2/pokemon/'
        )
        return response //action.payload
    })

export const getListPokemonsQuery = createAsyncThunk('pokemonsList/query',
    async query => {
        const response = await client.get(query);
        return response;
    })

// Récupère un pokémon aléatoire
export const getPokemonById = createAsyncThunk('pokemon/query',
    async () => {
        const idRandom = Math.ceil((Math.random() * (900 - 1) + 1));
        const response = await client.get('https://pokeapi.co/api/v2/pokemon/' + idRandom
        )
        return response //action.payload
    })

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        resetStatus: (state) => {
            state.status = 'idle';
        },
        resetNumPage: (state) => {
            state.numPage = 1;
        },
        incrementNumPage: (state) => {
            state.numPage += 1;
        },
        decrementNumPage: (state) => {
            state.numPage -= 1;
        },
        getPokemonByUrl: (state, action) => {
            state.urlPokemon = action.payload.urlPokemon;
        },
        getType: (state, action) => {
            state.type = action.payload.type;
        },
        addPokemonFavoris: (state, action) => {
            if (!state.pokemonsFavoris.some((pokemon) => pokemon.name === action.payload.pokemon.name)) {
                state.pokemonsFavoris.push(action.payload.pokemon);
            }
        },
        deletePokemonFavoris: (state, action) => {
            state.pokemonsFavoris.splice(state.pokemonsFavoris.findIndex((pokemon) => pokemon.name === action.payload.pokemon.name), 1);
        }
    },
    extraReducers: {
        [getListPokemons.pending]: (state) => {
            state.status = 'loading'
        },
        [getListPokemons.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.listPokemons = action.payload.results
            state.nextPage = action.payload.next;
            state.previousPage = action.payload.previous;
        },
        [getPokemonById.pending]: (state) => {
            state.status = 'loading'
        },
        [getPokemonById.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.onePokemon = action.payload
        },
        [getListPokemonsQuery.pending]: (state) => {
            state.status = 'loading'
        },
        [getListPokemonsQuery.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.listPokemons = action.payload.results
            state.nextPage = action.payload.next;
            state.previousPage = action.payload.previous;
        },
    }
})

export default pokemonsSlice.reducer

export const selectPokemons = state => state.pokemons.listPokemons;
export const selectOnePokemon = state => state.pokemons.onePokemon;
export const nextPage = state => state.pokemons.nextPage;
export const previousPage = state => state.pokemons.previousPage;
export const numPage = state => state.pokemons.numPage;
export const urlPokemon = state => state.pokemons.urlPokemon;
export const types = state => state.pokemons.types;
export const type = state => state.pokemons.type;
export const pokemonsFavoris = state => state.pokemons.pokemonsFavoris;

export const statusQuery = state => state.pokemons.status;

export const {resetStatus, incrementNumPage, decrementNumPage, resetNumPage, getPokemonByUrl, getType, addPokemonFavoris, deletePokemonFavoris} = pokemonsSlice.actions;
