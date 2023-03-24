import axios from 'axios';
import IMovie from '../../models/IMovie';

const getMoviesComing = () => {
    return axios.get<IMovie[]>( `${process.env.REACT_APP_API_BASE_URL}/movies-coming` )
            .then( response => response.data )
};


const getMoviesComingById = (id : number) => {
    return axios.get<IMovie>( `${process.env.REACT_APP_API_BASE_URL}/movies-coming/${id}` )
            .then( response => response.data )
};




const getMoviesinTheatres = () => {
    return axios.get<IMovie[]>( `${process.env.REACT_APP_API_BASE_URL}/movies-in-theaters` )
            .then( response => response.data )
};

const getTopRatedIndia = () => {
    console.log("In Top Rated India");
    return axios.get<IMovie[]>( `${process.env.REACT_APP_API_BASE_URL}/top-rated-india` )
            .then( response => response.data )
};

const getTopRatedMovies = () => {
    return axios.get<IMovie[]>( `${process.env.REACT_APP_API_BASE_URL}/top-rated-movies` )
            .then( response => response.data )
};

const getFavourite = () => {
    return axios.get<IMovie[]>( `${process.env.REACT_APP_API_BASE_URL}/favourite` )
            .then( response => response.data )
};



export {
    getMoviesComing,
    getMoviesinTheatres,
    getTopRatedIndia,
    getTopRatedMovies,
    getFavourite,
    getMoviesComingById
};