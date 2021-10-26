import axios from 'axios';
import {useState, useEffect} from 'react';

export default function Pokemon(){
    const [pokemons, setPokemons] = useState();

    useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => {
      return response.data.results;
    })
    .then((results)=> {
      setPokemons(results)
    }
    )
  }, []);
  
    return(
        <div>
            {pokemons && pokemons.map((pokemon) => (
                <p>
                {pokemon.name}
                </p>
            )) }
        </div>
    )
}