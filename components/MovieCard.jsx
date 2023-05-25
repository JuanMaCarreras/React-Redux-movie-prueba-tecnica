
function MovieCard ({ title, year, poster }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{year}</p>
      <img src={poster} alt='image movie not found' />
    </>
  )
}

export default MovieCard
