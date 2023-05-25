const initialState = {
  moviePerPage: 10,
  perPage: 1

}

function rootReducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_MOVIES_PER_PAGE' :
      return {
        ...state,
        moviePerPage: action.payload
      }

    case 'SET_PAGE_NUMBER' :
      return {
        ...state,
        perPage: action.payload
      }

    default : return state
  }
}

export default rootReducer
