import React from 'react'
import styled from 'styled-components'

const MovieDivCard = styled.article`
    border: solid 2px red;

`

function MovieCard ({ title, year, poster }) {
  return (
    <MovieDivCard>
      <h2>{title}</h2>
      <p>{year}</p>
      <img
        src={poster}
        alt={title}
      />
    </MovieDivCard>
  )
}

export default MovieCard
