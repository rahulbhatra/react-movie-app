import React from 'react';
import { useParams } from 'react-router';

// config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// components
import Grid from './grid/grid';
import Spinner from './spinner/spinner';
import BreadCrumb from './BreadCrumb/bread-crumb';
import MovieInfo from './MovieInfo/movie-info';
import MovieInfoBar from './MovieInfoBar/movie-info-bar';
import Actor from './Actor/actor';

// Hook
import { useMovieFetch } from '../hooks/use-movie-fetch';

// Image
import NoImage from '../images/no_image.jpg';

const Movie = () => {

    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);

    if (loading) return <Spinner />
    if (error) return <div>Something went wrong...</div>

    console.log(movie);    
    return (
        <>
            <BreadCrumb movieTitle={movie.original_title}/>
            <MovieInfo movie={movie}/>
            <MovieInfoBar 
                time={movie.runtime} 
                budget={movie.budget} 
                revenue={movie.revenue} 
            />
            <Grid header='Actors'>
                {movie.actors.map(actor => (
                    <Actor
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` :
                            NoImage
                        }
                    />
                ))}
            </Grid>
        </>
    )
};

export default Movie;