import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./components/nav-bar/NavBarComponet";
import GalleryComponent from "./components/gallery/GalleryComponent";
import SearchComponent from "./components/search/SearchComponent";
import FooterComponent from "./components/footer/FooterComponent";

function App() {
  return (
    <>
      <NavBarComponent />
      <SearchComponent />
      <GalleryComponent saga="Shrek" />
      <GalleryComponent saga="Lord of the Rings" />
      <GalleryComponent saga="Twilight" />
      <FooterComponent />
    </>
  );
}

export default App;
