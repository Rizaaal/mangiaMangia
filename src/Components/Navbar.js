import { useContext } from 'react';
import { Context } from '../Context';

function Navbar() {
  const { setPage } = useContext(Context);

  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        mangiaMangia
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a
              class="nav-link"
              href="#"
              onClick={() => {
                setPage('home');
              }}
            >
              Home
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              onClick={() => {
                setPage('carrello');
              }}
            >
              Carrello
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
