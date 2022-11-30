import { Card, Row, Col, Carousel } from "react-bootstrap";
import "./style.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const GalleryComponent = ({ saga }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          `http://www.omdbapi.com/?apikey=db3657b9&s=${saga}`
        );
        if (response.ok) {
          let data = await response.json();

          setMovies(data.Search);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    if (saga) {
      fetchData();
    }
  }, [saga]);

  return (
    <div className="bg-black">
      <h3 className="title-saga mt-3 mb-3">{saga}</h3>
      <Carousel fade>
        <Carousel.Item>
          <Row>
            {movies.slice(0, 5).map((element, i) => (
              <Col key={i}>
                <Card>
                  <Link to={"/details/" + element.imdbID}>
                    <Card.Img
                      className="movie-cover"
                      variant="top"
                      src={element.Poster}
                    />
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item className="movie-row">
          <Row>
            {movies.slice(5, 10).map((element, i) => (
              <Col key={i}>
                <Card>
                  <Link to={"/details/" + element.imdbID}>
                    <Card.Img
                      className="movie-cover"
                      variant="top"
                      src={element.Poster}
                    />
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default GalleryComponent;
