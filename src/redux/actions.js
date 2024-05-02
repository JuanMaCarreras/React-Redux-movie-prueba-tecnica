
export const incrementPage = () => {
  return {
    type: 'INCREMENT_PAGE'
  }
}

export const decrementPage = () => {
  return {
    type: 'DECREMENT_PAGE'
  }
}

export const setMovies = (movies) => {
  return {
    type: 'SET_MOVIES',
    payload: movies
  }
}

export const setMoviesPerPage = (perPage) => {
  return {
    type: 'SET_MOVIES_PER_PAGE',
    payload: perPage
  }
}
