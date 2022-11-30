import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./components/nav-bar/NavBarComponet";
import Home from "./components/HomeComponent";
import FooterComponent from "./components/footer/FooterComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./components/tv-show/TvShowsComponent";
import MovieDetails from "./components/MovieDetailsComponent";

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBarComponent />
        <Routes>
          <Route element={<TvShows />} path="/tv-shows" />
          <Route element={<Home />} path="/" />
          <Route element={<MovieDetails />} path="/details/:imdbID" />
        </Routes>

        <FooterComponent />
      </>
    </BrowserRouter>
  );
}

export default App;
