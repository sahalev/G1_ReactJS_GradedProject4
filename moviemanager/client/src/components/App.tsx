import React from 'react'
import NavigationMenu from './NavigationMenu';
import { Container } from 'react-bootstrap';
import Home from './Home';
import IMovie from '../models/IMovie';
import MovieListItem from './restaurants-list/MovieListItem';
import MoviesList from './restaurants-list/MoviesList';
import {Route,Switch} from 'react-router-dom'
import TopRatedIndia from './restaurants-list/TopRatedIndia';
import TopRatedMovies from './restaurants-list/TopRatedMovies';
import MoviesinTheatres from './restaurants-list/MoviesinTheatres';
import Favourites from './restaurants-list/Favourites';
import MovieDetails from './movie-details/MovieDetails';



const App = () => {
    return(
    
        <>
        <NavigationMenu/>
        <Container>
            <Switch>
            <Route path="/movies-coming/:id" component={MovieDetails}/>
            <Route path="/movies-coming" component={MoviesList}/>
            <Route path="/movies-in-theaters" component={MoviesinTheatres}/>
            <Route path="/top-rated-india" component={TopRatedIndia}/>
            <Route path="/top-rated-movies" component={TopRatedMovies}/>
            <Route path="/favourite" component={Favourites}/>
            <Route path="/" component={Home}/>
            </Switch>
        </Container>
   
    </>
    );
};

export default App;