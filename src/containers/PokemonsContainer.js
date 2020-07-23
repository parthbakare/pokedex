import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Pokemon from '../components/Pokemon';
// import GET_POKEMONS from '../graphql/get-pokemons';
import gql from 'graphql-tag';

const GET_POKEMONS = gql`
    query pokemons($first: Int!) {
        pokemons(first: $first) {
            id
            name
            image
            maxHP
            maxCP
            attacks {
                special {
                    name
                    damage
                }
            }
            types 
        }   
    }
`;

function PokemonsContainer() {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { first: 151 },
    });
    
    return (
        <div className="container">
            {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        </div>
    );
}

export default PokemonsContainer