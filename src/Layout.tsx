import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div className="bg-primary">
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light border-bottom box-shadow mb-3">
          <div className="container">
            <Link to="./" className="navbar-brand">
              Hilton Movies
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
              <ul className="navbar-nav flex-grow-1">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-dark">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/MovieList" className="nav-link text-dark">
                    Movie List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Podcast" className="nav-link text-dark">
                    Podcast
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
