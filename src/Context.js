import { createContext, useState } from 'react';

export const Context = createContext({
  cart: [],
  page: 'home',
  addToCart: () => {},
  getCart: () => {},
  updateCart: () => {},
  deleteFromCart: () => {}
});

export default function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('home');

  function addToCart(item) {
    let oldCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const newCart = [
      ...oldCart,
      {
        id: item.id,
        nome: item.nome,
        prezzo: item.prezzo,
        img: item.img,
        sezione: item.sezione,
        quantity: 1
      }
    ];
    sessionStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  }

  function getCart() {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    return cart.reduce((acc, item) => {
      let lastItem = acc[acc.length - 1];
      if (lastItem?.id === item.id) {
        lastItem.quantity = lastItem.quantity + 1;
        return acc;
      } else {
        acc.push(item);
        return acc;
      }
    }, []);
  }

  function updateCart(id, newItem) {
    let oldCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const indexToUpdate = oldCart.findIndex((item) => item.id == id);
    if (indexToUpdate === -1) {
      console.error(`item at index ${id} not found.`);
      return;
    }
    const newCart = [...oldCart];
    newCart[indexToUpdate] = newItem;
    sessionStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  }

  function deleteFromCart(id) {
    let oldCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const indexToDelete = oldCart.findIndex((item) => item.id == id);
    if (indexToDelete === -1) {
      console.error(`item at index ${id} not found.`);
      return;
    }
    const newCart = [...oldCart];
    newCart.splice(indexToDelete, 1);
    sessionStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  }

  return (
    <Context.Provider
      value={{
        cart,
        page,
        setCart,
        setPage,
        addToCart,
        getCart,
        updateCart,
        deleteFromCart
      }}
    >
      {children}
    </Context.Provider>
  );
}
