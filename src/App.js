import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './componants/MovieList';
import MovieHeading from './componants/MovieHeading';
import MovieSearch from './componants/MovieSearch';
import './App.css';

const App = () => {
  const [search, setSearch] = useState('all');
	const [movies, setMovies] = useState([]);
  const [Favourites,setFavourites] = useState([]);

  const handleClick =(movie)=> {
    const newMovies = [...Favourites,movie];
    setFavourites(newMovies);
  }


	const getMovieRequest = async () => {
		const url = `http://www.omdbapi.com/?s=${search}&apikey=b8c2e19b`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
      console.log(responseJson);
		}
	};

	useEffect(() => {
		getMovieRequest();
	},[search]);

	
	return (
		<div className='container-fluid movie-app'>
      <div className='row d-flex justify-contant-center mt-4 md-4'>
        <MovieHeading heading="Movies"/>
				<MovieSearch search={search} setSearch={setSearch}/>
			</div>
			<div className='row'>
				<MovieList clickFunction={handleClick} movies={movies} />
			</div>
      <div className='row'>
				<MovieList movies={Favourites} />
			</div>
		</div>
	);
};

export default App;