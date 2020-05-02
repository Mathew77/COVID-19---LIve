import axios from "axios";
import { url as baseUrl } from "../api";
import * as ACTION_TYPES from "./types";


/**
 * @Actions
 * CheckIn CRUD OPERATIONS
 * returns API response from server
 * =================================
 * fetchAll()
 * fetchById()
 * create()
 * update()
 * Delete()
 */

export const fetchAllQuestions = (onSuccess, onError) => dispatch => {

  axios
    .get(`${baseUrl}questions`)
    .then(response => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL_QUESTIONS,
        payload: response.data
      })
      console.log(response)
      onSuccess();
    })
    .catch(error => {
      onError();
      console.log(error)
    });
};
