import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
//import Rating from '../common/Rating';
import IMovie from '../../models/IMovie';

type Props = {
    movie: IMovie
};


    const MovieListItem = ( { movie } : Props ) => {
        const {
            id,
            title,
            posterurl

        }=movie;
        /*
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`${posterurl}`} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Button variant="primary">Add to favourites</Button>
            <div>
                        <Link to={`/movies-coming/${id}`} className="btn btn-primary btn-sm">
                            <FontAwesomeIcon icon={faCoffee} className="me-2" />
                            Menu
                        </Link>
            </div>
          </Card.Body>
        </Card>
      );
      */


      return (
        <Link to={`/movies-coming/${id}`} className="card-link">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`${posterurl}`} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Button variant="primary">Add to favourites</Button>
            </Card.Body>
          </Card>
        </Link>
      );
    

   
};

export default MovieListItem;