import * as ACTION_TYPES from '../actions/types'

const initialState = {
  list: []

}

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_QUESTIONS:
      return { ...state, list: action.payload }



    default:
      return state
  }
}

export default questionsReducer


