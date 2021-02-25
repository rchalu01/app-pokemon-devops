import {render, screen} from '@testing-library/react';
import App from './App';
import React from "react";
import {Provider, useSelector} from "react-redux";
import store from "./app/store";
import reducer, {initialState, incrementNumPage, numPage} from "./features/pokemons/PokemonsSlice";


describe('App', () => {
    test('renders App component', () => {
        render(
            <Provider store={store}>
                <App/>
            </Provider>
        )
        screen.debug();
    });
    test('Renders navigation', () => {
        render(
            <Provider store={store}>
                <App/>
            </Provider>
        )
        expect(screen.getByText('Un pokémon aléatoire')).toBeInTheDocument();
        expect(screen.getByText('Tous les pokémons')).toBeInTheDocument();
        expect(screen.getByText('Pokémon par type')).toBeInTheDocument();
        expect(screen.getByText('Mes pokémons préférés')).toBeInTheDocument();
        //screen.getByRole('');
        expect(screen.getByRole('navigation')).toBeInTheDocument();
        expect(screen.getAllByRole('link').length).toEqual(4);
    });
});

describe('Pokemons slide', () => {
    test('return inital state', () => {
        const initState = initialState;
        const resState = reducer(undefined, {});
        expect(resState).toEqual(initState);
    });

    test('increment page', () => {
        const val = 2;
        let resState = reducer(initialState, incrementNumPage);

        const numPageState = {pokemons: resState}; // nom du store

        expect(numPage(numPageState)).toEqual(val);
    });
});
