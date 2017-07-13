import React from 'react';

class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
    // this.state = [];
  }
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render(){
    return (
    <div>
      {this.props.pokemon.map(
        poke => (
          <ul> { poke.name }<img src={poke.image_url} width="50"/></ul>
        )
      )}
    </div>
);}

}

export default PokemonIndex;
