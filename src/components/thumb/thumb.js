import React from 'react';
import { Link } from 'react-router-dom';

// styles
import { Image } from './thumb-style';

const Thumb = ({ image, movieId, clickable }) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src = {image} alt='movie-thumb'/>
            </Link>
        ) : (
            <Image src={image} alt='movie-thumb'/>
        )}
    </div>
);

export default Thumb;