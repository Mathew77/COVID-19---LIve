import * as ACTION_TYPES from '../actions/types'

const initialState = {
  regusers: []

}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_REGISTER_USERS:
      return { ...state, regusers: [...action.payload] }
    default:
      return state
  }
}

export default usersReducer


