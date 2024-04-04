import { createContext, useState } from 'react';

export const Context = createContext({
  cart: [],
  page: 'home',
  addToCart: () => {},
  deleteFromCart: () => {},
  pay: () => {},
  getCartTotal: () => {},
  getNumberOfCartItems: () => {}
});

export default function ContextProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(sessionStorage.getItem('cart')) || []
  );
  const [page, setPage] = useState('home');

  function addToCart(item) {
    let newCart = [...(JSON.parse(sessionStorage.getItem('cart')) || [])];
    let foundIndex = newCart.findIndex((e) => e.id === item.id);

    if (foundIndex === -1) {
      newCart.push({
        id: item.id,
        nome: item.nome,
        prezzo: item.prezzo,
        img: item.img,
        sezione: item.sezione,
        quantity: 1
      });
    } else {
      ++newCart[foundIndex].quantity;
    }

    sessionStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  }

  function deleteFromCart(id) {
    let newCart = [...JSON.parse(sessionStorage.getItem('cart'))] || [];
    const foundIndex = newCart.findIndex((item) => item.id == id);

    if (foundIndex === -1) {
      console.error(`item at index ${id} not found.`);
      return;
    }

    if (newCart[foundIndex].quantity > 1) {
      --newCart[foundIndex].quantity;
    } else {
      newCart.splice(foundIndex, 1);
    }

    sessionStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  }

  function pay() {
    alert('pagamento effettuato con successo.');
    sessionStorage.setItem('cart', '[]');
    setCart([]);
    setPage('home');
  }

  function getCartTotal() {
    const total = cart.reduce(
      (total, item) => (total += item.prezzo * item.quantity),
      0
    );
    return total.toFixed(2);
  }

  function getNumberOfCartItems() {
    const numberOfCartItems = cart.reduce(
      (number, item) => (number += 1 * item.quantity),
      0
    );
    return numberOfCartItems;
  }

  return (
    <Context.Provider
      value={{
        cart,
        setCart,
        page,
        setPage,
        addToCart,
        deleteFromCart,
        pay,
        getCartTotal,
        getNumberOfCartItems
      }}
    >
      {children}
    </Context.Provider>
  );
}
