import React from 'react';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-2 hii' onClick={()=>{props.clickFunction(movie)}}>
					<img src={movie.Poster} alt='movie'></img>
					<div className='overlay d-flex align-items-center justify-content-center'>
					<i class="bi bi-bag-heart-fill"></i>
						🤍Add to Favourites
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;