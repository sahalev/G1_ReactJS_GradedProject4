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

  

      const handleAddToFavorites = () => {
        fetch('http://localhost:4000/favourite')
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Failed to fetch favourites');
            }
          })
          .then(data => {
            // Check if movie already present in favourites
            if (data.some((favourite: IMovie) => favourite.id === movie.id)) {
              window.alert('This movie is already present in your favourites');
            } else {
              // Add movie to favourites
              fetch('http://localhost:4000/favourite', {
                method: 'POST',
                body: JSON.stringify(movie),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
                .then(response => {
                  if (response.ok) {
                    window.alert('Record Successfully Added to Favourites');
                  }
                })
                .catch(error => {
                  console.error(error);
                });
            }
          })
          .catch(error => {
            console.error(error);
          });
      };


      return (
       
          <Card style={{ width: '18rem' }}>
            <Link to={`/movies-coming/${id}`}>
            <Card.Img
      variant="top"
      src={`${posterurl}`}
      style={{ height: '300px', objectFit: 'cover' }}
    />
            </Link>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Button variant="primary"  onClick={handleAddToFavorites}>
          Add to favourites
        </Button>
            </Card.Body>
          </Card>
       
      );
    

   
};

export default MovieListItem;