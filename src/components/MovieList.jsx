import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MovieCard from './MovieCard'
import { setMoviesPerPage } from '../redux/actions'
import moviesDB from '../../movies.js'
import style from '../style/MovieList.module.css'

function MovieList () {
  const movies = moviesDB
  const moviesPerPage = useSelector(state => state.moviesPerPage)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(setMoviesPerPage(moviesPerPage + 1))
  }

  const handleDecrement = () => {
    if (moviesPerPage > 1) {
      dispatch(setMoviesPerPage(moviesPerPage - 1))
    }
  }
  return (
    <div className={style.container}>
      {
        movies && movies.map(movie => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
          />
        ))
      }
      <button onClick={handleDecrement}>-</button>
      <span>{moviesPerPage} películas por página</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default MovieList
