
import React, { useState, useEffect } from 'react';
import { Row, Col, Alert, Badge } from 'react-bootstrap';
import { Route, RouteComponentProps } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Rating from '../common/Rating';
import LoadingIndicator from '../common/LoadingIndicator';
import IMovie from '../../models/IMovie';
import { LoadingStatus } from '../../models/types';

import { getMoviesComingById } from '../services/movies';

const MovieDetails = ( { match } : RouteComponentProps<{ id: string }> ) => {
    const [ status, setStatus ] = useState<LoadingStatus>( 'LOADING' );
    const [ movie, setMovie ] = useState<IMovie | null>( null );
    const [ error, setError ] = useState<Error | null>( null );

    useEffect(
        () => {
            const fetchMovie = async () => {
                try {
                    const data = await getMoviesComingById( +match.params.id );
                    setMovie( data );
                    setStatus( 'LOADED' );
                } catch( error ) {
                    setError( new Error('Error in fetching data'));
                    setStatus( 'ERROR_LOADING' );
                }
            };

            fetchMovie();
        },
        [ ]
    );

    let el;

    switch( status ) {
        case 'LOADING':
            el = (
                <LoadingIndicator
                    size="large"
                    message="We are fetching the details of the restaurant. Please wait..."
                />
            );
            break;
        case 'LOADED':
            const {
                id,
                title,
                storyline,
                genres,
                posterurl,
                contentRating,
                duration,
                releaseDate
            } = movie as IMovie;

            el = (
                <>
                    <Row>
                        <Col xs={12}>
                            <h1>{title}</h1>
                            <hr />
                        </Col>
                        <Col xs={12} lg={4} className="my-2">
                            <img 
                                src={`${posterurl}`}
                                alt={title}
                                className="w-100"
                            />
                        </Col>
                        <Col xs={12} lg={8} className="my-2">
                            <div>
                                {
                                    genres.map(
                                        genres => (
                                            <Badge
                                                bg="primary me-2"
                                                key={genres}
                                            >
                                                {genres}
                                            </Badge>
                                        )
                                    )
                                }
                            </div>
                            <div className="fs-5 my-2">{storyline}</div>
                            <div className="fs-5 my-2 text-sm">Content Rating :{contentRating}</div>
                            <div className="fs-5 my-2 text-sm">Duration : {duration}</div>
                            <div className="fs-5 my-2 text-sm">Release Date : {releaseDate}</div>
                           {/* <Row xs={3} className="text-sm">
                                <Col>
                                    <FontAwesomeIcon icon={faClock} />
                                    <span className="ms-2">{opens} - {closes}</span>
                                </Col>
                                <Col>
                                    <Rating value={rating} className="me-2" />
                                    {rating} ({numRatings} ratings)
                                </Col>
                                <Col>
                                    Cost for two: Rs. {costForTwo}
                                </Col>
                            </Row>
                            */}
                        </Col>
                    </Row>

                 
                </>
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

export default MovieDetails;
