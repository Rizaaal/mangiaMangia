//app.js

import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import PageCarrello from './Components/PageCarrello';
import PrenotazioniComponent from './Components/Prenotazioni';
import { Context } from './Context';

function App() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState('all');
  const { page } = useContext(Context);

  async function getProducts() {
    const res = await fetch('http://localhost:3001/api/menu');
    const data = await res.json();
    setProducts(data);
    console.log('data', data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const productsToShow =
    selected === 'all'
      ? products
      : products.filter((product) => product.sezione === selected);

  if (page === 'home') {
    return (
      <div>
        <Navbar />
        <div className="btn-group" role="group" aria-label="Categorie">
          <button
            key={'all'}
            type="button"
            className="btn btn-primary"
            onClick={() => setSelected('all')}
          >
            all
          </button>
          {Array.from(new Set(products.map((product) => product.sezione))).map(
            (sezione) => (
              <button
                key={sezione}
                type="button"
                className="btn btn-primary"
                onClick={() => setSelected(sezione)}
              >
                {sezione}
              </button>
            )
          )}
        </div>
        <div>
          {productsToShow.map((product) => (
            <Card key={product.id} card={product} />
          ))}
        </div>
        <PrenotazioniComponent />
      </div>
    );
  } else if (page === 'carrello') {
    return (
      <div>
        <PageCarrello />
      </div>
    );
  }
  return <div>Seleziona</div>;
}

export default App;
