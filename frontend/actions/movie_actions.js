import {findMovies, findMovie, findTitle} from '../util/movie_api_util';


export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const SEARCH_TITLES = 'SEARCH_TITLES';

const getMovies = (movies) => ({
    type: GET_MOVIES,
    movies
});

const getMovie = (movie) => ({
    type: GET_MOVIE,
    movie
}); 

const searchTitles = (titles) => ({
    type: SEARCH_TITLES,
    titles
})


const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors: errors.responseJSON
});

export const userSelectAllMovies = () => dispatch => findMovies()
.then((movies) => dispatch(getMovies(movies))).fail(errors => (
    dispatch(receiveErrors(errors)))
);


export const userSelectMovie = movie => dispatch => findMovie(movie)
    .then(movie => dispatch(getMovie(movie))).fail(errors => (
        dispatch(receiveErrors(errors)))
);

export const userSearchTitles = (titles) => dispatch => findTitle(titles)
    .then((titles) => dispatch(searchTitles(titles))).fail(errors => (
        dispatch(receiveErrors(errors)))
);
