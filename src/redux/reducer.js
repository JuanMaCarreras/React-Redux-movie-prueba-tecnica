import moviesDb from '../../movies.js'

const initialState = {
  movies: moviesDb,
  moviesPerPage: 10,
  pageNumber: 1
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIES_PER_PAGE':
      return {
        ...state,
        moviesPerPage: action.payload
      }
    case 'SET_PAGE':
      return {
        ...state,
        pageNumber: action.payload
      }
    default:
      return state
  }
}

export default rootReducer
