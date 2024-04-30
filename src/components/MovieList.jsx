import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MovieCard from './MovieCard'
import { setMoviesPerPage } from '../redux/actions'
import { Button, DivContiner, DivMovie } from './Button'

function MovieList () {
  const allMovies = useSelector(state => state.movies)
  const moviesPerPage = useSelector(state => state.moviesPerPage)
  const dispatch = useDispatch()

  const [totalMoviesToShow, setTotalMoviesToShow] = useState(10)

  useEffect(() => {
    setTotalMoviesToShow(moviesPerPage)
  }, [moviesPerPage])

  const moviesToShow = allMovies.slice(0, totalMoviesToShow)

  const handleIncrement = () => {
    const newTotalMoviesToShow = totalMoviesToShow + 10
    setTotalMoviesToShow(newTotalMoviesToShow)
    dispatch(setMoviesPerPage(newTotalMoviesToShow))
  }

  const handleDecrement = () => {
    if (totalMoviesToShow > 10) {
      const newTotalMoviesToShow = totalMoviesToShow - 10
      setTotalMoviesToShow(newTotalMoviesToShow)
      dispatch(setMoviesPerPage(newTotalMoviesToShow))
    }
  }

  return (
    <DivContiner>
      <DivMovie>
        {moviesToShow && moviesToShow.map(movie => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
          />
        ))}
      </DivMovie>
      <div>
        <Button onClick={handleDecrement}>-</Button>
        <span>{moviesPerPage} películas por página</span>
        <Button onClick={handleIncrement}>+</Button>
      </div>
    </DivContiner>
  )
}

export default MovieList
