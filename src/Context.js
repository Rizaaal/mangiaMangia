import { createContext, useState } from 'react';
export const Context = createContext({
  cart: [],
});
export default function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <Context.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}
