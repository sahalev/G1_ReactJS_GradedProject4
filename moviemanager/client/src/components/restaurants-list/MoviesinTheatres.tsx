import React, { Component } from 'react';
import { Row, Col, Alert, Form } from 'react-bootstrap';
import MovieListItem from './MovieListItem';
import LoadingIndicator from '../common/LoadingIndicator';
import IMovie from '../../models/IMovie';
import { LoadingStatus } from '../../models/types';
import { getMoviesinTheatres } from '../services/movies';

type Props = {};

type State = {
  status: LoadingStatus;
  movies?: IMovie[];
  error?: Error;
  searchQuery: string;
};

class MoviesinTheatres extends Component<Props, State> {
  state: State = {
    status: 'LOADING',
    searchQuery: ''
  };

  handleSearchQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    let el;
    const { status, movies, error, searchQuery } = this.state;

    let filteredMovies = movies;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredMovies = movies?.filter((movie) =>
        movie.title.toLowerCase().includes(query)
      );
    }

    switch (status) {
        case 'LOADING':
          el = (
            <LoadingIndicator
              size="large"
              message="We are fetching the list of movies. Please wait..."
            />
          );
          break;
        case 'LOADED':
          el = (
            <>
              <Form className="my-3">
                <Form.Control
                  type="text"
                  placeholder="Search for a movie by name..."
                  value={searchQuery}
                  onChange={this.handleSearchQueryChange}
                />
              </Form>
              <Row xs={1} md={2} lg={3}>
                {filteredMovies?.map((movie) => (
                  <Col key={movie.id} className="d-flex align-items-stretch my-3">
                    <MovieListItem movie={movie} />
                  </Col>
                ))}
              </Row>
            </>
          );
          break;
      case 'ERROR_LOADING':
        el = (
          <Alert variant="danger my-3">{error?.message}</Alert>
        );
        break;
    }

    return el;
  }

  async componentDidMount() {
    this.setState({
      status: 'LOADING',
    });

    try {
      const data = await getMoviesinTheatres();
      this.setState({
        status: 'LOADED',
        movies: data,
      });
    } catch (error) {
      this.setState({
        status: 'ERROR_LOADING',
        error: new Error('Error in fetching Movies'),
      });
    }
  }
}

export default MoviesinTheatres;