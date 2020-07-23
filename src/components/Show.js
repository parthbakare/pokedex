import React from 'react';

function Show({pokemon}) {
    
    return (
        <div>
            <div className="pokemon__meta">
                <span>MaxHP = {pokemon.maxHP}</span>
                <span>MaxCP = {pokemon.maxCP}</span>
            </div>
            <div className="pokemon__type">
                {pokemon.types.map(type => (
                    <span key={`${type}`}>{type}</span>
                ))}
            </div>
            <div className="pokemon__image">
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className="pokemon__attacks">
                {pokemon.attacks.special.slice(0, 3).map(attack => (
                    <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
                ))}
            </div>
        </div>
    );

}

export default Show;