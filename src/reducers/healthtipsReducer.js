import * as ACTION_TYPES from '../actions/types'

const initialState = {
  list: []

}

const healthtipsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_HEALTHTIPS:
      return { ...state, list: action.payload }



    default:
      return state
  }
}

export default healthtipsReducer


