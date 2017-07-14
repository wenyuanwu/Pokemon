import {connect} from 'react-redux';
// import {selectAllPokemon} from '../../reducers/selectors';
import {requestAPokemon, receiveAPokemon} from '../../actions/pokemon_actions';
import {selectPokemonItem} from '../../reducers/selectors';
import ItemDetail from './item_detail';

const mapStateToProps = (state, ownProps) => ({
  // piece of state that container subscribes to
    item: selectPokemonItem(state, ownProps.match.params.itemId)
});

export default connect(mapStateToProps)(ItemDetail);
