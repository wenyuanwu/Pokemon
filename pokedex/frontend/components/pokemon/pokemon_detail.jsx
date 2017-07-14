import React from 'react';
import { Route } from 'react-router-dom';
import ItemDetailContainer from '../items/item_detail_container';
import { Link } from 'react-router-dom';

class PokemonDetail extends React.Component{
  constructor(props){
    super(props);
    // this.state = [];
  }
  componentDidMount() {
    // debugger;
    this.props.requestAPokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    if(this.props.match.params.pokemonId !== newProps.match.params.pokemonId){
      this.props.requestAPokemon(newProps.match.params.pokemonId);
    }
  }

  render(){

    let moves = this.props.pokemonDetail.moves.join(", ");

    let items = this.props.pokemonDetail.items;
    let itemsArr = items.map((item) => (
      <li key={item.id}><Link to={`/pokemon/${item.pokemon_id}/item/${item.id}`}>
        <img src={item.image_url} width="50"/></Link></li>
  ));

    return (
      <section className="pokedex">
      <ul>
        <li>{this.props.pokemonDetail.name}</li>
        <li>Type: {this.props.pokemonDetail.poke_type}</li>
        <li>Attack: {this.props.pokemonDetail.attack}</li>
        <li>Defense: {this.props.pokemonDetail.defense}</li>
        <li>Moves: {moves}</li>
        <li>Items:<ul>{itemsArr}</ul></li>
      </ul>
      <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
    </section>
);



}

}

export default PokemonDetail;
