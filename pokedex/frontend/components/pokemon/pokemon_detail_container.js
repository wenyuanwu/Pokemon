import {connect} from 'react-redux';
// import {selectAllPokemon} from '../../reducers/selectors';
import {requestAPokemon, receiveAPokemon} from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => ({
  // piece of state that container subscribes to
    pokemonDetail: state.pokemonDetail
});

const mapDispatchToProps = dispatch => ({
  requestAPokemon: (id) => dispatch(requestAPokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
