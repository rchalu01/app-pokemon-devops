import {configureStore} from '@reduxjs/toolkit';
import pokemonsReducer from '../features/pokemons/PokemonsSlice';

export default configureStore({
    reducer: {
        pokemons: pokemonsReducer
    },
});
