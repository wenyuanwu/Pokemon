import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = function ({pokemon}) {
  // debugger;
  return (<div>
        <li> <Link to={`/pokemon/${pokemon.id}`}>{ pokemon.name }<img src={pokemon.image_url} width="50"/></Link>
        </li>
        </div>);
};

export default PokemonIndexItem;
