import React, { Component } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import MovieListItem from './MovieListItem';
import LoadingIndicator from '../common/LoadingIndicator';
import IMovie from '../../models/IMovie';
import { LoadingStatus } from '../../models/types';

import { getTopRatedMovies} from '../services/movies';

type Props = {
};

type State = {
    status: LoadingStatus,
    movies?: IMovie[],
    error?: Error
};

class TopRatedMovies extends Component<Props, State> {
    state : State = {
        status: 'LOADING'
    };

    render() {
        let el;
        const { status, movies, error } = this.state;

        switch( status ) {
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
                    <Row xs={1} md={2} lg={3}>
                        {
                            movies?.map(
                                movies => (
                                    <Col key={movies.id} className="d-flex align-items-stretch my-3">
                                        <MovieListItem
                                            movie={movies}
                                        />
                                    </Col>
                                )
                            )
                        }
                    </Row>
                );
                break;
            case 'ERROR_LOADING':
                el = (
                    <Alert variant="danger my-3">
                        {error?.message}
                    </Alert>
                );
                break;
        }
    
        return el;
    }

    async componentDidMount() {
        this.setState({
            status: 'LOADING'
        });

        try {
            const data = await getTopRatedMovies();
            this.setState({
                status: 'LOADED',
                movies: data
            });
        } catch( error ) {
            this.setState({
                status: 'ERROR_LOADING',
                error:new Error('Error in fetching Movies')
            });
        }
    }
}

export default TopRatedMovies;