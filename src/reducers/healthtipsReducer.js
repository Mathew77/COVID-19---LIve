import * as ACTION_TYPES from '../actions/types'

const initialState = {
  list: [],
  types:[]

}

const healthtipsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_HEALTHTIPS:
      return { ...state, list: action.payload }
      case ACTION_TYPES.FETCH_ALL_HEALTHTIPSTYPE:
        return { ...state, types: action.payload }
        case ACTION_TYPES.UPDATE_HEALTH_TIPS_TYPE:
            return { ...state,  ...action.payload }

    default:
      return state
  }
}

export default healthtipsReducer


