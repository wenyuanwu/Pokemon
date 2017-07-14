import React from 'react';
import { Route } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    return (
      <section className="pokedex">
      <ul>
        <li>{item.name}</li>
        <li>Happiness: {item.happiness}</li>
        <li>Price: {item.price}</li>
      </ul>
    </section>
  );
};

export default ItemDetail;
