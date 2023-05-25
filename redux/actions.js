export const setMoviesPerPage = (perPage) => ({
  type: 'SET_MOVIES_PER_PAGE',
  payload: perPage
})

export const PerPage = (pageNumber) => ({
  type: 'SET_PAGE_NUMBER',
  payload: pageNumber
})
