import React from 'react'
import style from '../style/MovieCard.module.css'

function MovieCard ({ title, year, poster }) {
  return (
    <article className={style.container}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.year}>{year}</p>
      <img
        className={style.img}
        src={poster}
        alt={title}
      />
    </article>
  )
}

export default MovieCard
