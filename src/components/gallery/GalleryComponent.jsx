import { Component } from "react";
import { Card, Row, Col, Carousel, Container } from "react-bootstrap";
import "./style.css";

class GalleryComponent extends Component {
  state = {
    movies: [],
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=db3657b9&s=${this.props.saga}`
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({ movies: data.Search });
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  componentDidMount() {
    this.fetchComments();
  }

  render() {
    console.log(this.state.movies);
    return (
      <div className="bg-black">
        <h3 className="title-saga mt-3 mb-3">{this.props.saga}</h3>
        <Carousel fade>
          <Carousel.Item>
            <Row>
              {this.state.movies.slice(0, 5).map((element, i) => (
                <Col key={i}>
                  <Card>
                    <Card.Img
                      className="movie-cover"
                      variant="top"
                      src={element.Poster}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item className="movie-row">
            <Row>
              {this.state.movies.slice(5, 10).map((element, i) => (
                <Col key={i}>
                  <Card>
                    <Card.Img
                      className="movie-cover"
                      variant="top"
                      src={element.Poster}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default GalleryComponent;

{
  /* <Row>
  {this.state.movies.map((element, i) => (
    <Col key={i}>
      <Card>
        <Card.Img className="movie-cover" variant="top" src={element.Poster} />
      </Card>
    </Col>
  ))}
</Row>; */
}
