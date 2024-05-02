import moviesDb from '../../movies.js'

const initialState = {
  movies: moviesDb,
  moviesPerPage: 10,
  pageNumber: 1
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_PAGE':
      return {
        ...state,
        pageNumber: state.pageNumber + 10
      }
    case 'DECREMENT_PAGE':
      return {
        ...state,
        pageNumber: state.pageNumber - 10
      }
    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.payload
      }
    case 'SET_MOVIES_PER_PAGE':
      return {
        ...state,
        moviesPerPage: action.payload
      }
    default:
      return state
  }
}

export default rootReducer
