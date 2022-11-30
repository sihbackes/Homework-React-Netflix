import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  console.log("PARAMS", params);

  return console.log("oi");
};
export default MovieDetails;
