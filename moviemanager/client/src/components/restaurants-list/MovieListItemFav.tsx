import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
//import Rating from '../common/Rating';
import IMovie from '../../models/IMovie';

type Props = {
    movie: IMovie
};


    const MovieListItemFav = ( { movie } : Props ) => {
        const {
            id,
            title,
            year,
            genres,
            ratings,
            poster,
            contentRating,
            duration,
            releaseDate,
            averageRating,
            originalTitle,
            storyline,
            actors,
            imdbRating,
            posterurl
        }=movie;

  
        const history = useHistory();

        const handleRemoveFromFavorites = () => {
          fetch(`http://localhost:4000/favourite/${id}`, {
            method: 'DELETE'
          })
            .then(response => {
              if (response.ok) {
                history.push('/favourites'); // Redirect to favourites page
              }
            })
            .catch(error => {
              console.error(error);
            });
        };
  

     

      return (
       
          <Card style={{ width: '18rem' }}>
            <Link to={`/movies-coming/${id}`}>
            <Card.Img variant="top" src={`${posterurl}`} style={{ height: '300px', objectFit: 'cover' }}/>
            </Link>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Button variant="primary" onClick={handleRemoveFromFavorites}>
          Remove from favourites
        </Button>
            </Card.Body>
          </Card>
       
      );
    

   
};

export default MovieListItemFav;