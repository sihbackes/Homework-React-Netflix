import { useState, useEffect, useNavigate } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const MovieDetails = () => {
  const params = useParams();
  console.log(params.imdbID);

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  const fetchMovie = async (movieID) => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=db3657b9&i=${movieID}`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setMovie(data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchMovie(params.imdbID);
  }, [params.imdbID]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <img src={movie.Poster} alt={movie.Title} />
        </Col>
        <Col className="d-flex justify-content-center white-text">
          <div>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <p>{movie.Genre}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Awards}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default MovieDetails;
