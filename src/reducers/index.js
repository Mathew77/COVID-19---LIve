import { combineReducers } from 'redux'
import questionsReducer from './questionsReducer'
import facilitiesReducer from './facilitiesReducer'
import usersReducer from './usersReducer'
import doctorsReducer from './doctorReducer'



export default combineReducers({
  questions: questionsReducer,
  facilities: facilitiesReducer,
  listOfUsers:usersReducer,
  doctors:doctorsReducer,

})

