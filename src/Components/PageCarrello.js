import { useContext, useEffect } from 'react';
import Navbar from './Navbar';
import { Context } from '../Context';
import Card from './Card';

export default function PageCarrello() {
  const { cart, pay, getCartTotal } = useContext(Context);

  return (
    <>
      <Navbar />
      <h1>Carrello</h1>
      {cart.map((item) => (
        <Card key={item.nome} card={item} prezzo={item.prezzo} cart />
      ))}
      {cart.length !== 0 ? (
        <div>
          <h2>Totale: {getCartTotal()} euro</h2>
          <button className="btn btn-primary" onClick={() => pay()}>
            Paga
          </button>
        </div>
      ) : (
        <h2 className="text-secondary">
          Inizia ad aggiungere i tuoi piatti dalla home!
        </h2>
      )}
    </>
  );
}
