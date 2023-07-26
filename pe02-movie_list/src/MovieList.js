import React, { useState } from 'react';

const initialList = [
  { 
      title: 'Inception',
      genre: 'Science Fiction',
      releaseYear: 2010,
  },
  { 
      title: 'The Shawshank Redemption',
      genre: 'Drama',
      releaseYear: 1994,
  },
  {
      title: 'The Dark Knight',
      genre: 'Action',
      releaseYear: 2008,
  }
];

export default function MovieList() {
  const [ movies, setMovies ] = useState(initialList);
  const [ selectedGenre, setSelectedGenre ] = useState( "All Genres" )

  function ItemList({ movies }) {
    return (
      <ul>
        {movies.map(movie => (
            <li key={movie.title} onClick={() => handleMovieClick(movie.title)}>
              <label>
                <h3>{movie.title}</h3>
                <p>{movie.genre}</p>
                <p>Release Year: {movie.releaseYear}</p>
              </label>
            </li>
        ))}
      </ul>
    );
  };  
  
  function handleMovieClick(title) {
    alert(`You clicked on ${title}`);
  };
  
  function handleGenreChange(e) {
  setSelectedGenre(e.target.value);
  setMovies(e.target.value === "All Genres"
            ? initialList
            : initialList.filter((movie) => movie.genre === e.target.value));
  };
  
  return (
    <div>
      <h1>Movie List</h1>
      <select 
        value={selectedGenre} 
        onChange={handleGenreChange}>
        <option value="All Genres">All Genres</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Drama">Drama</option>
        <option value="Action">Action</option>
      </select>
      <ItemList
        movies = { movies }/>
    </div>
  );
};



