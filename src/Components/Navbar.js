import { useContext } from 'react';
import { Context } from '../Context';

function Navbar() {
  const { setPage, getNumberOfCartItems } = useContext(Context);

  const CartCounterStyle = {
    backgroundColor: 'red',
    marginLeft: 10,
    padding: 5,
    borderRadius: 100
  };

  const numberOfCartItems = getNumberOfCartItems();

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a
        className="navbar-brand"
        href="#"
        onClick={() => {
          setPage('home');
        }}
      >
        mangiaMangia
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a
              className="nav-link"
              href="#"
              onClick={() => {
                setPage('home');
              }}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={() => {
                setPage('carrello');
              }}
            >
              Carrello
              {numberOfCartItems > 0 ? (
                <span style={CartCounterStyle}>{getNumberOfCartItems()}</span>
              ) : null}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
