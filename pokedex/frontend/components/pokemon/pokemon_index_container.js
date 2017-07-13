import {connect} from 'react-redux';
import {selectAllPokemon} from '../../reducers/selectors';
import {requestAllPokemon, receiveAllPokemon} from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => ({
  // piece of state that container subscribes to
    pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: ()=> dispatch(receiveAllPokemon())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);
