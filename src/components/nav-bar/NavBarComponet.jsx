import logo from "../../assets/netflix_logo.png";
import avatar from "../../assets/avatar.png";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const NavBarComponent = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} className="logo-netflix-nav" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              className={
                location.pathname === "/tv-shows"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <Link to="/" className="navbar-links">
                Home
              </Link>
            </li>
            <li
              className={
                location.pathname === "/tv-shows"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <Link to="/tv-shows" className="navbar-links">
                Tv Shows
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Movies
              </a>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                KIDS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bell-fill icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg>
              </a>
            </li>

            <li className="nav-item">
              <Dropdown bg="dark">
                <Dropdown.Toggle id="dropdown-basic" variant="black">
                  <img src={avatar} className="avatar" alt="avatar" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item className="color-text" href="#/action-1">
                    {" "}
                    <div className="d-flex align-items-center">
                      <img src={avatar} className="avatar-small" alt="avatar" />
                      Ubeyt
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="color-text" href="#/action-2">
                    Manage Profiles
                  </Dropdown.Item>
                  <Dropdown.Item className="color-text" href="#/action-3">
                    Account
                  </Dropdown.Item>
                  <Dropdown.Item className="color-text" href="#/action-3">
                    Help Center
                  </Dropdown.Item>
                  <Dropdown.Item className="color-text" href="#/action-3">
                    Signout Netflix
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
