import React from 'react'

function MovieCard ({ title, year, poster }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{year}</p>
      <img src={poster} alt={title} />
    </>
  )
}

export default MovieCard
