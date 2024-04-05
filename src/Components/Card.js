import React, { useContext } from 'react';
import { Context } from '../Context';

const Card = ({ card, cart }) => {
  const context = useContext(Context);

  return (
    <div className="col">
      <div className="card" style={{ width: '20rem', textAlign: 'center' }}>
        <button
          className="btn btn-primary"
          onClick={() => {
            context.addToCart(card);
          }}
        >
          +1
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            context.deleteFromCart(card.id);
          }}
        >
          -1
        </button>
        <img
          src={card.img}
          className="card-img-top"
          alt="image not available"
        />
        <div className="card-body">
          <h5 className="card-title">{card.nome}</h5>
          <p className="card-text">{card.prezzo} euro</p>
          {cart ? <p className="card-text">quantità: {card.quantity}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
