import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
    return (
        <div className="movie" key={imdbID}>
            <div className="movie-year">
                <p>{Year}</p>
            </div>
            <div className="movie-poster">
                <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
            </div>
            <div className="movie-details">
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    );
};

export default MovieCard;
