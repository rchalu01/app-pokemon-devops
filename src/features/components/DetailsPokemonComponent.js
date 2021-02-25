import React from "react";

export const DetailsPokemonComponent = ({pokemon}) => {

    let types = pokemon.types.map(type => (
        <div>
            <p>{type.type.name}</p>
        </div>
    ))

    return (
        <div className={'card'}>
            <img style={{width: '20%', height: '20%'}} src={pokemon.sprites.front_default} alt={'imgPoke'}/>
            <h2>{pokemon.name}</h2>
            <h4>Types : </h4>
            {types}
        </div>
    );
}
