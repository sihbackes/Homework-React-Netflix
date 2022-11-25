import { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
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
        <h1 className="title-saga mt-3 mb-3">{this.props.saga}</h1>
        <Row>
          {this.state.movies.map((element, i) => (
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
      </div>
    );
  }
}

export default GalleryComponent;
