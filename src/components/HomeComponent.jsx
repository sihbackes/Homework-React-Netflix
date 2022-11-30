import GalleryComponent from "./gallery/GalleryComponent";

const Home = () => {
  console.log("oi");
  return (
    <div>
      <GalleryComponent saga="Shrek" />
      <GalleryComponent saga="Lord of the Rings" />
      <GalleryComponent saga="Twilight" />
    </div>
  );
};

export default Home;
