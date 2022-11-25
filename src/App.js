import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./components/nav-bar/NavBarComponet";
import GalleryComponent from "./components/gallery/GalleryComponent";
function App() {
  return (
    <>
      <NavBarComponent />
      <GalleryComponent saga="Shrek" />
      <GalleryComponent saga="Lord of the Rings" />
      <GalleryComponent saga="Twilight" />
    </>
  );
}

export default App;
