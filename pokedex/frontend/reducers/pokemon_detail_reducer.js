import {RECEIVE_A_POKEMON} from '../actions/pokemon_actions';

const defaultState = { moves: [], items: [] };

const pokemonDetailReducer = (state = defaultState, action) => {

  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_A_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

export default pokemonDetailReducer;
