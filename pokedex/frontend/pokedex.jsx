import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/api_util';
import {requestAllPokemon, requestAPokemon, receiveAPokemon} from './actions/pokemon_actions';
import {fetchAllPokemon, fetchAPokemon} from './util/api_util';
import configureStore from './store/store';
import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);

  // window.receiveAllPokemon = receiveAllPokemon;
  // window.fetchAllPokemon = fetchAllPokemon;
  window.store = store;
  // window.requestAllPokemon = requestAllPokemon;
  // window.selectAllPokemon = selectAllPokemon;
  window.receiveAPokemon = receiveAPokemon;
  window.fetchAPokemon = fetchAPokemon;
  window.requestAPokemon = requestAPokemon;
});
