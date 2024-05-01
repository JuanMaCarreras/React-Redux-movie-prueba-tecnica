import React from 'react'
import { Image, Title, MovieDivCard } from './Styled.components'

function MovieCard ({ title, year, poster }) {
  return (
    <MovieDivCard>
      <Title>{title}</Title>
      <p>{year}</p>
      <Image
        src={poster}
        alt={title}
      />
    </MovieDivCard>
  )
}

export default MovieCard
